import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";
function MuiRadioButton() {
    const [value,setValue]=useState('')
    console.log(value);
    const handleChange=(event)=>{
        setValue(event.target.value);
    }
    
  return (
    <Box>
      <FormControl>
        <FormLabel>Years of Experience</FormLabel>
        <RadioGroup name="job-experience-group" value={value} onChange={()=>handleChange} row size='Large'>
          <FormControlLabel control={<Radio/>} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio/>} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio/>} label="5-10" value="6-10" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default MuiRadioButton;
