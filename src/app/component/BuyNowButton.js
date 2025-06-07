"use client";

import React from "react";
import { Button } from "@mui/material";

export default function BuyNowButton({ affiliateUrl, productId }) {
  const handleBuyNowClick = async () => {
    if (!affiliateUrl || !productId) return;

    try {
      await fetch("https://backend.yubai.ai/api/affiliate-click-count", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          affiliate_product_id: productId,
        }),
      });
    } catch (error) {
      console.error("Error tracking click:", error);
    }
  };

  const handleClick = () => {
    handleBuyNowClick();
    window.open(affiliateUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      sx={{
        backgroundColor: "#ce352f",
        color: "#fff",
        height: "35px",
        fontSize: "14px",
        borderRadius: "5px",
        "&:hover": { backgroundColor: "#ce352f" },
      }}
    >
      Buy Now
    </Button>
  );
}
