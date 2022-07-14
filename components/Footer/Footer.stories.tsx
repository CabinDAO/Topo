import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Footer from "./Footer";
import { Box } from "../";

export default {
  title: "Sections/Footer",
  component: Footer,
  argTypes: {},
  args: {
    links: null,
  },
} as Meta;

const Template: Story = (args) => (
  <Box>
    <Footer {...args} />
  </Box>
);

export const Standard = Template.bind({});
Standard.args = {
  children: <div>Made with care by Cabin.</div>,
  links: [
    {
      label: "Wiki",
      href: "https://app.clarity.so/%E2%82%A1ABIN",
    },
    {
      label: "Mirror",
      href: "https://creators.mirror.xyz/",
    },
    {
      label: "Discord",
      href: "https://discord.gg/N6hVmFygjR",
    },
    {
      label: "Snapshot",
      href: "https://snapshot.org/#/cabindao.eth",
    },
    {
      label: "Github",
      href: "https://github.com/CabinDAO",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/creatorcabins",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/creatorcabins/",
    },
  ],
};

export const Empty = Template.bind({});

export const LinksOnly = Template.bind({});
LinksOnly.args = {
  links: [
    {
      label: "Wiki",
      href: "https://app.clarity.so/%E2%82%A1ABIN",
    },
    {
      label: "Mirror",
      href: "https://creators.mirror.xyz/",
    },
    {
      label: "Discord",
      href: "https://discord.gg/N6hVmFygjR",
    },
    {
      label: "Snapshot",
      href: "https://snapshot.org/#/cabindao.eth",
    },
    {
      label: "Github",
      href: "https://github.com/CabinDAO",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/creatorcabins",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/creatorcabins/",
    },
  ],
};

export const ChildrenOnly = Template.bind({});
ChildrenOnly.args = {
  children: <div>Made with care by Cabin.</div>,
};
