import React from "react";

import { Container, Typography, Paper } from "@mui/material";

function TermsConditions() {
  return (
    <Container maxWidth="md">
      <Paper elevation={0} style={{ padding: "10px", marginTop: "20px",marginBottom:'20px' }}>
        <Typography variant="h1" gutterBottom sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'0px',},textAlign:'left'}}>
          For terms and conditions on our  subscription model, please click
          here
        </Typography>

        <Typography variant="h3" gutterBottom sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'30px'},textAlign:'left'}}>
          1. Use of the Services
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
          Yubai grants you a limited, non-exclusive, non-transferable, and
          revocable license to use the Services for their intended purposes
          subject to your compliance with these Terms and our policies. You may
         
        </Typography>

        <Typography variant="h3" gutterBottom sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'30px'},textAlign:'left'}}>
          2. Third Party Products and/or Content
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
          You agree that Yubai does not assume responsibility for any products,
          content, services, websites, advertisements, offers, or information
          that is provided by third parties...
        </Typography>

        <Typography variant="h3" gutterBottom  sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'30px'},textAlign:'left'}}>
          3. Service Provided AS IS and Release of Claims
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
          THE SERVICES ARE PROVIDED AS IS AND AS AVAILABLE. TO THE MAXIMUM
          EXTENT PERMITTED BY APPLICABLE LAW...
        </Typography>

        <Typography variant="h6" gutterBottom sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'30px'},textAlign:'left'}}>
          4. Limitation of Liability
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
          IN NO EVENT SHALL Yubai (INCLUDING OUR AFFILIATES, AND EACH OF OUR
          RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SHAREHOLDERS,
          RETAIL PARTNERS, LICENSORS, AND SUPPLIERS)...
        </Typography>

        <Typography variant="h6" gutterBottom sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'30px'},textAlign:'left'}}>
          5. Indemnification
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
          You agree to defend, indemnify and hold harmless Yubai and its
          officers, directors, employees, agents, and affiliates...
        </Typography>

        <Typography variant="h6" gutterBottom sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'30px'},textAlign:'left'}}>
          6. Disputes & Arbitration
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
          If you have a dispute with Yubai, you agree to contact us first and
          attempt to work it out amicably...
        </Typography>

        <Typography variant="h6" gutterBottom sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'30px'},textAlign:'left'}}>
          7. Termination
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
          You can stop using the Services at any time and without notice to
          us...
        </Typography>

        <Typography variant="h6" gutterBottom sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'30px'},textAlign:'left'}}>
          8. Refund and Cancellation Policy
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
          At Yubai our top priority is to ensure our customers complete
          satisfaction with their order...
        </Typography>

        <Typography variant="h6" gutterBottom sx={{fontSize:{xs:"24px",sm:"34px"},fontWeight:600,mt:{xs:"30px",sm:'30px'},textAlign:'left'}}>
          9. Contact Information
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
          If you have any questions, complaints, or comments about the Services
          contact us at:
        </Typography>
        <Typography variant="body2"  color="textSecondary" sx={{textAlign:"left",fontSize:{xs:"14px",sm:"16px"}}}>
          <br />
          Al Warsan- Office number - S09, Dubai ,
       
          <br />
          United Arab Emirates
          <br />
          operations@yubai.ai
        </Typography>
      </Paper>
    </Container>
  );
}

export default TermsConditions;
