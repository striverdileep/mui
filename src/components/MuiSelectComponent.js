import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
function MuiSelectComponent() {
    const [countries,setCountries]=useState([])
    console.log(countries)
    const handleChange=(event)=>{
        const value=event.target.value
        setCountries(value);
    }
  return <Box width="200px">
    <TextField label="Select Countries" value={countries} onChange={handleChange} select fullWidth SelectProps={
        {
            multiple:false
        }
    } size="small"  
    color="secondary"
    helperText="Please select country">
        <MenuItem value="IN">India</MenuItem>   
        <MenuItem value="US">USA</MenuItem>   
        <MenuItem value="EU">Australia</MenuItem>   
    </TextField>
  </Box>;
}

export default MuiSelectComponent;
