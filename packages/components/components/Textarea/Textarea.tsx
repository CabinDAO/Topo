import React from "react";
import { styled } from "../../stitches.config";
import Label from "../Label";

export interface ITextareaProps {
  tabIndex?: number;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  name?: string;
  value?: string;
  description?: string;
  onChange?: () => void;
  required?: boolean;
  error?: string;
}

const Textarea = ({ label, description, required, error, ...props }: ITextareaProps) => {
  return (
    <Label 
      label={label} 
      description={description}
      required={required}
      error={error}
    >
      <TextareaContainer 
        {...props }
        error={!!error}
      />
    </Label>
  );
}

const TextareaContainer = styled("textarea", {
  fontFamily: "$sans",
  display: "flex",
  flex: 1,
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "$forest",
  minHeight: '$32',
  py: '$3',
  px: '$3',
  fontSize: "$base",
  color: "$forest",
  outline: "none",
  transition: "all 0.2s ease-in-out",
  background: "transparent",
  "&:focus": {
    boxShadow: "0px 0px 0px 1px $colors$forest",
  },
  "&::placeholder": {
    color: "$forest",
    fontStyle: "italic",
    opacity: 0.75,
    fontWeight: 200,
  },
  variants: {
    disabled: {
      true: {
        borderColor: "$wheat",
        cursor: "not-allowed",
        backgroundColor: "#FFEED9",
        "&:focus": {
          boxShadow: "none",
        },
      },
    },
    error: {
      true: {
        borderColor: "#FF0000",
        "&:focus": {
          boxShadow: "0px 0px 0px 1px #FF0000",
        },
      },
    },
  },
});

export default Textarea;
