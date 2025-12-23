import React from 'react'
import { Box,FormControlLabel,Checkbox } from '@mui/material'
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from 'react'
function MuiCheckBox() {
    const [accept,setAccept]=useState(false)
    console.log(accept)
    const handleChange=(event)=>{
        setAccept(event.target.checked)
    }
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Terms and Conditions"
          control={<Checkbox />}
          checked={accept}
          onChange={handleChange}
        ></FormControlLabel>
      </Box>
      <Box>
        <Checkbox icon={<BookmarkBorderIcon />} 
        checkedIcon={<BookmarkIcon/>}
        checked={accept}
        onChange={()=>handleChange}/>
      </Box>
    </Box>
  );
}

export default MuiCheckBox
