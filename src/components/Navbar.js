/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CalculateIcon from '@mui/icons-material/Calculate';
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Tax Calculator",
      icon: <CalculateIcon />,
      href: "/tax"
    },
    {
      text: "Who Pays Tonight?",
      icon: <CommentRoundedIcon />,
      href: "/whopays"
    }
  ];
  return (
    <nav>
      <div className="nav-logo-container">
       <h1>Nitee Out</h1>
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item)=>(
          <a href={item.href}>{item.text}</a>
        ))}
        {/*<a href="">Home</a>
        <a href="">Tax Calculator</a>
        <a href="">Who Pays Tonight?</a>*/}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
          {menuOptions.map((item) => (
          <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
          </ListItem>
        ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
