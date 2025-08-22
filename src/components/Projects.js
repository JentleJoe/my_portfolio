import { Col, Container, Row, Tab } from "react-bootstrap"
import joebank from '../assets/img/joebank.png'
import kinagelifts from '../assets/img/kinagelifts.png'
import jenyrenfoods from '../assets/img/jenyrenfoods.png'
import littleLemon from '../assets/img/littlelemon.png'
import colorSharp2 from "../assets/img/color-sharp2.png"
import portfolio from '../assets/img/portfolio.png'
import { projects_text } from "./Text";
import Cards from "./Cards";
import vwakpor_new from '../assets/img/vwakpor_new.png'
import homebuzz from '../assets/img/homebuzz.png'
import sheerluck from '../assets/img/sheerluck.png'
import dashboard from '../assets/img/dashboard.png'
import trader_dashboard from '../assets/img/trader-dashboard.png'



export default function Projects(){

    const projectDetails = [
        {
            image: kinagelifts,
            type: "Industrial Website",
            title: "Kinagelifts",
            url: 'https://kinagelifts.com',
            githubLink: '',
            target: '_blank',
            text: `A professional industrial website built to high standards, following best practices. The UI features sharp and flat corners for a sophisticated, reliable look that builds trust with visitors.`
        },
        {
            image: jenyrenfoods,
            type: "Food Brand Website",
            title: "Jenyrenfoods",
            url: 'https://jenyrenfoods.com',
            githubLink: '',
            target: '_blank',
            text: `A modern website for the African food brand Jenyrenfoods. Built with adhering to modern UI best practices.`
        },
        {
            image: trader_dashboard,
            type: "Trader / Investor Dashboard",
            title: "Trader Dashboard",
            url: 'https://trader-dashboard.vercel.app',
            githubLink: 'https://github.com/JentleJoe/',
            target: '_blank',
            text: `A portfolio Manager Dashboard built to help traders and investors seamlessly track and manage their investments.`
        },
        {
            image: homebuzz,
            type: "Real Estate Investment Website",
            title: "Real Estate Website",
            url: 'https://buzzhomes.vercel.app',
            githubLink: 'https://github.com/JentleJoe/',
            target: '_blank',
            text: `A real estate website featuring a modern UI and a portfolio dashboard for managing investments online, built with React.js and Tailwind CSS.`
        },
        {
            image: joebank,
            type: "Online Bank Website",
            title: "Onine Bank Landing Page",
            url: 'https://joebank.vercel.app',
            githubLink: 'https://github.com/JentleJoe/modern_landing_page',
            target: '_blank',
            text: `A modern online banking website landing page featuring a rich user interface
            with contemporary design trends. Built with React.js and Tailwind CSS.`
        },
        {
            image: dashboard,
            type: "Admin Dashboard Website",
            title: "Admin Dashboard",
            url: 'https://elite-admin-dashboard.vercel.app',
            githubLink: 'https://github.com/JentleJoe/react-admin',
            target: '_blank',
            text: `An advanced admin dashboard with light and dark mode, featuring dedicated sections for team management with data tables
            and interactive charts for visualizing product information.`
        },
        {
            image: sheerluck,
            type: "Crypto Token Website",
            title: "$Sheerluck Token Webite",
            url: 'https://sheerluck.vercel.app',
            githubLink: 'https://github.com/JentleJoe/',
            target: '_blank',
            text: `Crypto token website with modern UI containing an embeded live chart's section
            that helps you view all the token information in one place.`
        },
        {
            image: vwakpor_new,
            type: "Brand Identity Website",
            title: "Vwakpor Brand Identity Website",
            url: 'https://vwakpor.vercel.app',
            githubLink: 'https://github.com/jentlejoe',
            target: '',
            text: `A professional brand identity website with a blog section and a
            dedicated bookings page, built using React.js and Tailwind CSS.`
        },
        {
            image: littleLemon,
            type: "Restaurant's Website",
            title: "Little Lemon Restaurant",
            url: 'https://littlelemonfoods.vercel.app',
            githubLink: 'https://github.com/JentleJoe/little_lemon',
            target: '_blank',
            text: `A restaurant landing page with a table reservation feature integrated
            with a live API to fetch real-time availability for customer bookings.`
        },
        {
            image: portfolio,
            type: "Portfolio Website",
            title: "Portfolio Website",
            url: '',
            githubLink: 'https://github.com/jentlejoe',
            target: '',
            text: `Minimalist Portfolio Website built with React.js `
        },
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
