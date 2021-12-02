import { styled } from "../../stitches.config";
import { fontSizes, fontStyles, commonTextVariants} from "../../utils/variants"

const Text = styled("p", {
  fontFamily: "$sans",
  fontWeight: "$regular",
  defaultVariants: {
    size: "md",
    type: "primary",
  },
  variants: {
    size: fontSizes,
    type: fontStyles,
    ...commonTextVariants,
  }
});

export default Text;
