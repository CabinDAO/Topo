import React, { forwardRef } from "react";
import { styled } from "../../stitches.config";

export interface IButtonProps {
  as?: "button" | "a";
  type?: "primary" | "secondary" | "link" | "icon";
  tone?: "forest" | "wheat";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: string | React.ReactNode;
  href?: string;
  tabIndex?: number;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const Button = forwardRef<HTMLButtonElement>(
  (
    { leftIcon, rightIcon, children, as = "button", ...props }: IButtonProps,
    ref
  ) => {
    return (
      <ButtonContainer as={as} ref={ref} {...props}>
        {leftIcon && <Icon left>{leftIcon}</Icon>}
        {children}
        {rightIcon && <Icon right>{rightIcon}</Icon>}
      </ButtonContainer>
    );
  }
);

const ButtonContainer = styled("button", {
  display: "inline-flex",
  flexGrow: 0,
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "$sans",
  fontWeight: 600,
  border: "none",
  fontSize: "$sm",
  transition: "all 0.2s ease-in-out",
  textDecoration: "none",
  boxSizing: "border-box",
  cursor: "pointer",
  defaultVariants: {
    type: "primary",
    tone: "forest",
  },
  variants: {
    type: {
      primary: {
        border: "none",
        height: "$10",
        py: 0,
        px: "$4",
      },
      secondary: {
        borderStyle: "solid",
        borderWidth: "1px",
        height: "$10",
        py: 0,
        px: "$4",
      },
      link: {
        borderStyle: "solid",
        borderWidth: "1px",
        background: "transparent",
        border: "none",
        p: 0,
      },
      icon: {
        border: "none",
        p: 0,
        height: "$8",
        width: "$8",
      },
    },
    tone: {
      forest: {},
      wheat: {},
    },
    disabled: {
      true: {
        opacity: "0.75",
        cursor: "not-allowed",
      },
    },
  },
  compoundVariants: [
    {
      type: "primary",
      tone: "forest",
      css: {
        backgroundColor: "$forest",
        color: "$sand",
        "&:hover": {
          boxShadow: "0px 0px 0px 1px $colors$forest",
        },
      },
    },
    {
      type: "primary",
      tone: "wheat",
      css: {
        backgroundColor: "$wheat",
        color: "$forest",
        "&:hover": {
          boxShadow: "0px 0px 0px 1px $colors$wheat",
        },
      },
    },
    {
      type: "secondary",
      tone: "forest",
      css: {
        color: "$forest",
        borderColor: "$forest",
        backgroundColor: "transparent",
        "&:hover": {
          boxShadow: "0px 0px 0px 1px $colors$forest",
        },
      },
    },
    {
      type: "secondary",
      tone: "wheat",
      css: {
        color: "$wheat",
        borderColor: "$wheat",
        backgroundColor: "transparent",
        "&:hover": {
          boxShadow: "0px 0px 0px 1px $colors$wheat",
        },
      },
    },
    {
      type: "link",
      tone: "forest",
      css: {
        color: "$forest",
      },
    },
    {
      type: "link",
      tone: "wheat",
      css: {
        color: "$wheat",
      },
    },
    {
      type: "icon",
      tone: "forest",
      css: {
        backgroundColor: "$forest",
        color: "$sand",
        "&:hover": {
          boxShadow: "0px 0px 0px 1px $colors$forest",
        },
      },
    },
    {
      type: "icon",
      tone: "wheat",
      css: {
        backgroundColor: "$wheat",
        color: "$forest",
        "&:hover": {
          boxShadow: "0px 0px 0px 1px $colors$wheat",
        },
      },
    },
  ],
});

const Icon = styled("div", {
  height: "$5",
  svg: {
    height: "$5",
    width: "$5",
  },
  variants: {
    left: {
      true: {
        mr: "$2",
      },
    },
    right: {
      true: {
        ml: "$2",
      },
    },
  },
});

export default Button;
