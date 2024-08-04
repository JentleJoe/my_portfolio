import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/img/logo.svg'
import linkdinLogo from '../assets/img/nav-icon1.svg'
import xlogo from '../assets/img/Xlogo.svg'
import githubLogo from '../assets/img/github-mark-white.svg'


export default function Footer() {

    const linkdinLink = "https://linkedin.com/in/joshua-oseghale"
    const twitterLink = "https://x.com/code_chart"
    const githubLink = "https://github.com/jentlejoe"

    return(
        <footer className="footer">
            <Container>
                <Row className="text-center">
                    <div className="social-icon">
                    <a href={linkdinLink} target="_blank"><img src={linkdinLogo} alt='' /></a>
                    <a href={twitterLink} target="_blank"><img src={xlogo} alt='' /></a>
                    <a href={githubLink} target="_blank"><img src={githubLogo} alt='' /></a>
                    </div>
                    <p>CopyRight 2024. All Right Reserved</p>
                </Row>
            </Container>
        </footer>
    )
}