import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { styled } from "../stitches.config";
import { theme } from "@cabindao/topo-theme"
import { Box } from "./"

export default {
  title: "Tokens/Colors",
  argTypes: {},
} as Meta;

const ColorBlock = styled("div", {
  height: "$20",
  width: "$20",
});

export const Colors: Story = args => (
  <Box>
    <Box css={{ display: "flex" }}>
      <Box>
        <ColorBlock css={{ backgroundColor: "$forest", width: "$40"}} />
        <Box>
          <p>Forest</p>
          <p>{theme.colors["forest"]}</p>
        </Box>
      </Box>
      <Box>
        <ColorBlock css={{ backgroundColor: "$sand", width: "$40"}} />
        <Box>
          <p>Sand</p>
          <p>{theme.colors["sand"]}</p>
        </Box>
      </Box>
    </Box>
    <Box css={{display: "flex"}}>
      <Box>
        <ColorBlock css={{ backgroundColor: "$wheat", width: "$40"}} />
        <Box>
          <p>Sand</p>
          <p>{theme.colors["wheat"]}</p>
        </Box>
      </Box>
      <Box>
        <ColorBlock css={{ backgroundColor: "$sprout", width: "$40"}} />
        <Box>
          <p>Sand</p>
          <p>{theme.colors["sprout"]}</p>
        </Box>
      </Box>
      <Box>
        <ColorBlock css={{ backgroundColor: "$sky", width: "$40"}} />
        <Box>
          <p>Sand</p>
          <p>{theme.colors["sky"]}</p>
        </Box>
      </Box>
    </Box>
  </Box>
)
