import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Box,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/navbar/arrvi_logo.png";
import "@fontsource/poppins";
const StickyNavbar = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuOpen = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (state:any) => () => {
    setOpen(state);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          color: "black",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

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

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 ,fontFamily: 'Poppins'}}>
            <Typography
              component={Link}
              to="/"
              sx={{ textDecoration: "none", color: "black", fontWeight: location.pathname === "/" ? "bold" : "normal", transition: "color 0.3s ease", "&:hover": { color: "#8224E3" } , ...(location.pathname === "/" && { color: "#8224E3" })}}
            >
              Home
            </Typography>
            <Typography
              component={Link}
              to="/about"
              sx={{ textDecoration: "none", color: "black", fontWeight: location.pathname === "/about" ? "bold" : "normal", transition: "color 0.3s ease", "&:hover": { color: "#8224E3" } , ...(location.pathname === "/about" && { color: "#8224E3" })}}
            >
              About
            </Typography>
            <Typography
              component={Link}
              to="/products"
              sx={{ textDecoration: "none", color: "black", fontWeight: location.pathname === "/products" ? "bold" : "normal", transition: "color 0.3s ease", "&:hover": { color: "#8224E3" } , ...(location.pathname === "/products" && { color: "#8224E3" })}}
            >
              Products
            </Typography>
            <Box
              onMouseEnter={handleMenuOpen}
              onMouseLeave={handleMenuClose}
              sx={{ position: "relative", cursor: "pointer" }}
            >
              <Typography
                sx={{ textDecoration: "none", color: "black", fontWeight: "normal", transition: "color 0.3s ease", "&:hover": { color: "#8224E3" } }}
              >
                Services
              </Typography>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                MenuListProps={{ onMouseLeave: handleMenuClose }}
                sx={{ mt: 1 }}
              >
                <MenuItem component={Link} to="/services/service1" onClick={handleMenuClose}>Dummy Service 1</MenuItem>
                <MenuItem component={Link} to="/services/service2" onClick={handleMenuClose}>Dummy Service 2</MenuItem>
                <MenuItem component={Link} to="/services/service3" onClick={handleMenuClose}>Dummy Service 3</MenuItem>
              </Menu>
            </Box>
            <Typography
              component={Link}
              to="/contact"
              sx={{ textDecoration: "none", color: "black", fontWeight: location.pathname === "/contact" ? "bold" : "normal", transition: "color 0.3s ease", "&:hover": { color: "#8224E3" }, ...(location.pathname === "/contact" && { color: "#8224E3" }) }}
            >
              Contact
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false) }>
        <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
          <List>
            <ListItem sx={{ justifyContent: "center", paddingY: 2 }}>
              <Typography variant="h6">
                <img src={logo} alt="logo" style={{ width: "96.75px", height: "54px", objectFit: "contain" }} />
              </Typography>
            </ListItem>
            <ListItemButton component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton component={Link} to="/about">
              <ListItemText primary="About" />
            </ListItemButton>
            <ListItemButton component={Link} to="/products">
              <ListItemText primary="Products" />
            </ListItemButton>
            <Box
              onMouseEnter={() => setServiceMenuOpen(true)}
              onMouseLeave={() => setServiceMenuOpen(false)}
              sx={{ position: "relative", cursor: "pointer" }}
            >
              <ListItem>
                <Typography variant="subtitle1">Services</Typography>
              </ListItem>
              {serviceMenuOpen && (
                <Box  sx={{ boxShadow:1 }}>
                  <ListItemButton component={Link} to="/services/service1">
                    <ListItemText primary="Dummy Service 1" />
                  </ListItemButton>
                  <ListItemButton component={Link} to="/services/service2">
                    <ListItemText primary="Dummy Service 2" />
                  </ListItemButton>
                  <ListItemButton component={Link} to="/services/service3">
                    <ListItemText primary="Dummy Service 3" />
                  </ListItemButton>
                </Box>
              )}
            </Box>
            <ListItemButton component={Link} to="/contact">
              <ListItemText primary="Contact" />
            </ListItemButton>
          </List>
        </Box>
        
      </Drawer>
    </>
  );
};

export default StickyNavbar;
