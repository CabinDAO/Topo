import React from "react";
import { styled } from "../../stitches.config";

const Button = styled('button', {
  backgroundColor: '$wheat',
  color: '$forest',
  fontWeight: 600,
  border: 'none',
  fontSize: "$sm",
  padding: '$4 $10',
  transition: "all 0.2s ease-in-out",
  '&:hover': {
    backgroundColor: 'lightgray'
  }
})

export default Button;
