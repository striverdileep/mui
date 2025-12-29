import React from 'react'
import {Stack, Badge} from "@mui/material"
import MailIcon from "@mui/icons-material/Mail";
const MuiBadge = () => {
  return (
    <Stack sx={{
        border:"2px solid black",
        padding:"50px",
        margin:"auto",
        width:"500px"
    }} direction="row" spacing={1}>
        <Badge>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={5} color='primary'>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={100} color='primary'>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={450} color='primary' max={999}>
            <MailIcon/>
        </Badge>
        <Badge variant='dot' color='primary' max={999}>
            <MailIcon/>
        </Badge>
    </Stack>
  )
}

export default MuiBadge
