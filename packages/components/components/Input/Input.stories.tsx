import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Input from "./Input";
import { Box } from "../";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {},
  args: {
    label: "Label text",
    description: null,
    required: false,
    error: null,
    placeholder: "Placeholder text",
  },
} as Meta;

const Template: Story = (args) => (
  <Box>
    <Input {...args} />
  </Box>
);

export const Standard = Template.bind({});
Standard.args = {};

export const Required = Template.bind({});
Required.args = { 
  required: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = { 
  description: "This is an additional description",
};

export const WithError = Template.bind({});
WithError.args = { 
  error: "This is an error message",
};
