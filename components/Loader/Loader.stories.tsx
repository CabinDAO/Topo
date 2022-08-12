import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Loader from "./Loader";
import { Card, CardBody, CardHeader } from "../Card";
import Box from "../Box";

export default {
  title: "Components/Loader",
  component: Loader,
  argTypes: {},
} as Meta;

export const Primary = () => {
  return (
    <Card css={{maxWidth: 500}}>
      <CardHeader>
          Communicating with the blockchain
      </CardHeader>

      <CardBody>
        <Loader progress={25} />
        <Loader progress={50} tone="$sprout"/>
        <Loader progress={100} tone="$night"/>
        <Loader progress={100} tone="$sky"/>
        <Loader progress={100} tone="$wheat"/>
        <Box css={{background: "$forest"}}>
          <Loader progress={100} tone="$sand"/>
        </Box>
      </CardBody>
    </Card>
  )
}
