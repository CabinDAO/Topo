import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  body: {
    backgroundColor: "$sand",
  },
  "html, body": {
    padding: 0,
    margin: 0,
    fontFamily: "$sans",
    color: "$forest",
  },
  "h1, h2, h3": {
    fontFamily: "$mono",
  },
  "a, p, span": {
    fontFamily: "$sans",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "*": {
    boxSizing: "border-box",
  },
});

export default globalStyles;
