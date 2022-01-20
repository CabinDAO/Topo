import React, { useState } from "react";
import { Box, Label } from "..";
import { styled } from "../../stitches.config";
import Input from "../Input";

// Container of dropdown UI elements.
const DropDownContainer = styled("div", {
  width: "100%"
});

// Topo Input element repurposed for the dropdown.
const SelectInput = styled(Input, {
  backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>") !important`,
  backgroundPosition: '99% !important',
  backgroundRepeat: 'no-repeat !important'
});

// Container of dropdown list items.
const ListBox = styled(Box, {
  borderStyle: "solid",
  borderWidth: "0 1px 1px 1px",
  borderColor: "$forest",
  color: "$forest",
  fontSize: "$base",
  fontFamily: "$sans"
});

// Styled list item.
const ListItem = styled("li", {
  listStyle: "none",
  padding: "$1 $2 $1 $3",
  backgroundColor: "$sand",
  color: "$forest",
  borderStyle: "solid",
  borderWidth: "1px 0px 0px 0px",
  borderColor: "$forest",
  "&:hover": {
    backgroundColor: "$forest",
    color: "$sand"
  }
});

//Select component option props.
export interface ISelectOptionProps {
  key: string,
  label: string
}

//Select component props.
export interface ISelectProps {
  disabled: boolean,
  options: ISelectOptionProps[],
  label?: string,
  description?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?(key: string): void;
  tabIndex?: number;
}

export const Select = (props: ISelectProps) => {

  const initialValue = props.value || props.defaultValue || "";
  let options = props.options;
  let displayValue = "";

  const [isOpen, setIsOpen] = useState(false);

  // If either value or defaultValue is provided, we search for the corresponding option.
  if (initialValue) {
    let selectedOptionObj = options.find(option => (option.key === initialValue));
    if (selectedOptionObj) {
      displayValue = selectedOptionObj.label
    }
    options = options.filter(option => option.label.toLowerCase().startsWith(displayValue.toLowerCase()));
  }

  /* 
   * When any dropdown option is clicked, 
   * 1) Close the dropdown
   * 2) Show selected value in input container
   * 3) Call the client provided onChange prop
   */
  const onOptionClicked = (val: ISelectOptionProps) => () => {
    setIsOpen(false);
    setValue(val.label);
    if (props.onChange) {
      props.onChange(val.key);
    }
  };

  // Generate the list of ListItems corresponding to the valid options.
  const optionElems = options.map(option => (
    <ListItem onClick={onOptionClicked(option)} key={option.key}>
        {option.label}
    </ListItem>
  ));

  const [value, setValue] = useState(displayValue);
  const [opts, setOpts] = useState(optionElems);

  const toggling = () => {
    if (!props.disabled) {
      setIsOpen(!isOpen)
    }
  };

  /* 
   * When value in the input box is changed, we filter the valid options.
   */
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {

    // If component is disabled, ignore value changes.
    if (props.disabled) {
      return;
    }

    setIsOpen(true);
    e.preventDefault();
    setValue(e.target.value);
    const options = props.options.filter(option => option.label.toLowerCase().startsWith(e.target.value.toLowerCase()));
    const optionElems = options.map(option => (
      <ListItem onClick={onOptionClicked(option)} key={option.key}>
          {option.label}
      </ListItem>
    ));
    setOpts(optionElems);
  }

  return (
      <Label 
        label={props.label}
        description={props.description}
        required={props.required}
        // If entered input doesnot correspond to any options, we show "No matching options!"" error message
        error={props.error || (opts.length===0 ? "No matching options!" : undefined)}
      >
        <DropDownContainer tabIndex={props.tabIndex}>
          <SelectInput 
            placeholder={props.placeholder}
            disabled={props.disabled}
            onClick={toggling}
            value={value}
            onChange={changeValue}
          />
          {isOpen && opts.length>0 && (
              <ListBox>
                  {opts}
              </ListBox>
          )}
        </DropDownContainer>
      </Label>
  );
}
export default Select;
