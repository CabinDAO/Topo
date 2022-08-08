import { createStitches, CSSProperties } from "@stitches/react";
const spacing = {
  px: "1px",
  0: "0px",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
};

const green = {
  green100: "#E0FFE5",
  green200: "#A2FFB3",
  green300: "#4FFF79",
  green400: "#00FF47",
  green500: "#06DF59",
  green600: "#03AB5B",
  green700: "#06774C",
  green800: "#324841",
  green900: "#1D2B2A",
};

const blue = {
  blue100: "#ECF9FF",
  blue200: "#D0EFFF",
  blue300: "#ACE1FF",
  blue400: "#90C5E3",
  blue500: "#77A9C7",
  blue600: "#507996",
  blue700: "#324E65",
  blue800: "#263A4D",
  blue900: "#192634",
};

const yellow = {
  yellow100: "#FDF3E7",
  yellow200: "#FEE9CB",
  yellow300: "#FED7A2",
  yellow400: "#FDC67B",
  yellow500: "#DEAE6A",
  yellow600: "#AD844C",
  yellow700: "#7B5E35",
  yellow800: "#493922",
  yellow900: "#17120B",
};

const red = {
  red100: "#FBEDE6",
  red200: "#F6DACD",
  red300: "#EBB5A6",
  red400: "#E0907E",
  red500: "#D97763",
  red600: "#CE523C",
  red700: "#A43725",
  red800: "#6B2115",
  red900: "#310B05",
};

export const theme = {
  colors: {
    forest: green["green800"],
    sprout: green["green400"],
    night: green["green900"],
    sky: blue["blue300"],
    sand: yellow["yellow100"],
    wheat: yellow["yellow400"],
    ...green,
    ...blue,
    ...yellow,
    ...red
  },
  space: {
    ...spacing,
  },
  sizes: {
    ...spacing,
  },
  fonts: {
    sans: "Poppins, -apple-system, system-ui, sans-serif",
    mono: "IBM Plex Mono, menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
    xxxl: "2rem",
  },
  fontWeights: {
    lighest: 200,
    lighter: 300,
    light: 400,
    regular: 500,
    bold: 600,
    bolder: 700,
    boldest: 800,
  },
  borderWidths: {
    px: "1px",
  },
  radii: {
    1: "0.325rem",
    2: "1.5rem",
    3: "3rem",
    pill: "9999px",
  },
  zIndices: {
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    max: "999",
  },
};

const utils = {
  pt: (value: string | number) => ({
    paddingTop: value,
  }),
  pr: (value: string | number) => ({
    paddingRight: value,
  }),
  pb: (value: string | number) => ({
    paddingBottom: value,
  }),
  pl: (value: string | number) => ({
    paddingLeft: value,
  }),
  px: (value: string | number) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: string | number) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: string | number) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: (value: string | number) => ({
    marginTop: value,
  }),
  mr: (value: string | number) => ({
    marginRight: value,
  }),
  mb: (value: string | number) => ({
    marginBottom: value,
  }),
  ml: (value: string | number) => ({
    marginLeft: value,
  }),
  mx: (value: string | number) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: string | number) => ({
    marginTop: value,
    marginBottom: value,
  }),

  ta: (value: CSSProperties["textAlign"]) => ({ textAlign: value }),

  fd: (value: CSSProperties["flexDirection"]) => ({ flexDirection: value }),
  fw: (value: CSSProperties["flexWrap"]) => ({ flexWrap: value }),

  ai: (value: CSSProperties["alignItems"]) => ({ alignItems: value }),
  ac: (value: CSSProperties["alignContent"]) => ({ alignContent: value }),
  jc: (value: CSSProperties["justifyContent"]) => ({ justifyContent: value }),
  as: (value: CSSProperties["alignSelf"]) => ({ alignSelf: value }),
  fg: (value: CSSProperties["flexGrow"]) => ({ flexGrow: value }),
  fs: (value: CSSProperties["flexShrink"]) => ({ flexShrink: value }),
  fb: (value: CSSProperties["flexBasis"]) => ({ flexBasis: value }),

  bc: (value: keyof typeof theme["colors"] | string) => ({
    backgroundColor: value,
  }),

  br: (value: keyof typeof theme["radii"] | string) => ({
    borderRadius: value,
  }),
  btrr: (value: keyof typeof theme["radii"] | string) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value: keyof typeof theme["radii"] | string) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value: keyof typeof theme["radii"] | string) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value: keyof typeof theme["radii"] | string) => ({
    borderTopLeftRadius: value,
  }),

  bs: (value: string | number) => ({ boxShadow: value }),

  lh: (value: string | number) => ({ lineHeight: value }),

  ox: (value: string | number) => ({ overflowX: value }),
  oy: (value: string | number) => ({ overflowY: value }),

  pe: (value: string | number) => ({ pointerEvents: value }),
  us: (value: string | number) => ({ userSelect: value }),

  linearGradient: () => ({
    backgroundImage: `linear-gradient({value})`,
  }),
};

const media = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  xxl: "(min-width: 1536px)",
};

export const { styled, css, getCssText, keyframes, globalCss } = createStitches(
  {
    theme,
    utils,
    media,
  },
);
