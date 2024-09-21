import React from "react";
import { Box, Typography } from "@mui/material";
import "./Footer.css"; // CSS file for styles and animations

const Footer = () => {
  return (
    <Box className="footer">
      <Typography variant="h6" className="footer-text">
        © {new Date().getFullYear()} Rahul Das. All rights reserved.
      </Typography>
      <Typography variant="body2" className="footer-subtext">
        Connect with me on social media!
      </Typography>
    </Box>
  );
};

export default Footer;
