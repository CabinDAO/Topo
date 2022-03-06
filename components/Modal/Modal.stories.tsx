import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Modal from "./Modal";
import Box from "../Box";
import Button from "../Button";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {},
} as Meta;

export const Primary: Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Modal Title"}>
        Hello, World!
      </Modal>
    </Box>
  );
};
