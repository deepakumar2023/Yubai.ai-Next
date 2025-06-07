import { Button, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

function Contactsection() {
  return (
    <Box
    sx={{
      position: "relative",
      width: "100%",
      height: "40vh",
      backgroundImage: "url('/images/banner.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    <Container>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}
      >
        Fast & easy delivery.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#00A77E",
          color: "#fff",
          fontSize: "18px",
          padding: "10px 16px",
          borderRadius: "8px",
          "&:hover": { backgroundColor: "#008766" },
        }}
      >
        GET THE APP
      </Button>
    </Container>
  </Box>
  )
}

export default Contactsection