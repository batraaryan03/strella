"use client";

// Vendored from React Bits (reactbits.dev) — Silk-JS-CSS, brand olive.
// Kept upstream-faithful; targeted disables document vendored patterns
// that trip our stricter lint (impure uniforms sync in the effect, etc.).
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { forwardRef, useRef, useMemo, useLayoutEffect, useEffect, useState } from 'react';
import { Color } from 'three';

const hexToNormalizedRGB = hex => {
  hex = hex.replace('#', '');
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255
  ];
};

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

const SilkPlane = forwardRef(function SilkPlane({ uniforms }, ref) {
  const { viewport } = useThree();

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [ref, viewport]);

  useFrame((_, delta) => {
    // Clamp delta so a long pause (frameloop "never" → "always" after
    // offscreen / tab hidden) doesn't jump the silk animation forward.
    ref.current.material.uniforms.uTime.value += 0.1 * Math.min(delta, 0.05);
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
});
SilkPlane.displayName = 'SilkPlane';

const Silk = ({ speed = 5, scale = 1, color = '#7B7481', noiseIntensity = 1.5, rotation = 0 }) => {
  const meshRef = useRef();
  const wrapRef = useRef(null);
  // Perf: only render while the silk is actually in (or near) the
  // viewport AND the tab is visible — frameloop flips to "never"
  // otherwise, so the footer canvas costs ~0 GPU while offscreen.
  const [active, setActive] = useState(true);
  const inViewRef = useRef(true);
  // SSR-safe: `document` is undefined during server render of this
  // client component, so default to visible; effects reconcile on mount.
  const pageVisibleRef = useRef(true);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const sync = () => setActive(inViewRef.current && pageVisibleRef.current);

    const io = new IntersectionObserver(([entry]) => {
      inViewRef.current = entry.isIntersecting;
      sync();
    }, { threshold: 0 });
    io.observe(el);

    const onVisibility = () => {
      pageVisibleRef.current = !document.hidden;
      sync();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  const uniforms = useMemo(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    // Vendored upstream pattern: imperatively sync the useMemo'd uniforms
    // from props. The react-hooks/immutability rule disallows mutating a
    // value passed to a hook — intentional here (three.js uniforms object).
    /* eslint-disable react-hooks/immutability */
    uniforms.uSpeed.value = speed;
    uniforms.uScale.value = scale;
    uniforms.uNoiseIntensity.value = noiseIntensity;
    uniforms.uColor.value.setRGB(...hexToNormalizedRGB(color));
    uniforms.uRotation.value = rotation;
    /* eslint-enable react-hooks/immutability */
  }, [speed, scale, noiseIntensity, color, rotation, uniforms]);

  return (
    <div ref={wrapRef} className="size-full">
      <Canvas dpr={[1, 1.5]} frameloop={active ? 'always' : 'never'}>
        <SilkPlane ref={meshRef} uniforms={uniforms} />
      </Canvas>
    </div>
  );
};

export default Silk;
