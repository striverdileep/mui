import React from "react";
import { TextField, Stack, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function MuiTextField() {
  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>

        <Stack spacing={2} direction="row">
          <TextField
            label="Name"
            size="small"
            variant="outlined"
            color="info"
          />
          <TextField
            label="Name"
            variant="filled"
            color="error"
            size="medium"
          />
          <TextField
            label="Name"
            variant="standard"
            color="success"
            size="large"
            required
          />

          <TextField
            label="Name"
            variant="standard"
            color="success"
            size="large"
            required
            helperText="Show Password"
            type="password"
          />
          <TextField
            label="Name"
            variant="standard"
            color="success"
            size="large"
            required
            disabled
          />
        </Stack>
        <Stack spacing={4} direction={4}>
          <TextField
            label="Read-Only"
            InputProps={{ readOnly: true }}
          ></TextField>
        </Stack>

        <Stack spacing={4}>
          <TextField
            label="AMount"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            label="Weight"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">KG</InputAdornment>,
            }}
          ></TextField>
          <TextField
            label="Password"
            type="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityOffIcon></VisibilityOffIcon>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Stack>
      </Stack>
    </div>
  );
}

export default MuiTextField;
