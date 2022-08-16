import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { styled } from "@stitches/react";
import Flex from "./Flex";
import Box from "../Box";
import Heading from "../Heading";

export default {
  title: "Layout/Flex",
  component: Flex,
  argTypes: {},
} as Meta;

const FlexItem = styled(Box, {
  display: "block",
  height: "$10",
  width: "$10",
  backgroundColor: "$sand",
  border: "1px solid $sprout",
});


export const Primary: Story = () => (
  <>
    <Heading as="h4">Defaults:</Heading>
      <Flex css={{background: "$forest", minHeight:200}}>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
      </Flex>

    <Heading as="h4">Centered</Heading>
    <Flex content="center" items="center" css={{background: "$forest", minHeight: 200}}>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
      </Flex>

    <Heading as="h4">End</Heading>
    <Flex content="flex-end" items="flex-end" css={{background: "$forest", minHeight:200}}>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
      </Flex>

    <Heading as="h4">Space Around</Heading>
    <Flex content="space-around" items="center" css={{background: "$forest", minHeight:200}}>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
      </Flex>

    <Heading as="h4">Space Between</Heading>
    <Flex content="space-between" items="center" css={{background: "$forest", minHeight:200}}>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
        <FlexItem></FlexItem>
      </Flex>

  </>
);
