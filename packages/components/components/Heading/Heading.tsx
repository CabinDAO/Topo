import React from "react";
import { styled } from "../../stitches.config";

const resolveDefaultComponent = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
} as const

export interface IHeadingProps {
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  level?: '1' | '2' | '3';
  tone?: "forest" | "wheat";
  id?: string
  children?: string;
}

export const Heading = ({
  as,
  children,
  tone = 'forest',
  id,
  level = '2',
}: IHeadingProps) => {
  return (
    <Component
      as={as ?? resolveDefaultComponent[level]}
      id={id}
      tone={tone}
    >
      {children}
    </Component>
  )
}

const Component = styled("div", {
  fontFamily: "$mono",
  variants: {
    tone: {
      forest: {
        color: "$forest",
      },
      wheat: {
        color: "$wheat",
      },
    },
    level: {
      '1': {
        fontSize: "$xxxl",
      },
      '2': {
        fontSize: "$xl",
      },
      '3': {
        fontSize: "$l",
      },
    },
  },
});

export default Heading;
