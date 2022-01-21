import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button from "./Button";
import { Box, Heading } from "../";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
  args: {
    children: "Join the community",
  },
} as Meta;

const Template: Story = (args) => (
  <Box>
    <Button {...args} />
    <Heading as="h5">Right icon</Heading>
    <Button {...args} rightIcon={<ArrowRightIcon />} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = { type: "secondary" };

export const Link = Template.bind({});
Secondary.args = { type: "link" };
