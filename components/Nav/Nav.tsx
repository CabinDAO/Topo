import {styled} from "../../stitches.config";

const Nav = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "$mono",
  fontSize: "$sm",
  textTransform: "uppercase",
  a: {
    display: "flex",
    height: "$10",
    px: "$4",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  "@md": {
    ml: "$6",
    mb: "0",
    flexDirection: "row",
  },
});

export default Nav;
