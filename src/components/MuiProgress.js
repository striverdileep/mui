import React from 'react'
import {Stack,CircularProgress,LinearProgress} from "@mui/material"
const MuiProgress = () => {
  return (
    <Stack spacing={2} direction="column" sx={{width:"500px",margin:"auto", marginTop:"30px"}}>
        <CircularProgress></CircularProgress>
        <CircularProgress color='success'></CircularProgress>
        <CircularProgress variant='determinate' value={60}></CircularProgress>

        <LinearProgress></LinearProgress>
        <LinearProgress color="success"></LinearProgress>
        <LinearProgress variant='determinate' value={60}></LinearProgress>
    </Stack>
  )
}

export default MuiProgress
