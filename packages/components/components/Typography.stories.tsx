import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { styled } from "../stitches.config";
import { theme } from "@cabindao/topo-theme";
import { Box, Text, Heading } from "./";

export default {
  title: "Tokens/Typography",
  argTypes: {},
} as Meta;

export const Typography: Story = (args) => (
  <Box css={{ width: "100%" }}>
    <Box css={{ display: "flex", justifyContent: "space-between", mb: "$20" }}>
      <Box css={{ maxWidth: "35%"}}>
        <Heading>IBM Plex Mono</Heading>
        <Text mono>
          Plex was designed to illustrate the unique relationship between
          mankind and machine. For Cabin, we chose this font as a nod to the
          history of tech and the digital frontier of the web3 space.
        </Text>
      </Box>
      <Box css={{ width: "50%", marginLeft: "auto" }}>
        <Box css={{ my: "$4" }}>
          <Text mono weight="bold" size="xl" uppercase tight>abcdefghijklmnopqrstuvwxyz</Text>
          <Text mono weight="bold" size="xl" tight>abcdefghijklmnopqrstuvwxyz</Text>
          <Text mono weight="bold" size="xl" tight>1234567890!@#$%^&*()</Text>
        </Box>
        <Box css={{ my: "$4" }}>
          <Text mono size="xl" uppercase tight>abcdefghijklmnopqrstuvwxyz</Text>
          <Text mono size="xl" tight>abcdefghijklmnopqrstuvwxyz</Text>
          <Text mono size="xl" tight>1234567890!@#$%^&*()</Text>
        </Box>
        <Box css={{ my: "$4" }}>
          <Text mono weight="light" size="xl" uppercase tight>abcdefghijklmnopqrstuvwxyz</Text>
          <Text mono weight="light" size="xl" tight>abcdefghijklmnopqrstuvwxyz</Text>
          <Text mono weight="light" size="xl" tight>1234567890!@#$%^&*()</Text>
        </Box>
      </Box>
    </Box>
    <Box css={{ display: "flex", justifyContent: "space-between" }}>
      <Box css={{ maxWidth: "35%"}}>
        <Heading sans>Poppins</Heading>
        <Text >
          Poppins is a geometric sans-serif typeface released as open-source and is available for free on Google Fonts. We choose it for it’s clean, minimalistic style and readibility.
        </Text>
      </Box>
      <Box css={{ width: "50%", marginLeft: "auto" }}>
        <Box css={{ my: "$4" }}>
          <Text weight="bold" size="xl" uppercase tight>abcdefghijklmnopqrstuvwxyz</Text>
          <Text weight="bold" size="xl" tight>abcdefghijklmnopqrstuvwxyz</Text>
          <Text weight="bold" size="xl" tight>1234567890!@#$%^&*()</Text>
        </Box>
        <Box css={{ my: "$4" }}>
          <Text size="xl" uppercase tight>abcdefghijklmnopqrstuvwxyz</Text>
          <Text size="xl" tight>abcdefghijklmnopqrstuvwxyz</Text>
          <Text size="xl" tight>1234567890!@#$%^&*()</Text>
        </Box>
        <Box css={{ my: "$4" }}>
          <Text weight="light" size="xl" uppercase tight>abcdefghijklmnopqrstuvwxyz</Text>
          <Text weight="light" size="xl" tight>abcdefghijklmnopqrstuvwxyz</Text>
          <Text weight="light" size="xl" tight>1234567890!@#$%^&*()</Text>
        </Box>
      </Box>
    </Box>
  </Box>
);
