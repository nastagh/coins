import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import React from "react";

const genderVariants = ['Male', 'Female','Non-binary'];

type GenderPropsType = {
  value: string,
  name: string
}


const GenderInput: React.FC<GenderPropsType> = (props) => {

  return (
    <FormControl className="gender-field-container">
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Gender
      </InputLabel>
      <NativeSelect defaultValue={props.value} inputProps={{
        name: props.name,
        id: 'uncontrolled-native',
      }}>
         {genderVariants.map((item: string) => {
          return <option value={item} >{item}</option>
        })}
      </NativeSelect>
    </FormControl>
  )
}

export default GenderInput;