import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Calendar } from "./calendar";
import { DateField } from "./date-field";

const calendarMeta: Meta<typeof Calendar> = {
  title: "Primitives/Calendar",
  component: Calendar,
  parameters: { layout: "padded", backgrounds: { default: "canvas" } },
};

export default calendarMeta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => (
    <div className="panel inline-block rounded-[var(--radius-lg)]">
      <Calendar mode="single" />
    </div>
  ),
};

export const MinDateToday: Story = {
  render: () => (
    <div className="panel inline-block rounded-[var(--radius-lg)]">
      <Calendar mode="single" minDate={new Date()} />
    </div>
  ),
};

export const DateFieldDemo: Story = {
  render: () => (
    <div className="w-72">
      <DateField />
    </div>
  ),
};
