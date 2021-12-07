import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Wrapper from "./Wrapper";
import { Box } from "..";

export default {
  title: "Components/Wrapper",
  component: Wrapper,
  argTypes: {},
} as Meta;

type WrapperArgs = Parameters<typeof Wrapper>[0];

export const Primary: Story<WrapperArgs> = (args) => (
  <Box>
    <Wrapper {...args} />
  </Box>
);
Primary.args = {
  children: <>Hello, world</>,
};
