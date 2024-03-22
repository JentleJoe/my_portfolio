import { Col, Container, Row, Tab } from "react-bootstrap"
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import portfolio from '../assets/img/portfolio.png'
import joebank from '../assets/img/joebank.png'
import portfolio_Img from '../assets/img/portfolio_Img.png'
import Nav from 'react-bootstrap/Nav';
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import demo_portfolio from "../assets/img/demo_portfolio.png"
import { projects_text } from "./Text";



export default function Projects(){

    const projects = [
        {
            show: true,
            title: "Business Landing Page",
            description: "A business landing page with modern UI built with react.js and tailwind css",
            imgUrl: joebank,
            projUrl: '#projects'    //Change to URL live site
        },
        {
            show: true,
            title: "Portfolio Page",
            description: "React Portfolio page with modern UI and animations",
            imgUrl: portfolio,
            projUrl: '#projects'
        },
        {
            show: false,
            title: "Little Lemon Restaurant",
            description:   `A restaurant homepage with fully functional table
            reservation section.
             STILL UNDER BUILD ...`,
            imgUrl: projImg2,
            projUrl: '#projects'
        }
    ]

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                        {projects_text}
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center"
                            id="pills-tab" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Web</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Mobile App</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })

                                            // THIS IS THE SOLUTION BUT THE CONTAINER STYLES DON'T APPLY
                                            // AGAIN... WORK ON THIS OR MAUALLY ADD NEW STYLES

                                            // return(
                                            //     project.show ?
                                            //     <a href={project.projUrl} target="_blank">
                                            //         <ProjectCard key={index} {...project} />
                                            //     </a>
                                            //     :
                                            //     <a href="#projects">
                                            //         <ProjectCard key={index} {...project} />
                                            //     </a>
                                            // )
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                       <p>Update coming soon...</p>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )

}