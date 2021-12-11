import React from "react";
import {styled} from "../../stitches.config";
import Text from "../Text/Text";

const Tag = styled("div", {
  br: "$pill",
  borderWidth: "$px",
  borderColor: "rgba(255,255,255,0.25)",
  borderStyle: "solid",
  padding: "$2 $4 $2 $2",
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
});

const Avatar = styled("img", {
  objectFit: "cover",
  width: 24,
  height: 24,
  backgroundColor: "$wheat",
  br: "$pill",
  mr: 8,
});

function HandleTag({
  avatar,
  children,
  className,
}: {
  className?: string;
  children?: React.ReactNode;
  avatar?: string;
}) {
  return (
    <Tag className={className}>
      <Avatar src={avatar} />
      <Text tight type="plain">
        {children}
      </Text>
    </Tag>
  );
}

export default styled(HandleTag, {
  variants: {
    bg: {
      light: {
        borderColor: "rgba(0,0,0,0.25)",
      },
      dark: {},
    },
  },
  defaultVariants: {
    bg: "dark",
  },
});
