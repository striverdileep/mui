import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";

function MuiDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>Drawer Content</Box>
      </Drawer> */}
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="Profile" />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default MuiDrawer;
