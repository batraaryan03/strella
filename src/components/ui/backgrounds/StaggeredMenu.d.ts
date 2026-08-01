/**
 * Typings for the vendored React Bits StaggeredMenu.jsx component
 * (untyped upstream source). `items`/`socialItems` default to `[]`,
 * which the untyped file infers as `never[]` — this declaration types
 * them so consumers (stories) can pass real menu/social arrays. Sibling
 * of the .jsx file, so TypeScript uses it as the module's type
 * declaration.
 */
import type { JSX } from "react";

export interface StaggeredMenuItem {
  label: string;
  ariaLabel?: string;
  link: string;
}

export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}

export interface StaggeredMenuProps {
  position?: string;
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  changeMenuColorOnOpen?: boolean;
  isFixed?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

declare const StaggeredMenu: (props: StaggeredMenuProps) => JSX.Element;

export default StaggeredMenu;
