"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem, 
  ListItemText,
  Link,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Become A Partner", href: "/becomePartner" },
  { label: "Contact", href: "/contact" },
  { label: "Affiliate Amazon Market", href: "/affiliate-market" },
];

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const pathname = usePathname(); // ✅ SSR-safe path detection

  // Handle scroll position to fix AppBar
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position={isFixed ? "fixed" : "static"}
      elevation={isFixed ? 3 : 0}
      sx={{
        transition: "top 0.3s ease-in-out",
        top: isFixed ? 0 : "auto",
        bgcolor: "white",
        color: "black",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            lineHeight: "0px",
          }}
        >
          <Link href="/" underline="none">
            <img
              src="/Logo/logo.png"
              alt="Logo"
              style={{ width: 110, marginRight: 10 }}
            />
            <br />
            <Typography
              variant="h6"
              component="span"
              sx={{
                textDecoration: "none",
                color: "#d0342c",
                fontSize: "18px",
                fontFamily: { xs: "fangsong", sm: "cursive" },
                fontWeight: "bolder !important",
                fontStyle: "italic",
              }}
            >
              <strong>Delivering Happiness</strong>
            </Typography>
          </Link>
        </Typography>

        {/* Desktop Nav */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 5 }}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              underline="none"
              sx={{
                transition: "background-color 0.3s",
                padding: "8px 16px",
                borderRadius: "5px",
                color: pathname === item.href ? "white" : "black",
                bgcolor: pathname === item.href ? "green" : "transparent",
                "&:hover": { bgcolor: "red", color: "white" },
                "&:active": { bgcolor: "green" },
              }}
            >
              {item.label}
            </Link>
          ))}
        </Box>

        {/* Mobile Toggle */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={() => setOpenDrawer(true)}
        >
          <AppsIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List sx={{ width: 250 }}>
          {navItems.map((item, index) => (
            <ListItem button key={index} onClick={() => setOpenDrawer(false)}>
              <Link href={item.href} underline="none" color="inherit">
                <ListItemText primary={item.label} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
