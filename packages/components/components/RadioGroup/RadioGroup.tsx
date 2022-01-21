import React from "react";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { styled } from "../../stitches.config";

const StyledRadio = styled(RadixRadioGroup.Item, {
  backgroundColor: "transparent",
  borderWidth: 1,
  borderColor: "$wheat",
  borderStyle: "solid",
  padding: 0,
  width: 24,
  height: 24,
  borderRadius: '100%',
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  "&[disabled]": {
    backgroundColor: "#FFEED9",
  },
  "&[data-state=checked]": {
    backgroundColor: "$sand",
    borderColor: "$forest",
    color: "$forest",
  },
  "&[data-state=checked][disabled]": {
    backgroundColor: "#FFEED9",
    borderColor: "$wheat",
    color: "$wheat",
  },
});

const Label = styled('label', {
  "&[disabled]": {
    color: "#b3b3b3",
  },
});

const Check = styled(RadixRadioGroup.Indicator, {
  width: 16,
  height: 16,
});

const InputRow = styled("div", {
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  columnGap: "$3",
  marginBottom: '$1'
});

export interface RadioProps extends Omit<RadixRadioGroup.RadioGroupItemProps, "css"> {
  inputLabel: string | null | undefined
}
export const Radio = (props: RadioProps) => {
  return (
    <InputRow>
      <StyledRadio {...props}>
        <Check>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="8" fill="currentColor" />
          </svg>
        </Check>
      </StyledRadio>
      <Label 
        // @ts-ignore TODO
        disabled={props.disabled}
      >{props.inputLabel}</Label>
    </InputRow>
  );
};

export type RadioGroupProps = Omit<RadixRadioGroup.RadioGroupProps, "css">;

export const RadioGroup = (props: RadioGroupProps) => (
  <RadixRadioGroup.Root {...props}>
    <>
      {props.children}
    </>
  </RadixRadioGroup.Root>
);
export default RadioGroup;
