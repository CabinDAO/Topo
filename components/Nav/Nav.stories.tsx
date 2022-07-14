import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Nav, { NavLink } from "./";

export default {
  title: "Sections/Nav",
  component: Nav,
  argTypes: {},
  args: {
    links: [
      { label: "About", href: "#" },
      { label: "Products", href: "#" },
      { label: "Community", href: "#" },
      { label: "Initiatives", href: "#" },
      { label: "Passports", href: "#" },
    ],
  },
} as Meta;

interface StoryArgs {
  links: { label: string; href: string }[];
}

export const HeaderNav: Story<StoryArgs> = ({ links }) => (
  <Nav>
    {links.map((link, idx) => (
      <NavLink key={idx} href={link.href}>
        {link.label}
      </NavLink>
    ))}
  </Nav>
);
