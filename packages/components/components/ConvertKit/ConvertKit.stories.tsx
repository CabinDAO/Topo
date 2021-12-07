import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ConvertKit from "./ConvertKit";
import { Box } from "../";

export default {
  title: "Components/Hero",
  component: ConvertKit,
  argTypes: {},
} as Meta;

type HeroArgs = Parameters<typeof ConvertKit>[0];

export const Primary: Story<HeroArgs> = (args) => (
  <Box>
    <ConvertKit {...args} />
  </Box>
);
Primary.args = {
  id: "a85e477729", // TODO replace with Cabin ConvertKit ID
};
