import React from "react";
import { Box,  Typography, Button, Container } from "@mui/material";
import { Grid } from "@mui/system";

const data = [
  { label: "Cities", value: "10+" },
  { label: "Team Members", value: "600+" },
  { label: "Partners", value: "4,000+" },
  { label: "Happy Customers", value: "1,000,000+" },
];

const Opportunities = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", py: 5 }}>
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid item 
          // xs={6} sm={3}
          size={{ xs: 6, sm: 3 }} 
          key={index}>
            <Typography variant="h4" fontWeight="bold">
              {item.value}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {item.label}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" fontWeight="bold"  mt={5}>
        OUR OPPORTUNITIES
      </Typography>
      <Typography variant="body1" color="text.secondary" mt={1}>
        We’re always looking for talented individuals to join our team of problem solvers and smile providers.
      </Typography>
      
      <Box mt={3} display="flex" justifyContent="center" gap={2}>
        <Button variant="contained" color="success" sx={{bgcolor:"#ce352f"}}>WORK WITH US</Button>
        <Button variant="contained" color="success" sx={{bgcolor:"#ce352f"}}>DELIVER WITH US</Button>
      </Box>
    </Container>
  );
};

export default Opportunities;
