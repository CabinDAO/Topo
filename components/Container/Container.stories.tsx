import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { styled } from "@stitches/react"
import Container from "./Container";
import Box from "../Box"
import Heading from "../Heading"
import Text from "../Text"

export default {
  title: "Layout/Container",
  component: Container,
  argTypes: {},
} as Meta;

{/*
  *const Frame = styled(Box, {
  *  `& ${Container}`: {
  *    my: "$10"
  *  }
  *})
  */}

const Frame = styled(Box, {
  px: "$10",
  [ `& ${Container}` ]: {
    marginTop: "$10",
    marginBottom: "$10",
    padding: "$10 $5",
    background: "$forest",
    color: "$sand",
    textAlign: "center"
  }
})

export const Primary: Story = () => (
  <Frame>
    <Container size="tight">
      <Heading>Tight container</Heading>
      <Text mono>max-width: 60rem / 960px</Text>
    </Container>
    <Container size="normal">
      <Heading>Normal contain</Heading>
      <Text mono>max-width: 75rem / 1200px</Text>
    </Container>
    <Container size="wide">
      <Heading>Wide container</Heading>
      <Text mono>max-width: 100rem / 1600px</Text>
    </Container>
  </Frame>
)
