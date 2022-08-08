import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Tag, Indicator } from "./Tag";
import { Box } from "../";

export default {
  title: "Components/Tag",
  component: Tag,
  argTypes: {},
} as Meta;

export const Primary = () => (
  <>
    <Box>
      <Box
        css={{
          p: "$4 $8",
          mb: "$6",
          display: "block",
          [`& ${Tag}`]: { mx: "$2" },
        }}
      >
        <Tag tone="forest">Hello World</Tag>
        <Tag tone="wheat">Hello World</Tag>
        <Tag tone="sprout">Hello World</Tag>
      </Box>
      <Box
        css={{
          p: "$4 $8",
          mb: "$6",
          display: "block",
          [`& ${Tag}`]: { mx: "$2" },
        }}
      >
        <Tag tone="danger">Hello World</Tag>
        <Tag tone="warning">Hello World</Tag>
        <Tag tone="success">Hello World</Tag>
        <Tag tone="normal">Hello World</Tag>
      </Box>
      <Box
        css={{
          p: "$4 $8",
          mb: "$6",
          display: "block",
          [`& ${Tag}`]: { mx: "$2" },
        }}
      >
        <Tag tone="danger">
          <Indicator />
          Hello World
        </Tag>
        <Tag tone="warning">
          <Indicator />
          Hello World
        </Tag>
        <Tag tone="success">
          <Indicator />
          Hello World
        </Tag>
        <Tag tone="normal">
          <Indicator />
          Hello World
        </Tag>
      </Box>
    </Box>
  </>
);
