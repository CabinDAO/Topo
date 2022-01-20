import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Select from "./Select";
import { Box } from "../";

export default {
  title: "Forms/Select",
  component: Select,
  argTypes: {},
  args: {
    label: "Label text",
    description: null,
    required: false,
    error: null,
    placeholder: "Placeholder text",
    options: [{key:"oranges",label:"Oranges"},{key:"apples",label:"Apples"},{key:"pineapples",label:"Pineapples"},,{key:"pears",label:"Pears"}]
  },
} as Meta;

const Template: Story = (args) => (
  <Box>
    <Select {...args} />
  </Box>
);

export const Standard = Template.bind({});
Standard.args = {
};

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

export const Disabled = Template.bind({});
Disabled.args = { 
  disabled: true
};

export const Controlled = Template.bind({});
Controlled.args = { 
  value: "apples"
};
