"use client";

import * as React from "react";
import Silk from "@/components/ui/backgrounds/Silk";

/**
 * Site-wide Silk background — performance-conscious wrapper.
 *
 * The user made performance priority #1. The full-viewport Silk WebGL
 * shader is cheap on its own, but it must never burn GPU on a hidden
 * tab. This wrapper:
 *  - pauses the render loop (`frameloop="never"`) while the document
 *    is hidden, resuming on visibility change;
 *  - caps devicePixelRatio at 1.5 on mobile (<=2 on desktop) so the
 *    full-screen canvas stays light on phones.
 */
export default function SiteSilk() {
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const isMobile =
    typeof window !== "undefined" &&
    (window.matchMedia?.("(max-width: 767px)").matches ?? false);

  return (
    <Silk
      speed={4}
      scale={1.15}
      color="#556b2f"
      noiseIntensity={3}
      rotation={0}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      frameloop={hidden ? "never" : "always"}
    />
  );
}
