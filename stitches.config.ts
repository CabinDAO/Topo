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
  100: "#E0FFE5",
  200: "#A2FFB3",
  300: "#4FFF79",
  400: "#00FF47",
  500: "#06DF59",
  600: "#03AB5B",
  700: "#06774C",
  800: "#324841",
  900: "#1D2B2A",
};

const blue = {
  100: "#ECF9FF",
  200: "#D0EFFF",
  300: "#ACE1FF",
  400: "#90C5E3",
  500: "#77A9C7",
  600: "#507996",
  700: "#324E65",
  800: "#263A4D",
  900: "#192634",
};

const yellow = {
  100: "#FDF3E7",
  200: "#FEE9CB",
  300: "#FED7A2",
  400: "#FDC67B",
  500: "#DEAE6A",
  600: "#AD844C",
  700: "#7B5E35",
  800: "#493922",
  900: "#17120B",
};

const red = {
  100: "#FBEDE6",
  200: "#F6DACD",
  300: "#EBB5A6",
  400: "#E0907E",
  500: "#D97763",
  600: "#CE523C",
  700: "#A43725",
  800: "#6B2115",
  900: "#310B05",
};

const spreadGradient = (color: Record<number, string>, prefix: string) =>
  Object.fromEntries(
    Object.entries(color).map(([k, v]) => [`${prefix}${k}`, v])
  );

export const theme = {
  colors: {
    forest: green[800],
    sprout: green[400],
    night: green[900],
    sky: blue[300],
    sand: yellow[100],
    wheat: yellow[400],
    ...spreadGradient(green, "green"),
    ...spreadGradient(blue, "blue"),
    ...spreadGradient(yellow, "yellow"),
    ...spreadGradient(red, "red"),
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
  }
);
