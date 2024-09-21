import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{ boxShadow: "0px 10px 10px rgba(255, 255, 255, 0.1)" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "0.5rem 0",
              }}
            >
              <IconButton sx={{ p: 0 }} onClick={handleClickOpen}>
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: 56, height: 56 }}
                  src="/rd15.jpg"
                />
              </IconButton>
              <Typography variant="h5" color={"success"} className="name-text">
                RAHUL.
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Modal for Full Image */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogContent sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/rd15.jpg" // Path to your full image
            alt="Full Avatar"
            style={{
              borderRadius: "50%", // Circular image
              width: "100%",
              height: "auto",
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Header;
