import React from "react";
import { styled } from "../../stitches.config";

const Container = styled("div", {
  width: "100%",
  maxWidth: "64rem",
  mx: "auto",
  px: "$5",
});

const Wrapper: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
