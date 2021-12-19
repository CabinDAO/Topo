import { styled } from "../../stitches.config";
import React from "react";

const Wrapper: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled("div", {
  width: "100%",
  maxWidth: "64rem",
  mx: "auto",
  px: "$5",
});

export default Wrapper;
