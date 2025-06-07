// import { Button, Typography } from "@mui/material";
// import { Box, Container } from "@mui/system";
// // import Discover from "./Discover";
// // import Discover2 from "./Discover2";
// // import Discover3 from "./Discover3";
// // import Card from "./Card";
// // import AppDownloadSection from "./AppDownloadSection";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

//       </Box>

"use client";

import React from "react";
import Discover from "../component/Discover";
import Discover2 from "../component/Discover2";
import Discover3 from "../component/Discover3";
import Card from "../component/Card";
import AppDownloadSection from "../component/AppDownloadSection";
import { Box, Container } from "@mui/system";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button, Typography } from "@mui/material";

const slides = [
  "/homeimg/couple-moving.jpg",
  "/homeimg/Family.jpg",
  "/homeimg/family-moving-new-house.jpg",
];

const handleClick = () => {
  alert("Coming Soon!");
};

function HeroSection() {
  return (
    <>
      <Box>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          loop
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: "50vh", sm: "60vh" },
                  backgroundImage: `url(${slide})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  // backgroundSize: "contain",

                  backgroundRepeat: "no-repeat",
                }}
              >
                <Container>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      mb: 2,
                      fontSize: "40px",
                    }}
                  >
                    Delivering Hapiness
                  </Typography>

                  <Button
                    variant="contained"
                    onClick={handleClick}
                    sx={{
                      backgroundColor: "#ce352f",
                      color: "#fff",
                      height: "45px",
                      fontSize: "18px",
                      // borderRadius: "8px",
                      "&:hover": { backgroundColor: "#ce352f" },
                    }}
                  >
                    GET THE APP
                  </Button>
                </Container>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Discover />
      <Discover2 />
      <Discover3 />
      <Card />
      <AppDownloadSection/>
    </>
  );
}

export default HeroSection;
