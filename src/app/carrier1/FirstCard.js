import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

function FirstCard() {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/images/GrayGardens.jpg"
            alt="Discover Image"
            sx={{ width:{xs:"80%",md:'70%'}, borderRadius: 1,height:{xs:"300px",md:"250px"},mt:"40px" }}
          />
        </Grid>

        {/* Right Side - Image */}
        <Grid item xs={12} md={6}>
          <Box   sx={{textAlign:'left'}}>
            <Typography variant="h4" gutterBottom sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'0px'}}}>
            Grow with us
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
            Join a growing, fast-paced startup with a lot of opportunity for innovation and career advancement. Today you’re in our Beirut HQ; tomorrow you’re leading our launch in new cities.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FirstCard;
