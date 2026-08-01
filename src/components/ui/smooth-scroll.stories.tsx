import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import SmoothScroll from "./smooth-scroll";
import { Card } from "./card";

const meta: Meta<typeof SmoothScroll> = {
  title: "Motion/SmoothScroll",
  component: SmoothScroll,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "canvas" },
  },
  decorators: [
    (Story) => (
      // SmoothScroll reads usePathname() for route-change refreshes;
      // provide the router context explicitly rather than relying on
      // the framework mockup.
      <RouterContext.Provider value={{ pathname: "/" } as never}>
        <Story />
      </RouterContext.Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SmoothScroll>;

/**
 * Demo only — in the app, `SmoothScroll` wraps all page content in the
 * root layout. Here it wraps a tall stack of panels so the inertial
 * smoothing (GSAP ScrollSmoother, free since 3.13) can be felt.
 *
 * Reduced-motion users get native scroll (no GSAP loaded).
 */
export const InertialScroll: Story = {
  render: () => (
    <SmoothScroll>
      <div className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.8125rem] font-medium text-olive">
            GSAP ScrollSmoother
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-ink">
            Scroll — the page glides with inertia
          </h2>
          <p className="mt-3 text-sm text-ink-2">
            This story is the live wrapper from the root layout. In the app,
            the Header, Toaster and FloatingQuote live{" "}
            <em className="text-ink not-italic">outside</em> it because the
            wrapper&apos;s transform breaks <code className="font-mono text-olive-bright">position: fixed</code> descendants.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-4xl space-y-24">
          {[1, 2, 3, 4, 5].map((i) => (
            <Card key={i} className="panel rounded-[var(--radius-card)] p-10 md:p-14">
              <p className="tnum font-mono text-xs text-olive">
                PANEL 0{i} / 05
              </p>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-ink">
                Stacked editorial panel
              </h3>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-2">
                Each panel is a full-width tonal surface — no borders, depth by
                contrast. The smoothing eases scroll velocity so the pile of
                panels drifts rather than snaps.
              </p>
            </Card>
          ))}
          <p className="pb-8 text-center text-xs text-ink-3">
            End of story — native scroll returns for reduced-motion users.
          </p>
        </div>
      </div>
    </SmoothScroll>
  ),
};
