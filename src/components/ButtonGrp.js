import React from "react";
import { ButtonGroup,Button } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
function ButtonGrp() {
  return (
    <div>
      <ButtonGroup color="success" size="small" orientation="vertical">
        <Button variant="contained" onClick={()=>{console.log("Alert Boy")}}>Left</Button>
        <Button variant="contained">Center</Button>
        <Button variant="contained">Right</Button>
      </ButtonGroup>
    </div>
  );
}

export default ButtonGrp;
