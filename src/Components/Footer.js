import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import DSC from "../Images/dsc-logo-large.png";
import { Row, Col } from "react-bootstrap";
import { Divider } from "@mui/material";
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" textAlign={"center"} style={{ color:'navyblue'}}>
      {"Copyright © "} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "30vh",
      }}
    >
      <CssBaseline />
      {/* <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container> */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
        }}
        className="Footer-Background"
      >
        <Container maxWidth="">
          <Row style={{ justifyContent: "space-around", display: "flex" }}>
            <div>
              <img class="img-responsive" src={DSC} style={{ width: "30vw" }} />
              <Typography variant="body2">GDSC-CDGI Indore</Typography>
            </div>

            <div>
              
                <ul style={{listStyle:"none"}} >
                <li>
                  {" "}
                  <Link href="/Home" underline="none" color="#828282">
                    Home
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/About" underline="none" color="#828282">
                    About
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/Teams" underline="none" color="#828282">
                    Teams
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/Events" underline="none" color="#828282">
                    Events
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/Contact" underline="none" color="#828282">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <Row>
          
            </Row>
          </Row>

          <Divider />
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}


