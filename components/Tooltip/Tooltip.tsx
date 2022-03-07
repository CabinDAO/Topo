import { styled } from "../../stitches.config";
import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

const TooltipContent = styled('div', {
  background: "$green200",
  border: "1px solid $green500",
  padding: "8px",
  borderRadius: '5px',
  fontFamily: "$sans",
  fontSize: 12,
});

const TooltipArrow = styled(RadixTooltip.Arrow, {
    fill: "$green200",
  });

const Tooltip: React.FC<{ content: React.ReactNode }> = ({
  content,
  children,
}) => (
  <RadixTooltip.Provider delayDuration={250}>
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Content>
        <TooltipContent>{content}</TooltipContent>
        <TooltipArrow />
      </RadixTooltip.Content>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
);

export default Tooltip;
