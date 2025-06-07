// app/affiliate-market/[slug]/page.js

import React from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import BuyNowButton from "@/app/component/BuyNowButton"

export async function generateStaticParams() {
  const res = await fetch("https://backend.yubai.ai/api/get-affiliate-product");
  const data = await res.json();

  return data.data.map((product) => ({
    slug: product.slug,
  }));
}

export default async function AffiliateMarketDetail({ params }) {
  const { slug } = params;

  const res = await fetch("https://backend.yubai.ai/api/get-affiliate-product");
  const data = await res.json();

  const product = data.data.find((item) => item.slug === slug);

  if (!product) {
    return (
      <Container maxWidth="md" sx={{ mt: 5, mb: 10 }}>
        <Typography variant="h5" color="error" align="center">
          Product not found
        </Typography>
      </Container>
    );
  }


  // Click tracking: use client component for interactivity if needed,
  // or just do it on the affiliate link redirect on backend.

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 10 }}>
      <Card sx={{ borderRadius: 2 }} elevation={0}>
        <CardMedia
          component="img"
          sx={{ height: 400, objectFit: "contain" }}
          image={
            product.image_url !== "not found"
              ? product.image_url
              : "/images/product-display.jpg"
          }
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "left" }}>
            {product.title}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ mt: 2, textAlign: "left" }}
          >
            {product.description.replace(/<\/?[^>]+(>|$)/g, "")}
          </Typography>
          <Typography variant="h6" color="gray" sx={{ mt: 2, textAlign: "left" }}>
            <strong>Price: (AED)</strong> {product.price}
          </Typography>
          <Typography
            variant="caption"
            display="block"
            color="gray"
            sx={{ mt: 1, textAlign: "left" }}
          >
            <strong>Category:</strong> {product.category_name}
          </Typography>
        </CardContent>
        <CardActions>
          {product.affiliate_url ? (
  <BuyNowButton
    affiliateUrl={product.affiliate_url}
    productId={product.id}
  />
) : (
  <Button
    variant="contained"
    disabled
    sx={{ height: "35px", fontSize: "14px" }}
  >
    Not Available
  </Button>
)}

        </CardActions>
      </Card>
    </Container>
  );
}
