import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Divider from "./Divider";
import Box from "../Box";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Divider {...args} />;

export const Primary = Template.bind({});
Primary.args = {}

export const Test = () => (
  <Box>
    <Divider />
    <Divider color="forest"/>
    <Divider color="sand"/>
  </Box>
)
