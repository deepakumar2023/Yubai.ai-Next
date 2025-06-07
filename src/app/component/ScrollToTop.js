
"use client"
import { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fab
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bgcolor:"#ce352f",
        bottom: 20,
        right: 20,
        maxWidth:'50px',
        maxHeight:"50px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.3s ease-in-out",
        boxShadow: 3,
        padding:"10px",
        "&:hover": {
          backgroundColor: "#ce352f",
        },
      }}
    >
      <KeyboardArrowUpIcon
        sx={{
          fontSize: 40, // Icon ka size bada karna
          color: "white", // Icon ka color white
       
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.2)", // Hover effect ke liye zoom-in
          },
        }}
      />
    </Fab>
  );
};

export default ScrollToTop;
