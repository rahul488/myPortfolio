import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import {
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa"; // Importing React Icons
import { ToastContainer, toast } from "react-toastify"; // Importing Toast
import "react-toastify/dist/ReactToastify.css"; // Import Toast styles
import "./Connect.css"; // CSS file for styles and animations

const Connect = () => {
  const copyToClipboard = (phoneNumber) => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        console.log("Phone number copied to clipboard: " + phoneNumber);
        toast.success("Phone number copied to clipboard!", {
          position: "top-center",
          autoClose: 3000, // Auto close after 3 seconds
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        toast.error("Failed to copy phone number.", {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  return (
    <Box sx={{ textAlign: "center", mb: 5 }}>
      <Typography variant="h4" className="connect-header">
        Connect with Me
      </Typography>
      <Box className="connect-icons">
        <IconButton
          href="https://www.instagram.com/_r_a_h_u_l_d_a_s_0?igsh=Y3dzd3I3Znhlc2pu"
          target="_blank"
          className="icon-button"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </IconButton>
        <IconButton
          href="https://www.facebook.com/rk.das.18294053"
          target="_blank"
          className="icon-button"
          aria-label="Facebook"
        >
          <FaFacebookF size={20} />
        </IconButton>
        <IconButton
          href="mailto:myself.rahul78@gmail.com"
          className="icon-button"
          aria-label="Email"
        >
          <FaEnvelope size={20} />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/rahul-das-3775701b1"
          className="icon-button"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </IconButton>
        <IconButton
          href="javascript:void(0)"
          onClick={() => copyToClipboard("7894787693")}
          className="icon-button"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={20} />
        </IconButton>
      </Box>
      <ToastContainer /> {/* Toast Container for notifications */}
    </Box>
  );
};

export default Connect;
