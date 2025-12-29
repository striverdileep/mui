import React from 'react'
import {Skeleton,Box} from "@mui/material"
const MuiSkeleton = () => {
  return (
    <div>
      <Box sx={{width:"500px",border:"2px solid black",margin:"auto", height:"200px"}}>
        <Skeleton></Skeleton>
        <Skeleton variant='circular'/>
        <Skeleton variant='rectangular' height={150} width={125} sx={{
            color:"success.light"
        }}/>
      </Box>
    </div>
  )
}

export default MuiSkeleton
