import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Hero from "./Hero";
import { Box } from "../";

export default {
  title: "Components/Hero",
  component: Hero,
  argTypes: {},
} as Meta;

type HeroArgs = Parameters<typeof Hero>[0];

export const Primary: Story<HeroArgs> = (args) => (
  <Box>
    <Hero {...args} />
  </Box>
);
Primary.args = {
  heading: "A decentralized city built by creators, for creators",
  ImageComponent: (props) => (
    <img
      {...props}
      alt={"A real biew of a cabin"}
      src={
        "https://via.placeholder.com/984x464"
      }
    />
  ),
};
