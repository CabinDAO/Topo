import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import HandleTag from "./HandleTag";
import {Box} from "../";
import { Story } from "@storybook/react";
import { theme } from "@cabindao/topo-theme";

export default {
  title: "Components/HandleTag",
  component: HandleTag,
  argTypes: {},
} as Meta;

type HandleTagArgs = Parameters<typeof HandleTag>[0];

export const Default: Story<HandleTagArgs> = () => (
  <Box>
    <Box style={{backgroundColor: theme.colors.forest, padding: 16}}>
      <HandleTag 
        theme="dark"
        AvatarImageComponent={() => (
          <img
            alt={"Avatar of member"}
            src={
              "https://via.placeholder.com/24"
            }
          />
        )}
      >
        Dark Background
      </HandleTag>
    </Box>

    <Box style={{
      backgroundColor: theme.colors.sand, padding: 16}}>
      <HandleTag 
        AvatarImageComponent={() => (
          <img
            alt={"Avatar of member"}
            src={
              "https://via.placeholder.com/24"
            }
          />
        )}
      >
        Light Background
      </HandleTag>
    </Box>
  </Box>
);
