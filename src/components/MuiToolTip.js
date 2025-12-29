import React from "react";
import { Tooltip } from "@mui/material";
import { Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
const MuiToolTip = () => {
  return (
    <div>
      <Tooltip>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" arrow placement="right-end">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" arrow placement="right-start" enterDelay={1000} leaveDelay={1000}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default MuiToolTip;
