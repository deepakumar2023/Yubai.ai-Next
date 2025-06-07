import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

function Second() {
  return (
    <Container sx={{ mb: "30px" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid item  size={{ xs: 12, md: 6 }}>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Giving our customers what they love
            </Typography>

            <Typography color="textSecondary" sx={{mt:"10px"}}>
            We work with the best selection of local and international restaurants and stores. Whatever you need or crave, it’s already there on Yubai. Your favorite coffee, dinner, fresh fruits, or birthday gift, delivered.
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Image */}
        <Grid item  size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="/about/wall.jpg"
            alt="Discover Image"
            sx={{
              width: { xs: "90%", md: "70%" },
              borderRadius: 1,
              height: { xs: "300px", md: "250px" },
              mt: "40px",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Second;
