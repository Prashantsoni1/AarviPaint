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
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import logo from '../../../assets/navbar/arrvi_logo.png'
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

const services = [
  { name: "dummy service1", path: "/services/service1" },
  { name: "dummy service2", path: "/services/service2" },
  { name: "dummy service3", path: "/services/service3" },
];

const StickyNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [selectedService, setSelectedService] = useState("");

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  return (
    <>
      {/* Sticky Navbar */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          color: "black",
        }}
      >
        <Toolbar>
          {/* Hamburger Menu Icon (Left Side) */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Brand Name / Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "block" },
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: "96.75px",
                height: "54px",
                objectFit: "contain", // Ensures the logo is fully visible
              }}
            />
          </Typography>
           

          {/* Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
                            <Typography
                            key={item.name}
                            component={Link}
                            to={item.path}
                            sx={{
                              textDecoration: "none",
                              color: "black",
                              fontWeight: location.pathname === item.path ? "bold" : "normal",
                              transition: "color 0.3s ease",
                              "&:hover": {
                                color: "8224E3", // Change this to your preferred hover color
                              },
                              ...(location.pathname === item.path && {
                                color: "8224E3", // Apply the same hover color when active
                              }),
                            }}
                          >
                            {item.name}
                          </Typography>
            ))}

            {/* Services Dropdown */}
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <Select
                displayEmpty
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                sx={{
                  color: "black",
                  fontWeight: "normal",
                  "&:hover": { color:  "8224E3" },
                  "& .MuiSelect-icon": { display: "none" }, // Hide dropdown icon
                  "& .MuiSelect-select": { padding: "6px 12px" },
                }}
                renderValue={() => "Services"}
              >
                {services.map((service) => (
                  <MenuItem
                    key={service.name}
                    component={Link}
                    to={service.path}
                    sx={{ textDecoration: "none", color: "8224E3" }}
                  >
                    {service.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Side Drawer for Mobile View */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
          <List>
            {/* Logo inside the Menu */}
            <ListItem sx={{ justifyContent: "center", paddingY: 2 }}>
  <Typography variant="h6">
    <img
      src={logo}
      alt="logo"
      style={{
        width: "96.75px",  // Same as Figma design
        height: "54px",     // Same as Figma design
        objectFit: "contain",
      }}
    />
  </Typography>
</ListItem>

            {navItems.map((item) => (
              <ListItemButton key={item.name} component={Link} to={item.path}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            ))}
            {/* Services Dropdown inside Mobile Menu */}
            <ListItem>
              <Typography variant="subtitle1">Services</Typography>
            </ListItem>
            {services.map((service) => (
              <ListItemButton key={service.name} component={Link} to={service.path}>
                <ListItemText primary={service.name} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default StickyNavbar;
