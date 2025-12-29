import React from "react";
import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      sx={{ position: "absolute", bottom: 0, margin: "auto" }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels 
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
  );
};

export default MuiBottomNavigation;
