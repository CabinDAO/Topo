import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import FeatureHighlight, { IFeatureHighlightProps } from "./FeatureHighlight";
import { Box } from "../";

export default {
  title: "Layout/FeatureHighlight",
  component: FeatureHighlight,
  argTypes: {},
} as Meta;

type FeatureHighlightArgs = Parameters<typeof FeatureHighlight>[0];

const Template: Story<FeatureHighlightArgs> = (args) => (
  <Box>
    <FeatureHighlight {...args} />
  </Box>
);

export const Standard = Template.bind({});
Standard.args = {
  heading: "Hello Topo",
  body: "Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
  BackgroundImageComponent: (props) => (
    <img 
      {...props}
      alt={"A real view of a cabin"}
      src={
        "https://via.placeholder.com/984x464"
      }
    />
  ),
  ImageComponent: (props) => (
    <img
      {...props}
      alt="A real view of a cabin"
      src="https://via.placeholder.com/492x327"
      width={492} 
      height={327}
    />
  ),
};

export const WithLink = Template.bind({});
WithLink.args = {
  heading: "Hello Topo",
  body: "Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
  link: {
    label: "Link",
    href: "/#primary",
  },
  BackgroundImageComponent: (props) => (
    <img 
      {...props}
      alt={"A real view of a cabin"}
      src={
        "https://via.placeholder.com/984x464"
      }
    />
  ),
  ImageComponent: (props) => (
    <img
      {...props}
      alt="A real view of a cabin"
      src="https://via.placeholder.com/492x327"
      width={492} 
      height={327}
    />
  ),
};

export const Reversed = Template.bind({});
Reversed.args = {
  heading: "Hello Topo",
  body: "Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
  BackgroundImageComponent: (props) => (
    <img 
      {...props}
      alt={"A real view of a cabin"}
      src={
        "https://via.placeholder.com/984x464"
      }
    />
  ),
  ImageComponent: (props) => (
    <img
      {...props}
      alt="A real view of a cabin"
      src="https://via.placeholder.com/492x327"
      width={492} 
      height={327}
    />
  ),
  reversed: true,
};