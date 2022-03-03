import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Toast from "./Toast";
import { Box } from "../";
import Button, { IButtonProps } from "../Button/Button";

export default {
  title: "Components/Toast",
  component: Toast,
  argTypes: {},
  args: {},
} as Meta;

const ToastTemplate = (
  args: Parameters<typeof Toast>[0] & Pick<IButtonProps, "type">
) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)} type={args.type}>
        OPEN {args.intent?.toUpperCase?.()}
      </Button>
      <Toast {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

const Template: Story<Parameters<typeof Toast>[0]> = (args) => {
  return (
    <Box
      css={{ width: "100%", display: "flex", justifyContent: "space-between" }}
    >
      <ToastTemplate type={"primary"} intent={"success"} position="TOP_LEFT" {...args} />
      <ToastTemplate type={"link"} intent={"warning"} position="BOTTOM_RIGHT" {...args} />
      <ToastTemplate type={"secondary"} intent={"error"} {...args} />
    </Box>
  );
};

export const Standard = Template.bind({});
Standard.args = { message: "Status Message" };

export const ShowClose = Template.bind({});
ShowClose.args = {
  message: "Status Message",
  showCloseIcon: true,
};

export const ShowAction = Template.bind({});
ShowClose.args = {
  message: "Status Message",
  showCloseIcon: true,
  actions: [
    {
      text: "Action",
      onClick: () => console.log("Clicked an action!"),
    },
  ],
};

export const StatusTitle = Template.bind({});
StatusTitle.args = {
  message: "Status Message",
  title: "Status Title",
};

export const ShowTitleAndClose = Template.bind({});
ShowTitleAndClose.args = {
  showCloseIcon: true,
  title: "Status Title",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const ShowTitleAndAction = Template.bind({});
ShowTitleAndAction.args = {
  title: "Status Title",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  actions: [
    {
      text: "Action",
      onClick: () => console.log("Clicked an action!"),
    },
  ],
};

export const ShowSecondaryAction = Template.bind({});
ShowSecondaryAction.args = {
  title: "Status Title",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  actions: [
    {
      text: "Action",
      onClick: () => console.log("Clicked an action!"),
    },
    {
      text: "Action",
      onClick: () => console.log("Clicked a second action!"),
    },
  ],
};
