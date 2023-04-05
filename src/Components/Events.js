import React, { useState } from 'react'
import './Events.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CodeologyRoundOne from '../Images/Eventposters/codeology-round-one.webp';
import CodeologyRoundtwo from '../Images/Eventposters/codeology-round-two.webp';
import ComposeCampChapterTwoOops from '../Images/Eventposters/compose-camp-chapter-2-oops.webp';
import githubOpensource from '../Images/Eventposters/github-opensource.webp';
import IntroKotlin from '../Images/Eventposters/intro-kotlin.webp';
import Footer from "./Footer";
import { Link } from 'react-router-dom';





function Events() {
  const [hover, setHover] = useState("Past Events");
  const [upcoming, setupcoming] = useState("Upcoming Events");

  return (

    <div className='event_parent_container'>
      <div className='paraandheadEvent'>
        <h2 className='event_head'>Events & Workshop</h2>
        <p className='event_para'>“Learning never exhausts the mind.”</p>
      </div>
      <div className='pastEventParant'>
        <h3 className='past_events_head' onMouseEnter={() => setHover("Completed !")} onMouseLeave={() => setHover("Past Events")}>{hover}</h3>

      </div>
      <div className='cards_parents'>


        <div className='cards'>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              image={CodeologyRoundOne}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Codeology-Round 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                BROCODE - Saturday , 29 oct 2022
                This event was conducted in online mode
                and there were 250+ registrations , 200+ participants
                ,It was MCQ based test question on DSA and CS fundamentals..........


              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button> */}
              <a className='anchor' href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-codeology/"> <Button size="small">Learn More</Button></a>
            </CardActions>
          </Card>


        </div>

        <div className='cards'>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              image={CodeologyRoundtwo}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Codeology Round-2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The Call of Code - Saturday , 12 Nov 2022
                This is the Coding round where we were using
                Hacker rank as a coding platdorm , There were
                total 5 question based on DSA & CP total 75 min.........
              </Typography>
            </CardContent>
            <CardActions>

              <a className='anchor' href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-codeology/"> <Button size="small">Learn More</Button></a>
            </CardActions>
          </Card>


        </div>

        <div className='cards'>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="295"
              image={ComposeCampChapterTwoOops}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Compose Camp Session 02
              </Typography>
              <Typography variant="body2" color="text.secondary">
                OOPS in Kotlin - Monday , 03 Oct 2022
                In this session speaker focused on the oops concept like inheritance , abstraction
                Polymorphism and encapsulation..........
              </Typography>
            </CardContent>
            <CardActions>

              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>


        </div>

        <div className='cards'>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              image="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/BANNER.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">

                Solution Challenge- Info Session
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The info session was  held on January 23, 2023,at 7 PM.
                This hackathon is focused on solving the United Nation's Sustainable Development Goals using Google technology.

              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button> */}
              <a className='anchor' href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-codeology/"> <Button size="small">Learn More</Button></a>
            </CardActions>
          </Card>


        </div>


        <div className='cards'>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"

              image="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/Shardeum%20%282%29.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">

                Building BlockChain
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The workshop was held on February 4, 2023
                This workshop was organized by GDSC-CDGI in collaboration with Shardeum .
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button> */}
              <a className='anchor' href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-building-blockchain/"> <Button size="small">Learn More</Button></a>
            </CardActions>
          </Card>


        </div>

        <div className='cards'>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="255"

              image="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/Copy%20of%20WebDev%20Simplified_IXBbaa8.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">

                WEBDEV SIMPLIFIED (DAY-1)
              </Typography>
              <Typography variant="body2" color="text.secondary">

                This Workshop was held on Tuesday, 27 February 2023 · 7:30 to 8:30PM
                This workshop cover the we cover HTML , CSS and Javascript , Angular.
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button> */}
              <a className='anchor' href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-webdev-simplified-day-1/https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-building-blockchain/"> <Button size="small">Learn More</Button></a>
            </CardActions>
          </Card>


        </div>



        <div className='cards'>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="255"
              image="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/IIST%20Speaker%20Puneet.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                WebDev Simplified (Day-02)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Workshop was held on Tuesday, 28 February 2023 · 7:30 to 8:30PM
                This workshop cover the we cover HTML , CSS and Javascript , Angular.
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button> */}
              <a className='anchor' href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-webdev-simplified-day-1/https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-building-blockchain/"> <Button size="small">Learn More</Button></a>
            </CardActions>
          </Card>


        </div>

        <div className='cards'>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"

              image="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/WhatsApp%20Image%202023-03-09%20at%204.17.04%20PM.jpeg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">


                Flutter Forward Extented - GDSC CDGI
              </Typography>
              <Typography variant="body2" color="text.secondary">

              The "Flutter Forward Extended-GDSC CDGI" introduction session was hosted by 30+ Google Developer Student Clubs and happened on March 10th from 4:30 PM to 5:30 PM on Microsoft Teams. 
              The event was about Flutter, a mobile development framework, and was a great chance to learn more about it.
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button> */}
              <a className='anchor' href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-flutter-forward-extented-gdsc-cdgi/"> <Button size="small">Learn More</Button></a>
            </CardActions>
          </Card>


        </div>


        <div className='cards'>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="255"
              image="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/Roman%20Sir%20Session_0qr3U5j.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Flutter Forward
              </Typography>
              <Typography variant="body2" color="text.secondary">
              This session was held on Sun, Apr 2, 4:00 PM 
              In the previous session, Roman Sir shared insights on how to grow one's career as a Flutter Developer. 
              He covered topics such as the importance of internships and emerging job trends.
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button> */}
              <a className='anchor' href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-flutter-forward/"> <Button size="small">Learn More</Button></a>
            </CardActions>
          </Card>


        </div>


      </div>
      <div>
        <h2 className='upcomingHead' onMouseEnter={() => setupcoming("Pending..!")} onMouseLeave={() => setupcoming("Upcoming Events")}>{upcoming}</h2>


       <h3>Coming Soon.....</h3>
      </div>
      <div>
        <Footer />
      </div>

    </div>


  )
}

export default Events