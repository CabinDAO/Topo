import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Text from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children:
    "Today, Cabin is a place to get together IRL with your internet friends. In the future, our hope is that it becomes one node in a network of decentralized properties, owned and operated by small groups of independent online creators and entrepreneurs. The density of creative energy of San Francisco or New York, but wherever and whenever you want it to be. If you were designing a 21st century city from scratch, why would you put it all in one place?",
};
