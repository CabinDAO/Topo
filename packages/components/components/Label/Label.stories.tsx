import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Label from "./Label";
import { Box } from "../";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {},
  args: {
    label: "Label text",
    description: null,
    required: false,
    error: null,
  },
} as Meta;

const Template: Story = (args) => (
  <Box>
    <Label {...args}>

    </Label>
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
