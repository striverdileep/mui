import React from "react";
import { AppBar, Toolbar, Drawer, Typography, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";

const MuiNavBar = () => {
  return (
    <div>
      {/* <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>

      <Drawer open={false}>{}</Drawer> */}
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar> */}
      {/* <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>

      {}
      <Toolbar /> */}
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1}}>
            My App
          </Typography>

          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <main>Page content goes here</main> */}
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>

          <IconButton color="inherit">
            <Avatar sx={{ width: 32, height: 32 }}>D</Avatar>
          </IconButton>
        </Toolbar>
      </AppBar> */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Drawer open={false}>{/* navigation items */}</Drawer>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MuiNavBar;
