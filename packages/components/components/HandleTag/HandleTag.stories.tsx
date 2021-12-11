import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import HandleTag from "./HandleTag";
import {Box} from "../";

export default {
  title: "Components/HandleTag",
  component: HandleTag,
  argTypes: {},
} as Meta;

export const Default = (args: {avatar: string}) => (
  <Box>
    <Box style={{backgroundColor: "#324841", padding: 24}}>
      <HandleTag {...args}>Dark Background</HandleTag>
    </Box>
    <Box style={{backgroundColor: "#fff", padding: 24}}>
      <HandleTag {...args} bg="light">
        Light Background
      </HandleTag>
    </Box>
  </Box>
);
Default.args = {
  avatar: "https://i.pravatar.cc/300",
};
