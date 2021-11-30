import { theme, utils, media } from "topo-theme";
import { createStitches } from "@stitches/react";

export const { styled, css, getCssText } = createStitches({
  theme,
  utils,
  media,
});
