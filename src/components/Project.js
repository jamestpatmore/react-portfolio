import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/blogscreenshot.png';
import projImg2 from '../assets/img/productscreenshot.png';
import projImg3 from '../assets/img/speedrunnerdesktop.png';
import projImg4 from '../assets/img/hompagess.png';
import projImg5 from '../assets/img/disneyplus.png';
import projImg6 from '../assets/img/twitter.png';
import projImg7 from '../assets/img/pokeCards.png';
import projImg8 from '../assets/img/reacttasktracker-ex.png';
import projImg9 from '../assets/img/employee-tracker.png';
import projimg10 from '../assets/img/homepagessP3.png';
// import projImg10 from '../assets/img/pokeCards.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {
  const projects = [
    {
      title: "DevTek: Blog",
      description: "MVC model for the Blog Post Section of DevTek (one of my creations)",
      imgUrl: projImg1,
      href: "https://github.com/jamestpatmore/Project2" 
    },
    {
      title: "DevTek",
      description: "ECOMM website MVC model. With UserAuth, BlogPost and Retail",
      imgUrl: projImg2,
      href: "https://github.com/jamestpatmore/MVC-TechBlog"
    },
    {
      title: "SPEEDRUNNER",
      description: "Video Game Database//Using 3rd Party APIS//WIP",
      imgUrl: projImg3,
      href: 'https://github.com/jlmayo/Speed-Runner'
    },
    {
      title: 'React-TaskTracker',
      description: "Dynamic schedule coordinator built with React!",
      imgUrl: projImg8,
      href: 'https://github.com/jamestpatmore/ReactTaskTracker'
    },
    {
      title: 'EmployeeTracker',
      description: "Employee Database built w/SQL and Node",
      imgUrl: projImg9,
      href: 'https://github.com/jamestpatmore/EmployeeTracker_SQL'
    },
    {
      title: 'CodeQuiz',
      description: "Fun tech/code based quiz to test your technological intellect!",
      imgUrl: projImg4,
      href: 'https://github.com/jamestpatmore/CodeQuiz'
    },
    {
      title: 'L.M.A.Y',
      description: "Anon Social Media Questionare built w/MERN & Apollo GraphQL [click for heroku link]",
      imgUrl: projimg10,
      href: 'https://polar-sierra-99541.herokuapp.com'
    }
  ];
  const clones = [
    {
      title: 'Disney Plus: Clone',
      description: "In the Works: Disney Plus App clone",
      imgUrl: projImg5,
    },
    {
      title: "Twitter: Clone",
      description: "In the Works: Twitter App clone",
      imgUrl: projImg6,
    },
  ];

  const wipProjects = [
    {
      title: 'PokeCardz',
      description: 'In the works: Pokemon Card Database for collectors',
      imgUrl: projImg7,
    }
  ]

  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
          {({ isVisible }) => 
          <div className={isVisible ? 'animated__animated animate__bounce' : ''}>
            <h2>PROJECTS</h2>
            <p>Showcase of some of my work(s)..You may find all of my projects at my github. </p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>ORIGINALS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">CLONES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    TBD
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                          key={index}
                          {...project}
                          />
                          )
                        })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <Row>
                      {
                      clones.map((project, index) => {
                        return (
                          <ProjectCard
                          key={index}
                          {...project}
                          />
                          )
                        })
                      }

                  </Row>
                  </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <Row>
                      {
                      wipProjects.map((project, index) => {
                        return (
                          <ProjectCard
                          key={index}
                          {...project}
                          />
                          )
                        })
                      }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>}  
          </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt='bg-gradient-2'></img>
    </section>
  )
}

