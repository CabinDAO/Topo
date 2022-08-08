import { styled } from "../../stitches.config";
import Box from "../Box";
import Heading from "../Heading";
import Text from "../Text";

export const Card = styled(Box, {
  boxShadow: "0 4px 15px rgb(0 0 0 / 0.25)",
});

export const CardHeader = styled(Box, {
  background: "$forest",
  color: "$sand",
  padding: "$3 $5",
  [`& ${Heading}, & ${Text}`]: {
    color: "$sand",
    m: 0,
  },
});

export const CardBody = styled(Box, { padding: "$5" });

const components = {
  Card,
  CardHeader,
  CardBody,
};

export default components;
