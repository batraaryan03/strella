import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import StaggeredMenu from "./StaggeredMenu";

const meta: Meta<typeof StaggeredMenu> = {
  title: "Backgrounds/StaggeredMenu",
  component: StaggeredMenu,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "canvas" },
  },
  tags: ["autodocs"],
};

export default meta;

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Pricing", ariaLabel: "See transparent pricing", link: "/pricing" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Instagram", link: "https://instagram.com" },
  { label: "Facebook", link: "https://facebook.com" },
  { label: "Google", link: "https://google.com" },
];

export const Default: StoryObj = {
  render: () => (
    <div className="h-screen bg-[#0a0b08]" style={{ position: "relative", minHeight: 480 }}>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={false}
        displayItemNumbering={true}
        menuButtonColor="#f2f3ed"
        openMenuButtonColor="#f2f3ed"
        changeMenuColorOnOpen={true}
        colors={["#636b2f", "#3f4521"]}
        accentColor="#97a75a"
      />
    </div>
  ),
};

export const WithSocials: StoryObj = {
  render: () => (
    <div className="h-screen bg-[#0a0b08]" style={{ position: "relative", minHeight: 480 }}>
      <StaggeredMenu
        position="left"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="#f2f3ed"
        openMenuButtonColor="#f2f3ed"
        changeMenuColorOnOpen={true}
        colors={["#97a75a", "#636b2f"]}
        accentColor="#b3c275"
      />
    </div>
  ),
};
