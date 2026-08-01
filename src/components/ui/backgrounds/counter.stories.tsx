import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Counter from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "Backgrounds/Counter",
  component: Counter,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof Counter>;

/** Exact stock look from the docs usage example. */
export const Default: Story = {
  render: () => (
    <div className="flex min-h-[320px] items-center justify-center rounded-[var(--radius-lg)] border border-line bg-surface px-10 py-14">
      <Counter
        value={305}
        places={[100, 10, 1]}
        fontSize={80}
        padding={5}
        gap={10}
        textColor="white"
        fontWeight={900}
      />
    </div>
  ),
};

/** Brand-tuned — olive digits, decimal place, on the charcoal panel. */
export const Olive: Story = {
  render: () => (
    <div className="flex min-h-[320px] items-center justify-center rounded-[var(--radius-lg)] border border-line bg-surface px-10 py-14">
      <Counter
        value={305.7}
        places={[100, 10, 1, ".", 0.1]}
        fontSize={64}
        padding={5}
        gap={10}
        textColor="#b3c275"
        fontWeight={900}
      />
    </div>
  ),
};
