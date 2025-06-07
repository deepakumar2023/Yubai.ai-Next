
"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Box, Typography } from "@mui/material";
import { Grid } from "@mui/system";

function Discover3() {
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
        {/* Left Side - Content */}
        <Grid
          item
         size={{ xs: 12, md: 6 }}
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          sx={{ order: { xs: 1, md: -1 } }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "30px", sm: "34px" },
                fontWeight: 600,
                mt: { xs: "30px", sm: "0px" },
                textAlign: "left",
              }}
            >
              Track your order
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ textAlign: "left", fontSize: { xs: "16px", sm: "18px" } }}
            >
              Stay informed every step of the way. Know when your products reach
              our warehouse in Dubai, when they are shipped, when they arrive in
              Lebanon, and when they are out for delivery
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Image */}
        <Grid
          item
        size={{ xs: 12, md: 6 }}
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
        >
          <Box
            component="img"
            src="/homeimg/GrayMinimalistNotification3.gif"
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

export default Discover3;
