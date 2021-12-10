import React from 'react';
import { styled } from "../stitches.config";

export const decorators = [
  (Story) => (
    <Preview>
      <Story />
    </Preview>
  ),
];

const Preview = styled("div", {
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