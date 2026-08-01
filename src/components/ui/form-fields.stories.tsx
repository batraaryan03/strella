import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Select } from "./select";

const meta: Meta = {
  title: "Primitives/Form Fields",
  parameters: {
    layout: "centered",
    backgrounds: { default: "canvas" },
  },
};

export default meta;

export const Inputs: StoryObj = {
  render: () => (
    <div className="w-[340px] space-y-6">
      <div>
        <Label htmlFor="f-name">Full name</Label>
        <Input id="f-name" placeholder="Jordan Walsh" />
      </div>
      <div>
        <Label htmlFor="f-phone">Phone</Label>
        <Input id="f-phone" type="tel" placeholder="+61 400 000 000" />
      </div>
      <div>
        <Label htmlFor="f-focus">Focused state</Label>
        <Input id="f-focus" defaultValue="Hawthorn" autoFocus />
      </div>
      <div>
        <Label htmlFor="f-dis">Disabled</Label>
        <Input id="f-dis" disabled placeholder="Unavailable" />
      </div>
    </div>
  ),
};

export const Textareas: StoryObj = {
  render: () => (
    <div className="w-[340px]">
      <Label htmlFor="f-msg">Additional details</Label>
      <Textarea
        id="f-msg"
        placeholder="Any special items, access issues, or questions?"
      />
    </div>
  ),
};

export const Selects: StoryObj = {
  render: () => (
    <div className="w-[340px] space-y-6">
      <div>
        <Label htmlFor="f-type">Move type</Label>
        <Select id="f-type" defaultValue="House">
          <option>House</option>
          <option>Apartment</option>
          <option>Office</option>
          <option>Studio</option>
        </Select>
      </div>
      <div>
        <Label htmlFor="f-size">Truck size</Label>
        <Select id="f-size" defaultValue="4T">
          <option>4 Tonne</option>
          <option>8 Tonne</option>
          <option>10 Tonne</option>
        </Select>
      </div>
    </div>
  ),
};
