import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Facebook } from "@mui/icons-material";
import Lead from "../Images/Teams/Leads/MohitJain.jpg";
import colead from "../Images/Teams/Leads/SimranBhalode.jpeg";
import web1 from "../Images/Teams/Web-Team/HardikPanwar.jpg";
import Mentor2 from "../Images/Teams/Mentors/MayankYadav.jpg";
import Footer from "./Footer";
import { blueGrey, grey, red } from "@mui/material/colors";

function Teams() {
  return (
    <>
    <div
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
            fontFamily: "NotoSans-Black",
          }}
        >
          Meet Our <span style={{color:'#2c7eea'}}>Team !</span>
        </div>
        <p style={{ textAlign: "center", color: "#828282", fontSize: 20 }}>
          Passionate Students Driving the success of the Program
        </p>
      <Container className="Back-Image" >
        <Divider />    
        <Row  >
          <div
            style={{
              marginTop: 20,
              fontSize: 40,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              fontFamily: "NotoSans-Black",
            }}
          >
            Team Leads
          </div>
          <div style={{ fontsize: 1, textAlign: "center", color: "#828282" }}>
            Hover on Cards
          </div>
        </Row>
        <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div class="testimotionals ">
            <div class="card">
              <div class="layer">
                <img width="100%" src={Lead} alt="" />
              </div>
              <div class="content">
                <p style={{ marginBottom: 110 }}></p>
                <div class="image">
                  <img width="100px" src={Lead} alt="" />
                </div>
                <div class="details">
                  <h2>
                    {" "}
                    Mohit Jain <br /> <span>GDSC Lead</span>
                  </h2>
                </div>
                <Row>
                  <a href="#" style={{ marginRight: 15 }}>
                    <InstagramIcon sx={{ color: red[300] }} />
                  </a>
                  <a href="#" style={{ marginRight: 15 }}>
                    <GitHubIcon color="action" />
                  </a>
                  <a href="#">
                    <LinkedInIcon sx={{ color: blueGrey[500] }} />
                  </a>
                </Row>
              </div>
            </div>
          </div>

          {/* Simran bhalode */}
          <div class="testimotionals">
            <div class="card">
              <div class="layer">
                <img width="250px" src={colead} alt="" />
              </div>
              <div class="content">
                <p style={{ marginBottom: 110 }}></p>

                <div class="image">
                  <img width="100%" src={colead} alt="" />
                </div>

                <div class="details">
                  <h2>
                    {" "}
                    Simran Bhalode <br /> <span>GDSC Co-Lead</span>
                  </h2>
                </div>
                <Row>
                  <a href="#" style={{ marginRight: 15 }}>
                    <InstagramIcon sx={{ color: red[300] }} />
                  </a>
                  <a href="#" style={{ marginRight: 15 }}>
                    <GitHubIcon color="action" />
                  </a>
                  <a href="#">
                    <LinkedInIcon sx={{ color: blueGrey[500] }} />
                  </a>
                </Row>
              </div>
            </div>
          </div>
        </Row>

        {/* Mentors */}
        <Container style={{ marginTop: 60 }}>
          <Divider />

          <Row>
            <div
              style={{
                marginTop: 20,
                fontSize: 40,
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                fontFamily: "NotoSans-Black",
              }}
            >
              Mentors
            </div>
          </Row>
          <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
            {/* Jay Kumar Patidar */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="350px" alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px" alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Jay Kumar Patidar <br /> <span>Mentor</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>

            {/* Mayank Yadav */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="280px" src={Mentor2} alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100%" src={Mentor2} alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Mayank Yadav <br /> <span>Mentor</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>

            {/* Ishika Pradhan */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="350px" alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px" alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Ishika Pradhan <br /> <span>Mentor</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>
          </Row>
        </Container>

        {/* Technical Teams */}
        <Container style={{ marginTop: 60 }}>
          <Divider />
          <Row>
            <div
              style={{
                marginTop: 20,
                fontSize: 40,
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                fontFamily: "NotoSans-Black",
              }}
            >
              Web Development Team
            </div>
          </Row>
          <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
            {/* Hardik Panwar */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="100%" src={web1} alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100%" src={web1} alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Hardik Panwar <br /> <span>Foster (Head)</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>

            {/* Priyanshu Joshi */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="350px" alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px" alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Priyanshu Joshi <br /> <span>Team Member</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>

            {/* Deepak Badnawar */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="350px" alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px" alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Deepak Badnawar <br /> <span>Team member</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>
          </Row>
        </Container>

        {/* Competetive Team */}
        <Container style={{ marginTop: 60 }}>
          <Divider />
          <Row>
            <div
              style={{
                marginTop: 20,
                fontSize: 40,
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                fontFamily: "NotoSans-Black",
              }}
            >
              Competetive Programming Team
            </div>
          </Row>
          <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
            {/* Shubham Jain */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="380px" alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px" alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Shubham Jain <br /> <span>Foster (Head)</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>

            {/* Gaurav Phatak */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="350px" alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px" alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Gaurav Pathak
                      <br /> <span>Team Member</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>
          </Row>
        </Container>

        {/* Social Media Team */}
        <Container style={{ marginTop: 60 }}>
          <Divider />
          <Row>
            <div
              style={{
                marginTop: 20,
                fontSize: 40,
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                fontFamily: "NotoSans-Black",
              }}
            >
              Social Media & Graphic Design Team
            </div>
          </Row>
          <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
            {/* Raviraj Singh Sisodiya */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="380px" alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px" alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Raviraj Singh Sisodiya <br /> <span>Foster (Head)</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>

            {/* Kishan Rathod */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="350px" alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px" alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Kishan Rathod
                      <br /> <span>Team Member</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>

            {/* Harshit Tiwari */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="350px" alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px" alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Harshit Tiwari
                      <br /> <span>Team Member</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>
          </Row>
        </Container>

        {/* Operation and Management Team */}

        <Container style={{ marginTop: 60 }}>
          <Divider />
          <Row>
            <div
              style={{
                marginTop: 20,
                fontSize: 40,
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                fontFamily: "NotoSans-Black",
              }}
            >
              Operation and Management Team
            </div>
          </Row>
          <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
            {/* Manthan Chouhan */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="380px"  alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px"  alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Manthan Chouhan <br /> <span>Foster (Head)</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>

            {/* Mansi Jain */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="350px" alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px" alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Mansi Jain<br /> <span>Team Member</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>

            {/* Rishika Mistri */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="350px" alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px" alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Rishika Mistri<br /> <span>Team Member</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>
          </Row>
        </Container>


        {/* Public Relation and Outreach Team */}
        <Container style={{ marginTop: 60 }}>
          <Divider />
          <Row>
            <div
              style={{
                marginTop: 20,
                fontSize: 40,
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                fontFamily: "NotoSans-Black",
              }}
            >
              Public Relation and Outreach Team
            </div>
          </Row>
          <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
            {/* Madhur Chouhan */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="380px"  alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px"  alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Madhur Chouhan <br /> <span>Team Member</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>

            {/* Kishan Rathod */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="350px" alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px" alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Aryan Chachra<br /> <span>Team Member</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>
          </Row>
        </Container>

        {/* Cloud Computing Team */}
        <Container style={{ marginTop: 60 }}>
          <Divider />
          <Row>
            <div
              style={{
                marginTop: 20,
                fontSize: 40,
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                fontFamily: "NotoSans-Black",
              }}
            >
              Cloud Computing Team
            </div>
          </Row>
          <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
            {/* Abhay Dave */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="380px"  alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px"  alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Abhav Dave <br /> <span>Team Member</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>
          </Row>
        </Container>

        {/* Women IN Teach Team */}
        <Container style={{ marginTop: 60  }}>
          <Divider />
          <Row>
            <div
              style={{
                marginTop: 20,
                fontSize: 40,
                fontWeight: "bold",
                color: "black",
                textAlign: "center",
                fontFamily: "NotoSans-Black",
              }}
            >
              Women In Teach Team
            </div>
          </Row>
          <Row style={{ display: "flex", justifyContent: "space-evenly"  }}>
            {/* Bhoomika Chouhan */}
            <div class="testimotionals">
              <div class="card">
                <div class="layer">
                  {" "}
                  <img width="380px"  alt="" />
                </div>
                <div class="content">
                  <p style={{ marginBottom: 110 }}></p>
                  <div class="image">
                    <img width="100px"  alt="" />
                  </div>
                  <div class="details">
                    <h2>
                      {" "}
                      Bhoomika Chouhan <br /> <span>Team Member</span>
                    </h2>
                  </div>
                  <Row>
                    <a href="#" style={{ marginRight: 15 }}>
                      <InstagramIcon sx={{ color: red[300] }} />
                    </a>
                    <a href="#" style={{ marginRight: 15 }}>
                      <GitHubIcon color="action" />
                    </a>
                    <a href="#">
                      <LinkedInIcon sx={{ color: blueGrey[500] }} />
                    </a>
                  </Row>
                </div>
              </div>
            </div>
          </Row>
        </Container>
        
      </Container>
      <Divider />
      <Footer />
    </>
  );
}

export default Teams;
