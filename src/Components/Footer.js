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
import {fabrands ,fainstagram} from '@fortawesome/free-regular-svg-icons'

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
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="">
          <Divider />
          <Row style={{ justifyContent: "space-around", display: "flex" }}>
            <div>
              <img class="img-responsive" src={DSC} style={{ width: "26vw" }} />
              <Typography variant="body2">GDSC-CDGI Indore</Typography>
            </div>

            <div>
              <ul style={{listStyle:"none"}} >
                <li>
                  {" "}
                  <Link href="/Home" underline="none" color="black">
                    Home
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/About" underline="none" color="black">
                    About
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/Teams" underline="none" color="black">
                    Teams
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/Events" underline="none" color="black">
                    Events
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/Contact" underline="none" color="black">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <Row>
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </Row>
          </Row>

          <Divider />
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}


