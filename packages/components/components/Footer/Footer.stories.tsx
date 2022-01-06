import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Footer from "./Footer";
import { Box } from "../";

export default {
  title: "Layout/Footer",
  component: Footer,
  argTypes: {},
  args: {
    links: null,
  },
} as Meta;

const Template: Story = (args) => (
  <Box>
    <Footer {...args} />
  </Box>
);

export const Standard = Template.bind({});
Standard.args = {};