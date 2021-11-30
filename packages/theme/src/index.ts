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

export const theme = {
  colors: {
    sand: "#FDF3E7",
    forest: "#324841",
    sprout: "#00FF47",
    wheat: "#FDC67B",
  },
  fonts: {
    sans: "Poppins, -apple-system, system-ui, sans-serif",
    mono: "IBM Plex Mono, menlo, monospace",
  },
  space: {
    ...spacing,
  },
  sizes: {
    ...spacing,
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

export const utils = {
  p: (value: any) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: (value: any) => ({
    paddingTop: value,
  }),
  pr: (value: any) => ({
    paddingRight: value,
  }),
  pb: (value: any) => ({
    paddingBottom: value,
  }),
  pl: (value: any) => ({
    paddingLeft: value,
  }),
  px: (value: any) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: any) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: any) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: (value: any) => ({
    marginTop: value,
  }),
  mr: (value: any) => ({
    marginRight: value,
  }),
  mb: (value: any) => ({
    marginBottom: value,
  }),
  ml: (value: any) => ({
    marginLeft: value,
  }),
  mx: (value: any) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: any) => ({
    marginTop: value,
    marginBottom: value,
  }),

  ta: (value: any) => ({ textAlign: value }),

  fd: (value: any) => ({ flexDirection: value }),
  fw: (value: any) => ({ flexWrap: value }),

  ai: (value: any) => ({ alignItems: value }),
  ac: (value: any) => ({ alignContent: value }),
  jc: (value: any) => ({ justifyContent: value }),
  as: (value: any) => ({ alignSelf: value }),
  fg: (value: any) => ({ flexGrow: value }),
  fs: (value: any) => ({ flexShrink: value }),
  fb: (value: any) => ({ flexBasis: value }),

  bc: (value: keyof typeof theme["colors"] | (string & {})) => ({
    backgroundColor: value,
  }),

  br: (value: keyof typeof theme["radii"] | (string & {})) => ({
    borderRadius: value,
  }),
  btrr: (value: keyof typeof theme["radii"] | (string & {})) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value: keyof typeof theme["radii"] | (string & {})) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value: keyof typeof theme["radii"] | (string & {})) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value: keyof typeof theme["radii"] | (string & {})) => ({
    borderTopLeftRadius: value,
  }),

  bs: (value: any) => ({ boxShadow: value }),

  lh: (value: any) => ({ lineHeight: value }),

  ox: (value: any) => ({ overflowX: value }),
  oy: (value: any) => ({ overflowY: value }),

  pe: (value: any) => ({ pointerEvents: value }),
  us: (value: any) => ({ userSelect: value }),

  // size: (value: keyof typeof theme['sizes'] | (string & {})) => ({
  //   width: value,
  //   height: value,
  // }),

  linearGradient: (value: any) => ({
    backgroundImage: `linear-gradient({value})`,
  }),
};

export const media = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  xxl: "(min-width: 1536px)",
};
