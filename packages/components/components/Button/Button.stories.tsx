import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { IButtonProps } from "./Button";
import { Box, Heading } from "../";
import { ArrowRightIcon, ArrowLeftIcon, StarIcon } from "@radix-ui/react-icons";

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
    <Box>
      <Heading>Button:</Heading>
      <Button {...args} />
      <Button {...args} outline />
      <Button {...args} ghost />
      <Button {...args} ghost rightIcon={<ArrowRightIcon />} />
      <Button {...args} leftIcon={<ArrowLeftIcon />} />
      <Button {...args} rightIcon={<ArrowRightIcon />} />
      <Button {...args} leftIcon={<StarIcon />}rightIcon={<StarIcon />} />
    </Box>
    <Box>
      <Heading>Links:</Heading>
      <Button as="a" href="#" {...args} />
      <Button as="a" href="#" {...args} outline />
      <Button as="a" href="#" {...args} ghost />
      <Button as="a" href="#" {...args} ghost rightIcon={<ArrowRightIcon />} />
      <Button as="a" href="#" {...args} leftIcon={<ArrowLeftIcon />} />
      <Button as="a" href="#" {...args} rightIcon={<ArrowRightIcon />} />
      <Button as="a" href="#" {...args} leftIcon={<StarIcon />}rightIcon={<StarIcon />} />
    </Box>
  </Box>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = { type: "secondary" };

export const Tertiary = Template.bind({});
Tertiary.args = { type: "tertiary" };

export const Accent1 = Template.bind({});
Accent1.args = { type: "accent1" };

export const Accent2 = Template.bind({});
Accent2.args = { type: "accent2" };
