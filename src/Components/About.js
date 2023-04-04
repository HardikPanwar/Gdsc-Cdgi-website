import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import diver from '../Images/diversity.png'
import commun from '../Images/Community.png'
import { Divider,Button } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import Footer from './Footer';
function About() {
  return (
    <>
    <Container fluid >
      <Row  style={{display:'flex' ,justifyContent:'space-around'}}>
        <Col>
        <div style={{fontSize:40 ,fontWeight:'bold' ,color:'#2c7eea' }}>About</div>
        </Col>
        <Col>
        <Button href='mailto:gdsccdgi@cdgi.edu.in' variant='contained' style={{margin:0}}><ContactsIcon/>Contact Us</Button>
        </Col>
      </Row>
      <Divider/>
      <Row style={{display:'flex' ,justifyContent:'space-around',marginTop:30}}>
        <Col>
        <img className="img-responsive" src={diver} style={{width:'35vw'}}/>
        </Col>
        <Col>
        <div>
          <h1 style={{ textAlign: "center",marginTop:80}}>About Us</h1>
          <p style={{ textAlign: "center" ,color:'#828282',marginLeft:80,marginRight:80,fontSize:18}}>
              Google collaborates with DSC Leads once a year who are pursuing an
              undergraduate or graduate university degree and supports them as
              they start and grow their on-campus community. DSC activities are
              targeted at University students and others including faculty
              members who want to learn development skills & work to solve
              real-life problems.
              <br />
              <br />
              We at GDSC-CDGI Indore look forward to form a community where we
              are able to convert our knowledge into real time application, help
              each student to develop in different fields of technology and make
              use of our knowledge to build something that helps local
              businesses around us as well as their community.
          </p>
          </div>
        </Col>
      </Row>
      <Divider/>


      <Row style={{display:'flex' ,justifyContent:'space-around',marginTop:30 }}>
        <Col>
        <div>
          <h1 style={{ textAlign: "center",marginTop:80}}>Community Guidelines</h1>
          <h3 style={{textAlign:"center"}}>1. Be respectful </h3>
          <p style={{ textAlign: "center" ,marginLeft:80,marginRight:80,fontSize:18,color:'#828282'}}>
          We're all part of the same community, so be friendly, welcoming, and generally a nice person. Be someone that other people want to be around.
          </p>

          <h3 style={{textAlign:"center"}}>2. Be respectful and constructive</h3>
          <p style={{ textAlign: "center" ,marginLeft:80,marginRight:80,fontSize:18,color:'#828282'}}>
          Remember to be respectful and constructive with your communication to fellow members. Don't get into flamewars, make personal attacks, vent, or rant unconstructively. Everyone should take responsibility for the community and take the initiative to diffuse tension and stop a negative thread as early as possible.
          </p>

          <h3 style={{textAlign:"center"}}>3. Be collabrative </h3>
          <p style={{ textAlign: "center" ,marginLeft:80,marginRight:80,fontSize:18,color:'#828282'}}>
          Work together! We can learn a lot from each other. Share knowledge, and help each other out.
          </p>
          </div>
        </Col>
        
      </Row>
      <Footer/>
    </Container>
    </>
  )
}

export default About