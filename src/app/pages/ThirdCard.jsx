import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

function ThirdCard() {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid item  size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="/about/red-deli.jpg"
            alt="Discover Image"
            sx={{
              width: { xs: "90%", md: "70%" },
              borderRadius: 1,
              height: { xs: "300px", md: "250px" },
              mt: "40px",
            }}
          />
        </Grid>

        {/* Right Side - Image */}
        <Grid item  size={{ xs: 12, md: 6 }}>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Using powerful technology for an inimitable experience
            </Typography>

            <Typography color="textSecondary" sx={{mt:"10px"}}>
            From browsing personalized recommendations and customizing your order, to tracking your driver, we leverage powerful technology to offer you a sophisticated experience.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ThirdCard;
