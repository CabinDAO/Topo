import colors from "./colors"
import space from "./space"
import { fonts, fontSizes, fontWeights } from "./type"
import { elevation } from "./elevation"

export const theme = {
  colors,
  space: {
    ...space,
  },
  sizes: {
    ...space,
  },
  fonts,
  fontSizes,
  fontWeights,
  borderWidths: {
    px: "1px",
  },
  radii: {
    1: "0.325rem",
    2: "1.5rem",
    3: "3rem",
    pill: "9999px",
  },
  zIndices: elevation,
};

export default theme;
