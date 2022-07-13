import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Card, CardBody, CardHeader } from "./Card";
import Box from "../Box";
import Heading from "../Heading";
import Text from "../Text";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
} as Meta;

export const Primary = () => (
  <Box css={{width: "90%",  margin: "0 auto", padding: "$24"}}>
    <Card>
      <CardHeader>
        <Heading>Card heading</Heading>
      </CardHeader>
      <CardBody>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
      </CardBody>
    </Card>
  </Box>
);
