import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Tooltip from "./Tooltip";
import Button from "../Button";
import { PlayIcon } from "@radix-ui/react-icons";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {},
} as Meta;

const Template: Story = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Tooltip content="Helper Text">
      <Button type="icon">
        <PlayIcon />
      </Button>
    </Tooltip>
  </div>
);

export const Primary = Template.bind({});
