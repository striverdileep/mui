import React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import Box from "@mui/material/Box";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
const MuiSpeedDial = () => {
  return (
    
      <SpeedDial
        ariaLabel="Basic SpeedDial"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction icon={<FileCopyIcon />} title="Copy" />
        <SpeedDialAction icon={<SaveIcon />} title="Save" />
        <SpeedDialAction icon={<PrintIcon />} title="Print" />
      </SpeedDial>
    
  );
};

export default MuiSpeedDial;
