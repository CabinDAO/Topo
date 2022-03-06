---
to: components/<%= name %>/<%= name %>.stories.tsx
unless_exists: true
---
import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import <%= name %> from "./<%= name %>";

export default {
  title: "Components/<%= name %>",
  component: <%= name %>,
  argTypes: { },
} as Meta;

const Template: Story = (args) => <<%= name %> {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};

