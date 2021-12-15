import { theme, utils, media } from "@cabindao/topo-theme";
import { createStitches } from "@stitches/react";

export const { styled, css, getCssText } = createStitches({
  theme,
  utils,
  media,
});
