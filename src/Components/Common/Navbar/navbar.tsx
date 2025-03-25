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
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/navbar/arrvi_logo.png";
import "@fontsource/poppins";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const StickyNavbar = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
          zIndex: 1100, // Ensure AppBar is above other content
        }}
      >
        <Toolbar>
          {/* Menu Icon for Mobile View */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo in the Center for Mobile View */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "center" }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "96.75px", height: "54px", objectFit: "contain" }}
            />
          </Typography>

          {/* Search Icon for Mobile View */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="search"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <SearchIcon />
          </IconButton>

          {/* Logo for Desktop View */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "96.75px", height: "54px", objectFit: "contain" }}
            />
          </Typography>

          {/* Navigation Links for Desktop View */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, fontFamily: 'Poppins' }}>
            <Typography
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: "black",
                fontWeight: location.pathname === "/" ? "bold" : "normal",
                transition: "color 0.3s ease",
                "&:hover": { color: "#8224E3" },
                ...(location.pathname === "/" && { color: "#8224E3" }),
              }}
            >
              Home
            </Typography>
            <Typography
              component={Link}
              to="/about"
              sx={{
                textDecoration: "none",
                color: "black",
                fontWeight: location.pathname === "/about" ? "bold" : "normal",
                transition: "color 0.3s ease",
                "&:hover": { color: "#8224E3" },
                ...(location.pathname === "/about" && { color: "#8224E3" }),
              }}
            >
              About
            </Typography>
            <Typography
              component={Link}
              to="/colorCombination"
              sx={{
                textDecoration: "none",
                color: "black",
                fontWeight: location.pathname === "/colorCombination" ? "bold" : "normal",
                transition: "color 0.3s ease",
                "&:hover": { color: "#8224E3" },
                ...(location.pathname === "/colorCombination" && { color: "#8224E3" }),
              }}
            >
              Color-Combination
            </Typography>
            <Typography
              component={Link}
              to="/products"
              sx={{
                textDecoration: "none",
                color: "black",
                fontWeight: location.pathname === "/products" ? "bold" : "normal",
                transition: "color 0.3s ease",
                "&:hover": { color: "#8224E3" },
                ...(location.pathname === "/products" && { color: "#8224E3" }),
              }}
            >
              Products
            </Typography>
            <Typography
              component={Link}
              to="/contact"
              sx={{
                textDecoration: "none",
                color: "black",
                fontWeight: location.pathname === "/contact" ? "bold" : "normal",
                transition: "color 0.3s ease",
                "&:hover": { color: "#8224E3" },
                ...(location.pathname === "/contact" && { color: "#8224E3" }),
              }}
            >
              Contact
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sticky Mobile Navigation Drawer */}
      {open && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "250px",
            backgroundColor: "white",
            boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)",
            zIndex: 1200, // Ensure it's above the AppBar
            overflowY: "auto", // Allow scrolling if content overflows
          }}
        >
          {/* Close Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            <ListItem sx={{ justifyContent: "center", paddingY: 2 }}>
              <Typography variant="h6">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "96.75px", height: "54px", objectFit: "contain" }}
                />
              </Typography>
            </ListItem>
            <ListItemButton component={Link} to="/" onClick={toggleDrawer}>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton component={Link} to="/about" onClick={toggleDrawer}>
              <ListItemText primary="About" />
            </ListItemButton>
            <ListItemButton component={Link} to="/products" onClick={toggleDrawer}>
              <ListItemText primary="Products" />
            </ListItemButton>
            <ListItemButton component={Link} to="/colorCombination" onClick={toggleDrawer}>
              <ListItemText primary="Color-Combination" />
            </ListItemButton>
            <ListItemButton component={Link} to="/contact" onClick={toggleDrawer}>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </List>
        </Box>
      )}
    </>
  );
};

export default StickyNavbar;