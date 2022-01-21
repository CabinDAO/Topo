import { styled } from "../../stitches.config";
import { fontStyles, commonTextVariants} from "../../utils/variants"

const Heading = styled("h1", {
  fontFamily: "$mono",
  defaultVariants: {
    type: "primary",
    weight: "bold",
  },
  variants: {
    type: fontStyles,
    ...commonTextVariants,
  }
});

  export default Heading;
