export const green = {
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

export const blue = {
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

export const yellow = {
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

export const red = {
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

export const brand = {
  forest: green["green800"],
  sprout: green["green400"],
  night: green["green900"],
  sky: blue["blue300"],
  sand: yellow["yellow100"],
  wheat: yellow["yellow400"],
};

export const colors = {
  ...brand,
  ...red,
  ...green,
  ...blue,
  ...yellow,
};

export default colors;
