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
import InstagramOutlined from "@mui/icons-material/Instagram"
import TwitterOutlined from "@mui/icons-material/Twitter"
import FacebookOutlined from "@mui/icons-material/FacebookOutlined"
import "./Footer.css"
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
    <div className="footer">
    <div>
    <div>
      <img className="img-responsive" src={DSC} style={{ width: "30vw" }} />
        </div>
      <div className="footer-content">
       
        
        <Row>
        <div className="sub">
          <div>
            <b>Clubs</b>
            <p>About</p>
            <p>Blog</p>
          </div>
          <div>
            <b>For You</b>
            <p>Code of conduct</p>
            <p>Community</p>
          </div>
          <div>
            <b>Links</b>
            <p>Home</p>
            <p>Teams</p>
            <p>Events</p>
            <p>Contact</p>
          </div>
          <div>
            <b>For You</b>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms</p>
          </div>
          <div>
            <b>Social links</b>
            <div style={{marginTop:5}} >
              <InstagramOutlined/>
            </div>
            <div>
            <TwitterOutlined/>
            </div>
            <div>
            <FacebookOutlined/>
            </div>
          </div>
        </div>
        </Row>
        <p style={{justifyContent:'center',textAlign:'center',marginTop:50}} ><Copyright /></p>
      </div>
    </div>
  </div>
  );
}


