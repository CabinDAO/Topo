import React from "react";
import { styled, globalStyles } from "../stitches.config";

export const decorators = [
  (Story) => {
    globalStyles();
    return (
      <Preview>
        <Story />
      </Preview>
    );
  },
];

const Preview = styled("div", {
  p: "$10",
  br: "$1",
  "*": {
    boxSizing: "border-box",
  },
  body: {
    p: 0,
  },
  a: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
