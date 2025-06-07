import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={0} sx={{ p: 4 }}>
        <Typography variant="h2" gutterBottom sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,}}>
          Privacy Policy
        </Typography>

        <Typography variant="body1" paragraph sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
          Welcome to our website. Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information in connection with our affiliate marketing activities.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{fontSize:{xs:"20px",sm:"30px"},fontWeight:600,}}>1. Data Collection</Typography>
          <Typography variant="body2" paragraph sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
            We collect data such as your name, email, and browsing activity through cookies and analytics tools. This helps us improve our services and provide better affiliate offers.
          </Typography>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5"  sx={{fontSize:{xs:"20px",sm:"30px"},fontWeight:600,}}>2. Cookies & Tracking</Typography>
          <Typography variant="body2" paragraph sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
            Our site uses cookies to track user activity and improve recommendations. You can disable cookies in your browser settings.
          </Typography>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{fontSize:{xs:"20px",sm:"30px"},fontWeight:600,}}>3. Third-Party Links</Typography>
          <Typography variant="body2" paragraph sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
            Our website contains links to third-party sites. We are not responsible for their privacy practices. Please review their policies before providing personal information.
          </Typography>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{fontSize:{xs:"20px",sm:"30px"},fontWeight:600,}}>4. Affiliate Disclosure</Typography>
          <Typography variant="body2" paragraph sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
            Some of the links on our site are affiliate links. This means we earn a commission when you make a purchase through our links at no extra cost to you.
          </Typography>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{fontSize:{xs:"20px",sm:"30px"},fontWeight:600,}}>5. Changes to This Policy</Typography>
          <Typography variant="body2" paragraph sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
            We may update this privacy policy from time to time. We encourage you to review this page periodically for any changes.
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ mt: 4 }}>
          If you have any questions, feel free to contact us.
        </Typography>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
