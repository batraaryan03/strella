"use client";

/* eslint-disable react/no-unknown-property */
import * as React from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useFBO, useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { easing } from "maath";

// Preload the lens model once at module level
useGLTF.preload("/assets/3d/lens.glb");

/**
 * GlassCursor — a standalone refractive lens cursor. This renders ONLY
 * the lens mesh inside a bare Canvas — no ScrollControls, no Scroll
 * html, no Typography/Images/NavItems. No extra content overlay, just
 * the pure refractive glass drop following the pointer.
 *
 * The Canvas is full-viewport with alpha: true so the page content
 * shows through unaffected. The lens mesh follows the cursor via
 * useFrame + easing.damp3.
 *
 * Desktop fine-pointer only: touch screens use the native cursor.
 */
export default function GlassCursor() {
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const fine =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(fine);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] hidden md:block"
    >
      <React.Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
          <LensMesh />
        </Canvas>
      </React.Suspense>
    </div>
  );
}

/**
 * LensMesh — standalone refractive cylinder lens. No ScrollControls,
 * no Scroll html, no Typography/Images/NavItems. Just the lens mesh
 * following the pointer with MeshTransmissionMaterial.
 */
function LensMesh() {
  const ref = React.useRef<THREE.Mesh>(null);
  const { nodes } = useGLTF("/assets/3d/lens.glb");
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = React.useState(() => new THREE.Scene());
  const geoWidthRef = React.useRef(1);

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const geo = (nodes as any).Cylinder?.geometry;
    if (geo) {
      geo.computeBoundingBox();
      const box = geo.boundingBox;
      geoWidthRef.current = box ? box.max.x - box.min.x : 1;
    }
  }, [nodes]);

  useFrame((state, delta) => {
    const { gl, pointer, camera } = state;
    const v = vp;

    // Follow the pointer (easing.damp3 for smooth lerp)
    const destX = (pointer.x * v.width) / 2;
    const destY = (pointer.y * v.height) / 2;
    if (ref.current) {
      easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);
    }

    // Scale the lens to a reasonable cursor size
    const maxWorld = v.width * 0.9;
    const desired = maxWorld / geoWidthRef.current;
    if (ref.current) {
      ref.current.scale.setScalar(Math.min(0.15, desired));
    }

    // Render the empty scene into the FBO buffer for the transmission material
    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    // Transparent background so the page shows through
    gl.setClearColor(0x000000, 0);
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const geometry = (nodes as any).Cylinder?.geometry;

  if (!geometry) return null;

  return (
    <mesh
      ref={ref}
      scale={0.15}
      rotation-x={Math.PI / 2}
      geometry={geometry}
    >
      <MeshTransmissionMaterial
        buffer={buffer.texture}
        ior={1.2}
        thickness={4}
        anisotropy={0.01}
        chromaticAberration={0.08}
      />
    </mesh>
  );
}