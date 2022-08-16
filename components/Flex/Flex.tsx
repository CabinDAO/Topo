import { styled } from "@stitches/react"
import Box from "../Box"

export const Flex = styled(Box, {
  display: "flex",
  variants: {
    content: {
      "flex-start": {
        justifyContent: "flex-start"
      },
      "flex-end": {
        justifyContent: "flex-end"
      },
      center: {
        justifyContent: "center"
      },
      "space-around": {
        justifyContent: "space-around"
      },
      "space-between": {
        justifyContent: "space-between"
      },
      "space-evenly": {
        justifyContent: "space-evenly"
      },
    },
    items: {
      "stretch": {
        alignItems: "stretch"
      },
      "flex-start": {
        alignItems: "flex-start"
      },
      "flex-end": {
        alignItems: "flex-end"
      },
      "center": {
        alignItems: "center"
      },
      "baseline": {
        alignItems: "baseline"
      },
    },
    direction: {
      "row": {
        flexDirection: "row"
      },
      "row-reverse": {
        flexDirection: "row-reverse"
      },
      "column": {
        flexDirection: "column"
      },
      "column-reverse": {
        flexDirection: "column-reverse"
      },
    },
    wrap: {
      "nowrap": {
        wrap: "nowrap"
      },
      "wrap": {
        wrap: "wrap"
      },
      "wrap-reverse": {
        wrap: "wrap-reverse"
      },
    },
  }
})

export default Flex
