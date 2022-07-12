import { styled } from "../../stitches.config";

const Divider = styled("hr", {
  margin: "16px 0",
  height: "1px",
  border: 0,
  defaultVariants: {
    color: "sprout"
  },
  variants: {
    color: {
      sprout: {
        background: "$sprout"
      },
      forest: {
        background: "$forest"
      },
      sand: {
        background: "$sand"
      }
    }
  }
});

export default Divider;
