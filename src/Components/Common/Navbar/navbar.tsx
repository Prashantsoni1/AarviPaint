import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Box,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../../public/assets/navbar/arrvi_logo.png";
import "@fontsource/poppins";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Color Palettes", path: "/colorCombination" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

const StickyNavbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          color: "black",
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <img
              src={logo}
              alt="logo"
              style={{ width: "96.75px", height: "54px", objectFit: "contain" }}
            />
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, fontFamily: "Poppins" }}>
            {navItems.map((item) => (
              <Typography
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  textDecoration: "none",
                  color: location.pathname === item.path ? "#8224E3" : "black",
                  fontWeight: location.pathname === item.path ? "bold" : "normal",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#8224E3" },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar with Smooth Transition */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: open ? 0 : "-250px",
          height: "100vh",
          width: "250px",
          backgroundColor: "white",
          boxShadow: "-2px 0px 10px rgba(0, 0, 0, 0.1)",
          zIndex: 1200,
          overflowY: "auto",
          transition: "right 0.3s ease-in-out",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>

        <ListItem sx={{ justifyContent: "center", paddingY: 2 }}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "96.75px", height: "54px", objectFit: "contain" }}
          />
        </ListItem>

        <List>
          {navItems.map((item) => (
            <ListItemButton
              key={item.path}
              component={Link}
              to={item.path}
              onClick={toggleDrawer}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </>
  );
};

export default StickyNavbar;
