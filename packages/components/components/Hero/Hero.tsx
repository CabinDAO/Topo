import { styled } from "../../stitches.config";
import Wrapper from "../Wrapper";
import React from "react";
import Heading from "../Heading";

export default function Hero({
  heading,
  ImageComponent,
}: {
  heading: React.ReactNode;
  ImageComponent: (
    props: React.ImgHTMLAttributes<HTMLImageElement>
  ) => React.ReactElement;
}) {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Heading>{heading}</Heading>
          <Frame>
            <ImageComponent width={984} height={464} />
          </Frame>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled("section", {
  pt: "$12",
});

const Content = styled("div", {
  h1: {
    fontFamily: "$mono",
    fontSize: "$xxl",
    fontWeight: 600,
    lineHeight: 1.6,
    maxWidth: "24rem",
    mt: "0",
    mb: "$12",
  },
  "@md": {
    h1: {
      fontSize: "$xxxl",
      maxWidth: "32rem",
      mt: "$4",
      mb: "$24",
    },
  },
});

const Frame = styled("div", {
  boxShadow: "0 0 0 $sizes$px $colors$sprout",
  lineHeight: "0",
  br: "$2",
  overflow: "hidden",
  bc: "$forest",
  "@md": {
    br: "$3",
  },
  img: {
    width: "100%",
  },
});
