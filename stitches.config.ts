import { createStitches } from "@stitches/react";
import { media, utils, theme } from "./theme";
export * from "./theme";

export const { styled, css, getCssText, keyframes, globalCss } = createStitches(
  {
    theme,
    utils,
    media,
  },
);
