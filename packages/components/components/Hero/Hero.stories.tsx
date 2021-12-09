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
        "https://www.creatorcabins.com/_next/image?url=%22F_next%2Fstatic%2Fmedia%2FheroImage.fc0d8fa3.jpg&w=3840&q=75"
      }
    />
  ),
};
