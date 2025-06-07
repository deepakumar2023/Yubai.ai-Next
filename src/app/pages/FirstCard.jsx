import React from "react";
import { Container, Typography, Box } from "@mui/material";
import {  Grid } from "@mui/system";

function FirstCard() {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid item
       size={{ xs: 12, md: 6 }}

        //  xs={12} md={6}
        >
          <Box
            component="img"
            src="/images/Theslow.png"
            alt="Discover Image"
            sx={{ width:{xs:"90%",md:'70%'}, borderRadius: 1,height:{xs:"300px",md:"250px"},mt:"40px" }}
          />
        </Grid>

        {/* Right Side - Image */}
        <Grid item 
        // xs={12} md={6}
        size={{ xs: 12, md: 6 }}
        >
          <Box   sx={{textAlign:'left'}}>
          
            <Typography variant="h4" sx={{fontWeight:600}}>
            Delivering quickly and seamlessly
            </Typography>

            <Typography color="textSecondary" sx={{mt:"10px"}}>
            Ordering with Yubai is completely streamlined through technology and a star service team, with real-time updates of your order as it makes its way from the store to your doorstep. Gone are the days of lost drivers and cold food.
          </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FirstCard;
