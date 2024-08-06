import { Col, Container, Row, Tab } from "react-bootstrap"
import joebank from '../assets/img/joebank.png'
import littleLemon from '../assets/img/littlelemon.png'
import colorSharp2 from "../assets/img/color-sharp2.png"
import portfolio from '../assets/img/portfolio.png'
import { projects_text } from "./Text";
import Cards from "./Cards";
import vwakpor from '../assets/img/vwakpor-hero.png'



export default function Projects(){

    const projectDetails = [
        {
            image: joebank,
            type: "Business Website",
            title: "JoeBank Business Landing Page",
            url: 'https://joebank.vercel.app',
            githubLink: 'https://github.com/JentleJoe/modern_landing_page',
            target: '_blank',
            text: `A modern business landing page built with React.js and Tailwind Css`
        },
        {
            image: littleLemon,
            type: "Restaurant's Website",
            title: "Little Lemon Restaurant",
            url: 'https://littlelemonfoods.vercel.app',
            githubLink: 'https://github.com/JentleJoe/little_lemon',
            target: '_blank',
            text: `Restaurant landing page with table reservation section
            connected to a live API to fetch available times. Built with React.js`
        },
        {
            image: vwakpor,
            type: "Multi-page Website",
            title: "Multi Page Brand Identity Website",
            url: 'https://vwakpor.vercel.app',
            githubLink: 'https://github.com/jentlejoe',
            target: '_blank',
            text: `Multi-page brand identity website built with React.js, Tailwind Css
            and React Router Dom for routes `
        },
        {
            image: portfolio,
            type: "Portfolio Website",
            title: "My Portfolio",
            url: '',
            githubLink: 'https://github.com/jentlejoe',
            target: '',
            text: `Minimalist Portfolio Website built with React.js `
        }
    ]

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading-text">Projects</h2>
                        <p className="proj-subheading">{projects_text}</p>
                        <div className="projcard-container">
                            {
                                projectDetails.map((project, index) => {
                                    return(
                                        <Cards key={index} image={project.image} type={project.type} title={project.title}
                                        url={project.url} githubLink={project.githubLink} text={project.text} target={project.target} />
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )

}