import * as React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import BookingForm from "./booking-form";

const meta: Meta<typeof BookingForm> = {
  title: "Sections/BookingForm",
  component: BookingForm,
  parameters: {
    layout: "centered",
    backgrounds: { default: "canvas" },
    decorators: [
      (Story: () => React.ReactNode) => (
        <div className="w-full max-w-2xl">
          <Story />
        </div>
      ),
    ],
  },
};

export default meta;
type Story = StoryObj<typeof BookingForm>;

export const Default: Story = {};
