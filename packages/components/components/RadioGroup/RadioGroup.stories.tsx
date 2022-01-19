import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story, ArgTypes } from "@storybook/react";
import {RadioGroup, Radio} from "./RadioGroup";
import { Box} from "../";
import Label from "../Label";
import { styled } from "../../stitches.config";

export default {
    title: "Forms/RadioGroup",
    component: RadioGroup,
    args: {
        required: true
    },
} as Meta;

const InputRow = styled("div", {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    columnGap: "$3",
});

const Template: Story = ({ label, value, ...args }) => (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Label label={label} required={args.required}>
            <InputRow>
                <RadioGroup id="rg-1" defaultValue="default">
                    <Radio {...args} inputLabel={"Selected"} id="radio1" value="default"/>
                    <Radio {...args} inputLabel={"Unselected"} id="radio2" value="compact"/>
                </RadioGroup>
            </InputRow>
        </Label>
        <Label label={label+" Controlled"} required={args.required}>
            <InputRow>
                <RadioGroup id="rg-2"  value={value}>
                    <Radio {...args} inputLabel={"Selected"} id="radio3" value="default"/>
                    <Radio {...args} inputLabel={"Unselected"} id="radio4" value="compact"/>
                </RadioGroup>
            </InputRow>
        </Label>
    </Box>
);

export const Standard = Template.bind({});
Standard.args = {
    label: "Standard",
    value: "default"
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: "Disabled",
    value: "default",
    disabled: true
};
