import { Box, Button,  Typography } from "@mui/material";
import { Grid } from "@mui/system";

const data = [
  {
    title: "STORE",
    description:
      "Reach new customers, grow your revenues, and deliver to the city’s best clients.",
    buttonText: "PARTNER WITH US",
    image:
      "https://img.freepik.com/free-vector/beautiful-green-landscape-background_1048-2991.jpg",
  },
  {
    title: "DELIVER FOR DUBAI",
    description:
      "Work flexible hours, earn more money, and deliver for the city’s",
    buttonText: "PARTNER WITH US ",
    image:
      "/images/newimg.jpg",
  },
];

const Card = () => {
  return (
    <Grid container spacing={2} sx={{ padding: "50px" }}>
      {data.map((item, index) => (
        <Grid item size={{ xs: 12, md: 6 }} key={index}>
          <Box
            sx={{
              position: "relative",
              height: 300,
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: 3,
              color: "white",
              fontWeight: "bold",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: 2,
              },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Typography variant="h5" sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'0px'}}}>
                {item.title}
              </Typography>
              <Typography variant="body1" mt={1} sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
                {item.description}
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: "white", color: "black" }}
              >
                {item.buttonText}
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Card;
