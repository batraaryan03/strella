import { Meta, StoryObj } from "@storybook/nextjs-vite";
import GradualBlur from "./GradualBlur";
import { PHOTOS } from "@/lib/content";

const meta: Meta<typeof GradualBlur> = {
  title: "Backgrounds/GradualBlur",
  component: GradualBlur,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof GradualBlur>;

/** Exact stock props from the docs usage example, over a scrolling content rail. */
export const Default: Story = {
  render: () => (
    <div className="relative h-[520px] w-[560px] max-w-full overflow-hidden rounded-[var(--radius-lg)] border border-line">
      <div className="h-full overflow-y-auto p-8">
        <img
          src={PHOTOS.serviceHouse}
          alt="Movers packing a Melbourne home"
          className="mb-6 w-full rounded-md object-cover"
        />
        <h3 className="font-serif text-2xl text-ink">Melbourne, handled.</h3>
        <p className="mt-3 text-sm leading-[1.7] text-ink-2">
          From the CBD laneways to the outer suburbs, Stellar crews move
          homes with precision — every item wrapped, every trip planned,
          every lane loaded with care.
        </p>
        <p className="mt-3 text-sm leading-[1.7] text-ink-2">
          We navigate the busy CBD streets, the narrow laneways, and the
          sprawling outer suburbs with equal ease. Transparent hourly
          pricing, weekend availability, and a $20M insurance cover on
          every single move.
        </p>
        <p className="mt-3 text-sm leading-[1.7] text-ink-2">
          Finding reliable Melbourne removalists shouldn&apos;t be
          stressful. That&apos;s why we keep it simple: a fixed quote up
          front, a crew that arrives on time, and belongings that arrive
          exactly how they left.
        </p>
        <p className="mt-3 text-sm leading-[1.7] text-ink-2">
          Trusted across 300+ postcodes — from Docklands to Dandenong,
          Hawthorn to Werribee — with a 4.9★ Google rating and 2,300+
          verified reviews from Melbourne locals.
        </p>
      </div>

      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </div>
  ),
};
