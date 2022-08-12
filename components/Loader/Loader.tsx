import React from "react";
import { styled } from "../../stitches.config";
import { keyframes } from "@stitches/react";
import Box from "../Box";

const blink = keyframes({
  "0%": { opacity: 0 },
  "49%": { opacity: 0 },
  "50%": { opacity: 1 },
});

const Indicator = styled(Box, {
  height: "$6",
  width: "5%",
  "&:last-of-type": {
    animation: `${blink} 1s infinite`,
  },
  "&:not(:last-of-type)": {
    mr: "$1"
  },
});

// TODO: add tone for forest, wheat, sprout, sky, and sand
export const Loader = ({
  progress,
  width = "100%",
  tone = "$forest"
}: {
  progress: number;
  width?: string | number;
    tone?: "$forest" | "$sprout" | "$night" | "$sky" | "$wheat" | "$sand"
}) => {
  const quant = Math.floor(progress / 10)
  console.log(quant)

  return (
    <Box css={{ border: "2px solid", borderColor: tone, width: width, padding: "$1 $2", mb: '$2' }}>
      <Box css={{ display: "flex" }}>
        {[...Array(quant * 2)].map((_, i) => (
          <Indicator key={i} css={{background: tone}} />
        ))}
      </Box>
    </Box>
  );
};

export default Loader;
