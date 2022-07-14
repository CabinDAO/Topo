import { styled } from "../../stitches.config";
import Box from "../Box";

const Container = styled(Box, {
  width: "90%",
  maxWidth: "60 rem", // 60 (rem) * 16 (px) = 960
  marginLeft: "auto",
  marginRight: "auto",
  variants: {
    size: {
      tight: {
        maxWidth: "60rem", // 60 rem * 16px = 960px
      },
      normal: {
        maxWidth: "75rem", // 75 rem * 16px = 1200px
      },
      wide: {
        maxWidth: "100rem", // 100 rem * 16px = 1600px
      },
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

export default Container;
