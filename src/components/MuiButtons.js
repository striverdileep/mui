import React from "react";
import { Stack, Button,IconButton } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
function MuiButtons() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="outlined">outlined</Button>
        <Button variant="text">text</Button>
        <Button variant="contained">contained</Button>
      </Stack>

      <Stack spacing={20} direction="row">
        <Button variant="contained" color="error" size="small" disableElevation>
          contained
        </Button>
        <Button variant="outlined" color="error" size="large" disableRipple>
          outlined
        </Button>
        <Button variant="text" color="error" size="medium" loading>
          text
        </Button>
      </Stack>
      <Button variant="contained" startIcon={<AccessAlarmIcon />}>
        Send
      </Button>
      <Button variant="contained" endIcon={<AccessAlarmIcon />}>
        Send
      </Button>
      <IconButton color="success" size="large">
        <AccessAlarmIcon/>
      </IconButton>
    </div>
  );
}

export default MuiButtons;
