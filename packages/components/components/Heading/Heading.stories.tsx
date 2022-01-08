import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Heading from "./Heading";
import { Box } from "../";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {},
} as Meta;

export const Level1: Story = (args) => (
  <Box>
    <Heading {...args}>A decentralized city built by creators, for creators</Heading>
  </Box>
);
Level1.args = {
  level: "1",
}

export const Level2: Story = (args) => (
  <Box>
    <Heading {...args}>
      A decentralized city built by creators, for creators
    </Heading>
  </Box>
);
Level2.args = {
  level: "2",
}

export const Level3: Story = (args) => (
  <Box>
    <Heading {...args}>
      A decentralized city built by creators, for creators
    </Heading>
  </Box>
);
Level3.args = {
  level: "3",
}
