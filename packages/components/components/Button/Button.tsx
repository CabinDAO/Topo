import React, { FC } from "react";
import { styled } from "../../stitches.config";

export interface IButtonProps {
  as?: "button" | "a";
  type?: "primary" | "secondary" | "tertiary" | "accent1" | "accent2";
  outline?: boolean;
  ghost?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: string | React.ReactNode;
  href?: string;
}

const Button = ({ leftIcon, rightIcon, children, ...props }: IButtonProps) => {
  return <ButtonContainer {...props}>
    {leftIcon}
    {children}
    {rightIcon}
  </ButtonContainer>
}

const ButtonContainer = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "$sans",
  fontWeight: 600,
  border: "none",
  fontSize: "$sm",
  padding: "$4 $10",
  transition: "all 0.2s ease-in-out",
  textDecoration: "none",
  svg: { 
    height: '$5',
    width: '$5',
    mr: '$2',
    position: 'relative',
    left: '0',
  },
  "svg:first-child": {
    mr: "$2",
  },
  "svg:last-child": {
    ml: "$2",
  },
  defaultVariants: {
    type: "primary",
  },
  variants: {
    type: {
      primary: {
        backgroundColor: "$primary",
        color: "$sand",
      },
      secondary: {
        backgroundColor: "$secondary",
        color: "$forest",
      },
      tertiary: {
        backgroundColor: "$tertiary",
        color: "$forest",
      },
      accent1: {
        backgroundColor: "$accent1",
        color: "$forest",
      },
      accent2: {
        backgroundColor: "$accent2",
        color: "$forest",
      },
    },
    outline: {
      true: {
        boxSizing: "border-box",
      },
    },
    ghost: {
      true: {
        borderStyle: "none",
        "&:hover": {
          backgroundColor: "rgba($primary, 0.2)",
        },
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      type: "primary",
      ghost: true,
      css: {
        backgroundColor: "unset",
        color: "$primary",
      },
    },
    {
      type: "primary",
      outline: true,
      css: {
        backgroundColor: "unset",
        color: "$primary",
        borderColor: "$primary",
        borderStyle: "solid",
        boxSizing: "border-box",
        "&:hover": {
          backgroundColor: "$primary",
          color: "$sand",
        },
      },
    },
    {
      type: "secondary",
      ghost: true,
      css: {
        backgroundColor: "unset",
        color: "$secondary",
      },
    },
    {
      type: "secondary",
      outline: true,
      css: {
        backgroundColor: "unset",
        color: "$secondary",
        borderColor: "$secondary",
        borderStyle: "solid",
        boxSizing: "border-box",
        "&:hover": {
          backgroundColor: "$secondary",
          color: "$forest",
        },
      },
    },
    {
      type: "tertiary",
      ghost: true,
      css: {
        backgroundColor: "unset",
        color: "$tertiary",
      },
    },
    {
      type: "tertiary",
      outline: true,
      css: {
        backgroundColor: "unset",
        color: "$tertiary",
        borderColor: "$tertiary",
        borderStyle: "solid",
        boxSizing: "border-box",
        "&:hover": {
          backgroundColor: "$tertiary",
          color: "$forest",
        },
      },
    },
    {
      type: "accent1",
      ghost: true,
      css: {
        backgroundColor: "unset",
        color: "$accent1",
      },
    },
    {
      type: "accent1",
      outline: true,
      css: {
        backgroundColor: "unset",
        color: "$accent1",
        borderColor: "$accent1",
        borderStyle: "solid",
        boxSizing: "border-box",
        "&:hover": {
          backgroundColor: "$accent1",
          color: "$forest",
        },
      },
    },
    {
      type: "accent2",
      ghost: true,
      css: {
        backgroundColor: "unset",
        color: "$accent2",
      },
    },
    {
      type: "accent2",
      outline: true,
      css: {
        backgroundColor: "unset",
        color: "$accent2",
        borderColor: "$accent2",
        borderStyle: "solid",
        boxSizing: "border-box",
        "&:hover": {
          backgroundColor: "$accent2",
          color: "$forest",
        },
      },
    },
  ],
});

export default Button;
