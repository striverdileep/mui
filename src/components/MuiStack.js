import React from "react";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
function MuiStack() {
  return (
    <div>
      <Stack spacing={4} direction="row">
        <Typography variant="h6">Title</Typography>
        <Typography>Description text goes here</Typography>
        <Button variant="contained">Submit</Button>
      </Stack>
      <Stack spacing={4} direction="column" display="inline-flex">
        <Typography variant="h6">Title</Typography>
        <Typography>Description text goes here</Typography>
        <Button variant="contained" disableRipple>
          Submit
        </Button>
      </Stack>
    </div>
  );
}

export default MuiStack;
