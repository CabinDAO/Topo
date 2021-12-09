import { styled } from "../../stitches.config";
import React from "react";

export default function Wrapper({
  children,
}: {
  children: React.ReactElement;
}) {
  return <Container>{children}</Container>;
}

const Container = styled("div", {
  width: "100%",
  maxWidth: "64rem",
  mx: "auto",
  px: "$5",
});
