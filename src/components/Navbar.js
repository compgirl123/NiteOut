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
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit', outline: 'none' }}>
        <h1>Nitee Out</h1>
      </Link>
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item)=>(
          <a href={item.href}>{item.text}</a>
        ))}
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
              <ListItemButton component={Link} to={item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}/>
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
