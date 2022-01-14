import React, { useState } from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { styled } from "../../stitches.config";

const StyledBox = styled(RadixCheckbox.Root, {
  backgroundColor: "transparent",
  borderWidth: 1,
  borderColor: "transparent",
  padding: 0,
  width: 24,
  height: 24,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  defaultVariants: {
    checkDisplay: "unchecked",
  },
  variants: {
    disabledClick: {
      true: {
        backgroundColor: "#FFEED9",
      },
    },
    checkDisplay: {
      checked: {
        backgroundColor: "$forest",
        borderColor: "$forest",
      },
      unchecked: {
        borderColor: "$wheat",
        borderStyle: "solid",
      },
    },
  },
});

const Check = styled(RadixCheckbox.Indicator, {
  width: 14,
  height: 14,
  backgroundColor: "$forest",
  color: "$sand",
});

export interface CheckboxProps
  extends Omit<RadixCheckbox.CheckboxProps, "css"> {}
const Checkbox = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(props.checked ?? false);
  return (
    <StyledBox
      {...props}
      disabledClick={props.disabled}
      checkDisplay={checked ? "checked" : "unchecked"}
      onCheckedChange={(checkState) =>
        setChecked(checkState === "indeterminate" || checkState)
      }
    >
      <Check>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3468 0.963917C13.8091 1.26616 13.9388 1.8859 13.6366 2.34814L6.83659 12.7482C6.67633 12.9933 6.4167 13.1557 6.12624 13.1928C5.83576 13.2299 5.54363 13.1378 5.32694 12.9408L0.92694 8.94083C0.518284 8.56932 0.488172 7.93687 0.859676 7.52822C1.23118 7.11956 1.86363 7.08944 2.27228 7.46096L5.80448 10.672L11.9627 1.25364C12.2649 0.791404 12.8846 0.661693 13.3468 0.963917Z"
            fill="currentColor"
          />
        </svg>
      </Check>
    </StyledBox>
  );
};
export default Checkbox;
