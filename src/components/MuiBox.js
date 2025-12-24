import React from 'react'
import {Box} from "@mui/material"
function MuiBox() {

  return (
    //Used as replacement for div
    <div>
      <Box>Codevolution (will be rendered as div)</Box>
      <Box component="span" sx={
        {
            backgroundColor:'lightblue',
            height:"100px",
            width:"100px",
            padding:"100px"

        }
      }>Second Box</Box>
    </div>
  )
}

export default MuiBox
