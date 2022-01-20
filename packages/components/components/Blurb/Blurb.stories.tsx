import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Blurb from "./Blurb";
import { Box } from "..";

export default {
  title: "Layout/Blurb",
  component: Blurb,
  argTypes: {},
  args: {
    heading: "Hello Topo",
    body: "Today, Cabin is a place to get together IRL with your internet friends. In the future, our hope is that it becomes one node in a network of decentralized properties, owned and operated by small groups of independent online creators and entrepreneurs. The density of creative energy of San Francisco or New York, but wherever and whenever you want it to be. If you were designing a 21st century city from scratch, why would you put it all in one place?",
  },
} as Meta;

const Template: Story = (args) => (
  <Box>
    <Blurb 
      heading=""
      body=""
      {...args} />
  </Box>
);

export const Standard = Template.bind({});
Standard.args = {};

export const WithLink = Template.bind({});
WithLink.args = {
  link: {
    label: "Link",
    href: "/#primary",
  },
};