import { useId, type ComponentProps } from "react";

import { cn } from "@/lib/utils";

export interface NoiseTextureProps extends ComponentProps<"svg"> {
  /** Extra classes merged onto the root `svg` element. */
  className?: string;
  /**
   * `baseFrequency` for `feTurbulence`; higher values yield finer-grained noise.
   * @default 0.4
   */
  frequency?: number;
  /**
   * `numOctaves` for `feTurbulence`; more octaves add detail at smaller scales.
   * @default 6
   */
  octaves?: number;
  /**
   * Linear slope on each channel after desaturation; adjusts contrast of the noise.
   * @default 0.15
   */
  slope?: number;
  /**
   * Opacity of the filled noise layer (`rect`).
   * @default 0.6
   */
  noiseOpacity?: number;
}

/**
 * NoiseTexture — Magic UI fractal-noise grain. Brand-tuned: the noise is
 * desaturated and re-tinted olive (R≈0.06, G≈0.07, B≈0.05 slopes) so the
 * texture reads as a whisper of anaconda-green rather than neutral grey.
 * Layer content above with `z-10` when needed.
 */
export const NoiseTexture = ({
  className,
  frequency = 0.4,
  octaves = 6,
  slope = 0.15,
  noiseOpacity = 0.6,
  ...props
}: NoiseTextureProps) => {
  const filterId = useId();

  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 z-0 size-full opacity-50 select-none",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <filter id={filterId}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency={frequency}
          numOctaves={octaves}
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
        {/* Olive tint — warm channel-weighted slopes, not neutral grey */}
        <feComponentTransfer>
          <feFuncR type="linear" slope={slope * 0.62} />
          <feFuncG type="linear" slope={slope * 0.72} />
          <feFuncB type="linear" slope={slope * 0.45} />
        </feComponentTransfer>
      </filter>
      <rect
        width="100%"
        height="100%"
        filter={`url(#${filterId})`}
        opacity={noiseOpacity}
      />
    </svg>
  );
};
