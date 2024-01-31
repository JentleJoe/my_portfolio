import { Col, Container, Row, Tab } from "react-bootstrap"
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import Nav from 'react-bootstrap/Nav';
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"



export default function Projects(){

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3
        },  
        {
            title: "little Lemon Restaurant",
            description: "A medium sized restaurant based in ...",
            imgUrl: projImg1
        },
        {
            title: "Hoobank Business Landing Page",
            description: "A Modern Business landing page",
            imgUrl: projImg2
        }

    ]

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tellus at eros fringilla iaculis ac et neque. Proin vitae scelerisque nulla, quis congue enim. Vestibulum metus neque, porta quis placerat eu, luctus vel orci. Nulla quis viverra lorem, a elementum urna. Vestibulum bibendum, neque quis luctus posuere, sem mi auctor felis, at pellentesque libero tortor sed tellus. Nulla facilisi. Integer eu turpis aliquam, hendrerit mauris a, fringilla magna. Phasellus bibendum lacus eget ligula interdum tristique. Curabitur ornare massa pharetra nunc volutpat tincidunt.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center"
                            id="pills-tab" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Web Apps</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Mobile Apps</Nav.Link>
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
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" >Lorem Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third" >Lorem Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )

}