"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Pagination,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { Box, Grid } from "@mui/system";
import Link from "next/link";

function AffiliateMarket() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://backend.yubai.ai/api/get-affiliate-product"
        );
        const data = await response.json();
        if (data && data.data) {
          setProducts(data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);


  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10, height: "auto" }}>
      <Typography
        variant="h3"
        align="left"
        gutterBottom
        sx={{ fontSize: { xs: "32px", sm: "34px" }, fontWeight: 600 }}
      >
        Affiliate Products
      </Typography>

      <Grid container spacing={3}>
        {currentProducts?.map((product) => (
          <Grid item size={{ xs: 12, sm: 4, md: 4 }} key={product?.id}>
            <Link
              href={`/affiliate-market/${product.slug}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  cursor: "pointer",
                  height: "500px",
                  minHeight: "500px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 200,
                    mt: "20px",
                    objectFit: "contain",
                  }}
                  image={
                    product.image_url !== "not found"
                      ? product.image_url
                      : "/images/product-display.jpg"
                  }
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mt: 2, textAlign: "left" }}
                  >
                    {product.title.length > 50
                      ? product.title.substring(0, 45) + "..."
                      : product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ textAlign: "left" }}
                  >
                    {product?.description.length > 100
                      ? product.description
                          .replace(/<\/?[^>]+(>|$)/g, "")
                          .substring(0, 100) + "..."
                      : product.description.replace(/<\/?[^>]+(>|$)/g, "")}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="gray"
                    sx={{ mt: 2, textAlign: "left" }}
                  >
                    <Typography
                      component="span"
                      sx={{ fontWeight: "bold", fontSize: "18px" }}
                    >
                      Price:(AED){" "}
                    </Typography>
                    {product.price}
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    color="gray"
                    sx={{ mt: 1, textAlign: "left" }}
                  >
                    <Typography component="span" sx={{ fontWeight: "bold" }}>
                      Category :
                    </Typography>{" "}
                    {product.category_name}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>


        {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={5}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </Box>
      )}
    </Container>
  );
}

export default AffiliateMarket;
