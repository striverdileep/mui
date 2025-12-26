import {
  Paper,
  Typography,
  Stack,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { blue, lightBlue } from "@mui/material/colors";
import React from "react";

function MuiPaper() {
  return (
    <>
      <Paper elevation={6} sx={{ p: 3, bgcolor: "lightBlue", m: 10 }}>
        <Stack spacing={1}>
          <Typography variant="h6">Profile</Typography>
          <Typography>Name: Dileep</Typography>
          <Typography>Email: dileep@example.com</Typography>
        </Stack>
      </Paper>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, m: "auto" }}>
        <Stack spacing={3}>
          <TextField label="Email" />
          <TextField label="Password" type="password" />
          <Button variant="contained">Login</Button>
        </Stack>
      </Paper>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="body2">
          This section is informational and not interactive.
        </Typography>
      </Paper>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            margin: "auto",
          }}
        >
          <Paper sx={{ p: 2 }}>
            <Typography>Total Users</Typography>
            <Typography variant="h4">1,240</Typography>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            margin: "auto",
          }}
        >
          <Paper sx={{ p: 2 }}>
            <Typography>Revenue</Typography>
            <Typography variant="h4">$12,500</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default MuiPaper;
