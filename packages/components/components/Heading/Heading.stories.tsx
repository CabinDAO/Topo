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

export const Primary: Story = (args) => (
  <Box>
    <Heading {...args}>A decentralized city built by creators, for creators</Heading>
    <Heading as="h2" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h3" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h4" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h5" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h6" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
  </Box>
);
Primary.args = {}

export const Secondary: Story = (args) => (
  <Box>
    <Heading {...args}>A decentralized city built by creators, for creators</Heading>
    <Heading as="h2" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h3" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h4" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h5" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h6" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
  </Box>
);
Secondary.args = {
  type: "secondary"
}

export const Tertiary: Story = (args) => (
  <Box>
    <Heading {...args}>A decentralized city built by creators, for creators</Heading>
    <Heading as="h2" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h3" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h4" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h5" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h6" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
  </Box>
);
Tertiary.args = {
  type: "tertiary"
}
export const Accent: Story = (args) => (
  <Box>
    <Heading {...args}>A decentralized city built by creators, for creators</Heading>
    <Heading as="h2" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h3" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h4" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h5" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
    <Heading as="h6" {...args}>
      A decentralized city built by creators, for creators
    </Heading>
  </Box>
);
Accent.args = {
  type: "accent"
}
