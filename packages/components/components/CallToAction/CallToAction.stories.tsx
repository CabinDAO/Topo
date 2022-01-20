import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import CallToAction from "./CallToAction";
import { Box } from "../";

export default {
  title: "Layout/CallToAction",
  component: CallToAction,
  argTypes: {},
  args: {
    heading: "Hello Topo",
    primaryLink: {
      label: "Primary link",
      href: "/#primary",
    },
    secondaryLink: null,
  },
} as Meta;

const Template: Story = (args) => (
  <Box>
    <CallToAction 
      heading=""
      primaryLink={{
        label: "",
        href: ""
      }} 
      {...args} />
  </Box>
);

export const Standard = Template.bind({});
Standard.args = {};

export const WithSecondary = Template.bind({});
WithSecondary.args = {
  secondaryLink: {
    label: "Secondary link",
    href: "/#secondary",
  },
};