import { styled, theme } from "../../stitches.config";

export const Indicator = styled("span", {
  display: "inline-block",
  height: "$2",
  width: "$2",
  mr: "$1",
  lineHeight: 0,
  borderRadius: 99999,
  backgroundColor: "currentColor",
});

export const Tag = styled("div", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "$1 $4",
  borderRadius: 99999,
  fontFamily: "$sans",

  variants: {
    tone: {
      forest: {
        backgroundColor: "$forest",
        color: "$wheat",
      },
      wheat: {
        backgroundColor: "$wheat",
        color: "$forest",
      },
      sprout: {
        backgroundColor: "$forest",
        color: "$sprout",
      },
      danger: {
        backgroundColor: theme.colors.red200,
        color: theme.colors.red900,
      },
      warning: {
        backgroundColor: theme.colors.yellow200,
        color: theme.colors.yellow900,
      },
      success: {
        backgroundColor: theme.colors.green200,
        color: theme.colors.green900,
      },
      normal: {
        backgroundColor: theme.colors.blue200,
        color: theme.colors.blue900,
      },
    },
  },

  defaultVariants: {
    tone: "forest",
  },
});

export default { Tag, Indicator };
