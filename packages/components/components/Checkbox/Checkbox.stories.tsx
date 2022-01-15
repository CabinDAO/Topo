import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story, ArgTypes } from "@storybook/react";
import Checkbox from "./Checkbox";
import { Box } from "../";
import Label from "../Label";
import { styled } from "../../stitches.config";

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
  args: {
    checked: true,
    required: false,
    error: null,
  },
} as Meta;

const InputRow = styled("div", {
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  columnGap: "$3",
});

const Template: Story = ({ label, inputLabel, checked, ...args }) => (
  <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
    <Label label={label} required={args.required}>
      <InputRow>
        <Checkbox {...args} id="checkbox" />
        <label htmlFor="checkbox">{inputLabel}</label>
      </InputRow>
    </Label>

    <Label label={`Controlled ${label}`} required={args.required}>
      <InputRow>
        <Checkbox {...args} id="checkbox" checked={checked} />
        <label htmlFor="checkbox">{inputLabel} controlled</label>
      </InputRow>
    </Label>
  </Box>
);

export const Standard = Template.bind({});
Standard.args = {
  label: "Standard",
  inputLabel: "checkbox",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  inputLabel: "checkbox",
  disabled: true,
};
