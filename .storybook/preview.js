import React from 'react';
import { styled } from "../packages/components/stitches.config";

export const decorators = [
  (Story) => (
    <Preview>
      <Story />
    </Preview>
  ),
];

const Preview = styled("div", {
  fontFamily: "$sans",
  color: "$forest",
  backgroundColor: '$sand',
  p: "$10",
  br: "$1",
  "*": {
    boxSizing: "border-box",
  },
  a:{
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    }
  }
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}