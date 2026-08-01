import { Meta, StoryObj } from "@storybook/nextjs-vite";
import MelbourneMap from "./melbourne-map";

const meta: Meta<typeof MelbourneMap> = {
  title: "Map/MelbourneMap",
  component: MelbourneMap,
  parameters: {
    layout: "padded",
    backgrounds: { default: "canvas" },
    docs: {
      description: {
        component:
          "The real **Leaflet + OpenStreetMap** Melbourne coverage map — fully free, no API key. Olive service-area hull, Docklands → CBD → Hawthorn route, pulsing depot beacon at Docklands, and markers at 20 real suburbs. The map module is loaded client-only (`ssr: false`) and lazy-mounts on scroll into view; the header/depot readouts overlay the Leaflet panes.\n\n**Note:** OSM tiles load over the network — an offline/sandboxed Storybook shows grey tiles, but the olive hull, route, and markers still render.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MelbourneMap>;

/** The section-size map (as used in Service Areas). */
export const Default: Story = {
  render: () => <MelbourneMap className="h-[460px]" />,
};

/** Compact embed — the /contact page footprint. */
export const Compact: Story = {
  render: () => <MelbourneMap className="h-[300px]" />,
};

/** Tall — room to inspect the route, hull and suburb markers. */
export const Tall: Story = {
  render: () => <MelbourneMap className="h-[640px]" />,
};

/** Focused — a suburb chip selected: camera flies to Box Hill + active pin. */
export const Focused: Story = {
  render: () => (
    <MelbourneMap
      className="h-[460px]"
      focus={{ name: "Box Hill", lat: -37.8223, lng: 145.1243 }}
    />
  ),
};
