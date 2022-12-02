import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';


export const SidebarData = [
    
  {
    title: "Dashboard",
    path: "",
    icon: <StarIcon></StarIcon>
  },

  {
    title: "Profile",
    path: "/profile",
    icon: <PersonIcon></PersonIcon>
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <SettingsIcon></SettingsIcon>
  },
 
];