"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container,  Box, Typography } from "@mui/material";import { Grid } from "@mui/system";
;

function Discover2() {


    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration (1s)
        once: true, // Ensures animation happens only once
        easing: "ease-in-out",
      });
    }, []);
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Content */}
        <Grid item size={{ xs: 12, md: 6 }} data-aos="fade-left">
          <Box
            component="img"
            src="/homeimg/GrayMinimalistNotification2.gif"
            // src="/homeimg/Gray_Minimalist.gif"
            alt="Discover Image"
            sx={{
              width: { xs: "100%", md: "80%" },
              borderRadius: 2,
              height: { xs: "100%", md: "600px" },
              mt: "40px",
              objectFit: "contain",
            }}
          />
        </Grid>

        {/* Right Side - Image */}
        <Grid item size={{ xs: 12, md: 6 }} data-aos="fade-right">
          <Box>
            <Typography variant="h4" sx={{fontSize:{xs:"30px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'0px'},textAlign:'left'}}>
              Order with one click
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{textAlign:"left",fontSize:{xs:"16px",sm:"18px"}}}>
            Shop from your favorite brands.
            Experience the convenience of having Dubai’s best online stores at your fingertips, with seamless door-to-door delivery across Lebanon
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Discover2;
