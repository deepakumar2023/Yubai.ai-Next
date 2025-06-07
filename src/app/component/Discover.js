
"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Box, Typography } from "@mui/material";import { Grid } from "@mui/system";
;

function Discover() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1s)
      easing: "ease-in-out",
      once: false, // Allows animations to run multiple times
      mirror: true, // Enables animation when scrolling up
      offset: 10, // Triggers animation earlier when scrolling up
    });
  }, []);
  

  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Text Content */}
        <Grid item size={{ xs: 12, md: 6 }} data-aos="fade-right"  data-aos-anchor-placement="top-bottom"
          sx={{ order: { xs: 1, md: -1 } }}
        >
          <Box>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: { xs: "30px", sm: "34px" },
                fontWeight: 600,
                mt: { xs: "30px", sm: "0px" },
                textAlign: "left",
              }}
            >
              No Hidden Fees
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ textAlign: "left", fontSize: { xs: "16px", sm: "18px" } }}
            >
              With just one click, you can purchase any item and have it
              delivered to your doorstep including shipping, clearance and
              delivery. Pay conveniently by card.
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Image */}
        <Grid item size={{ xs: 12, md: 6 }} data-aos="fade-left"  data-aos-anchor-placement="top-bottom">
          <Box
            component="img"
            src="/homeimg/GrayMinimalistNotification1.gif"
            // src="/homeimg/GraMinimalist.gif"
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
      </Grid>
    </Container>
  );
}

export default Discover;
