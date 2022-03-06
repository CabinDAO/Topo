import React from "react";
import {styled} from "../../stitches.config";

export interface IHandleTagProps {
  AvatarImageComponent: (
    props: React.ImgHTMLAttributes<HTMLImageElement>
  ) => React.ReactElement;
  children: React.ReactNode;
  theme?: "light" | "dark";
}

const HandleTag = ({
  children,
  AvatarImageComponent,
  theme = "light",
}: IHandleTagProps) => {
  return (
    <Container theme={theme}>
      <Frame>
        <AvatarImageComponent />
      </Frame>
      {children}
    </Container>
  );
}

const Container = styled("div", {
  br: "$pill",
  borderWidth: "$px",
  borderStyle: "solid",
  padding: "$2 $4 $2 $2",
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  defaultVariants: {
    theme: "light",
  },
  variants: {
    theme: {
      light: {
        borderColor: "rgba(0,0,0,0.25)",
        color: "$forest",
      },
      dark: {
        borderColor: "rgba(255,255,255,0.25)",
        color: "$sand",
      },
    },
  },
});

const Frame = styled("div", {
  objectFit: "cover",
  width: "$6",
  height: "$6",
  backgroundColor: "$wheat",
  br: "$pill",
  mr: "$2",
  overflow: 'hidden',
  img: {
    objectFit: "cover",
  },
});

export default HandleTag;