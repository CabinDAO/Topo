export const fontSizes = {
  xs: {
    fontSize: "$xs",
  },
  sm: {
    fontSize: "$sm",
  },
  md: {
    fontSize: "$base",
  },
  lg: {
    fontSize: "$lg",
  },
  xl: {
    fontSize: "$xl",
  },
  xxl: {
    fontSize: "$xxl",
  },
  xxxl: {
    fontSize: "$xxxl",
  },
};

export const fontStyles = {
  primary: {
    color: "$primary",
  },
  secondary: {
    color: "$secondary",
  },
  tertiary: {
    color: "$tertiary",
  },
  accent: {
    color: "$accent1",
  },
  plain: {
    color: "$black",
  },
};

export const commonTextVariants = {
  uppercase: {
    true: {
      textTransform: "uppercase",
    },
  },
  weight: {
    bold: {
      fontWeight: "$bolder",
    },
    light: {
      fontWeight: "$light",
    },
  },
  bold: {
    true: {
      fontWeight: 600,
    },
  },
  tight: {
    true: {
      margin: 0,
    },
  },
  mono: {
    true: {
      fontFamily: "$mono",
    },
  },
  sans: {
    true: {
      fontFamily: "$sans",
    },
  },
  background: {
    primary: {
      backgroundColor: "$primary",
      padding: "$2 $4"
    },
    secondary: {
      backgroundColor: "$secondary",
      padding: "$2 $4"
    },
    tertiary: {
      backgroundColor: "$tertiary",
      padding: "$2 $4"
    },
    accent1: {
      backgroundColor: "$accent1",
      padding: "$2 $4"
    },
    accent2: {
      backgroundColor: "$accent2",
      padding: "$2 $4"
    },
  },
};
