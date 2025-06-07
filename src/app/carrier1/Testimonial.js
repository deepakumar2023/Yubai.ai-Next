// components/Testimonials.js
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

const PartnerCard = ({ title, description, image }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ textAlign: "center", padding: 2 }}>
      <Avatar src={image} sx={{ width: 80, height: 80, margin: "0 auto" }} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

const Testimonials = () => (
  <Container sx={{ padding: "40px 0" }}>
    <Typography variant="h4" gutterBottom>
      What our partners say
    </Typography>
    <Grid container spacing={3}>
      <PartnerCard
        title="Sari Kassouf, Owner of The Slow"
        description="It is thanks to Yubai that we are able to reach our community in a user-friendly manner."
        image="https://source.unsplash.com/100x100/?person"
      />
      <PartnerCard
        title="Michel J. Hanna, Burger King"
        description="Quality and service are our top priorities. Yubai plays a major role in our delivery success."
        image="https://source.unsplash.com/100x100/?businessman"
      />

      <PartnerCard
        title="Michel J. Hanna, Burger King"
        description="Quality and service are our top priorities. Yubai plays a major role in our delivery success."
        image="https://source.unsplash.com/100x100/?businessman"
      />
    </Grid>
  </Container>
);

export default Testimonials;
