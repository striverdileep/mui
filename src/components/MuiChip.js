import React from "react";
import { Stack, Chip } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiChip = () => {
  return (
    <Stack
      sx={{
        border: "2px solid black",
        width: "500px",
        margin: "auto",
      }}
      direction="column"
      spacing={2}
      display="flex"
      alignContent="center"
      alignItems="center"
    >
        <Chip label="Chip 1"/>
        <Chip label="Chip 1" color="primary" sx={{width:"150px",margin:"auto"}}/>
        <Chip label="Chip 1" color="primary" sx={{width:"150px",margin:"auto"}} variant="outlined"/>
        <Chip label="Chip 1" color="primary" sx={{width:"150px",margin:"auto"}} avatar={<MailIcon color="inherit"/>}/>
        <Chip label="Chip 1" color="primary" sx={{width:"150px",margin:"auto"}} avatar={<MailIcon color="inherit"/>} onDelete={()=>{
            alert("Delete Action ")
        }}/>
    </Stack>
  );
};

export default MuiChip;
