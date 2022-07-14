import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Navigation from "./Navigation";
import { Box } from "../";

export default {
  title: "Sections/Navigation",
  component: Navigation,
  argTypes: {},
  args: {
    links: null,
  },
} as Meta;

const Template: Story = (args) => (
  <Box>
    <Navigation {...args} />
  </Box>
);

export const Standard = Template.bind({});
Standard.args = {
  links: [
    { label: "About", href: "/#about" },
    { label: "Products", href: "/products" },
    { label: "Community", href: "/#community" },
    { label: "Initiatives", href: "/#initiatives" },
    { label: "Passports", href: "/#passports" },
  ],
};
