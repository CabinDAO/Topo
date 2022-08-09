import { CSSProperties } from "@stitches/react";
import { theme } from "./theme";

export const utils = {
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

export default utils;
