import React from 'react';
import image from '../Images/diversity.png';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Type from '../Components/typewriter/Type';
import logo from '../Images/gdsc-logo.svg';
import BackImg from '../Images/background.svg';
import com from '../Images/community-removebg.png';
import Footer from './Footer';
import Lottie from 'lottie-react';
import Animation from '../Images/gdscanimation.json';
import './Home.css';

function Home() {
  return (
    <>
      <div>
        <Container fluid>
          <Row>
            {/* <Col className="home-header" >
          <h3
            style={{
              textAlign: "center",
              fontSize: 60,
              padding:40,
            }}
          >
            <img src={logo} />
            <Type />
          </h3>
        </Col> */}
            <Row
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}>
              <Lottie
                animationData={Animation}
                loop={true}
                style={{ width: '50%', height: '200px' }}
              />
            </Row>
            <Row>
              <p
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  backgroundColor: 'white',
                  paddingBottom: 10,
                  marginTop: 20,
                }}>
                Google Developer Student Club - Chameli Devi Group of
                Institutions , Indore
                <br />
                <Button
                  href="https://gdsc.community.dev/chameli-devi-group-of-institutions-indore/"
                  variant="outlined">
                  <img src={logo} style={{ width: 28, marginRight: 10 }} />
                  Join Chapter
                </Button>
              </p>
            </Row>
          </Row>
          <Divider />
          <Container fluid>
            <Row
              style={{
                border: '2px solid red',
                margin: 10,
                borderRadius: 20,
                marginBottom: '80px',
                boxShadow: '5px 2px 25px #f08f8f',
                marginTop: 80,
              }}>
              <Col sm={4}>
                <img
                  class="img-responsive"
                  src={com}
                  style={{ width: '100%' }}
                />
              </Col>
              <Col lg={8}>
                <div>
                  <h1
                    style={{
                      textAlign: 'center',
                      marginTop: 80,
                      color: 'red',
                    }}>
                    Who We Are?
                  </h1>
                  <p
                    style={{
                      textAlign: 'center',
                      color: '#828282',
                      marginLeft: 80,
                      marginRight: 80,
                      fontSize: 18,
                    }}>
                    Google Developer Student Clubs CDGI - Indore is an
                    university-based community groups for students interested in
                    Google developer technologies. Students from all
                    undergraduate or graduate programs with an interest in
                    growing as a developer are welcome. By joining a GDSC,
                    students expand their knowledge in a peer-to-peer learning
                    environment and build solutions for local businesses and
                    their community. Our purpose is to bridge the gap between
                    theory and practice.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Divider />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Home;
