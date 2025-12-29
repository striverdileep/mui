import React from "react";
import { Stack, List, ListItem, ListItemText, ListItemIcon, Divider, ListItemButton} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiList = () => {
  return (
    <Stack
      sx={{ border: "2px solid black", width: "500px", margin: "auto" }}
      direction="column"
      spacing={2}
    >
      <List>
        <ListItem>
          <ListItemText>Item 1</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Item 2</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Item 3</ListItemText>
        </ListItem>
      </List>
      <Divider></Divider>
      <List>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText>Item 1</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText>Item 2</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText>Item 3</ListItemText>
        </ListItem>
      </List>
      <Divider></Divider>
      <List>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText
            primary="Item 1"
            secondary="Secondary Text"
          ></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText
            primary="Item 2"
            secondary="Secondary Text"
          ></ListItemText>
        </ListItem>
        <ListItemButton>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText
              primary="Item 3"
              secondary="Secondary Text"
            ></ListItemText>
          </ListItem>
        </ListItemButton>
      </List>
    </Stack>
  );
};

export default MuiList;
