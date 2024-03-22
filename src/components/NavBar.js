import {Navbar, Container, Nav} from 'react-bootstrap/';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg'
import linkdinLogo from '../assets/img/nav-icon1.svg'
import xlogo from '../assets/img/Xlogo.svg'
import githubLogo from '../assets/img/github-mark-white.svg'


const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // state to display navbar based on scroll position
    // const [scrollPos, setScrollPos] = useState(0)
    const [scrollDirection, setScrollDirection] =  useState("")

    // logic to display navbar based on scroll direction.
    // FAULT: Dynamically changing text automatically scrolls screen causing glitch
    // TODO: Find out if there is another way to watch for scroll event that wont be affected

    // useEffect(() => {
    //   const handleScroll = () => {
    //     const currentScrollPos = window.scrollY
    //     setScrollDirection(
    //       currentScrollPos > 50 && currentScrollPos > scrollPos ? "down" : "up"
    //     )
    //     setScrollPos(currentScrollPos)

    //     if (window.scrollY > 50){
    //       setScrolled(true)
    //     }else{
    //         setScrolled(false)
    //     }
    //   }

    //   window.addEventListener('scroll', handleScroll);

    //   return(() => {
    //     window.removeEventListener('scroll', handleScroll)
    //   })
    // })



    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    },
    [])

    const updateActiveLink =(value) => {
        setActiveLink(value)
    }

    const linkdinLink = "https://linkedin.com/in/joshua-oseghale"
    const twitterLink = "https://x.com/code_chart"
    const githubLink = "https://github.com/jentlejoe"

  return (
    <Navbar expand="lg" className={`${scrolled ? 'scrolled' : ''}
    ${window.scrollY > 150 && scrollDirection === "down" ? "scrollup" : ""}
    ${window.scrollY > 150 && scrollDirection === "up" ? "scrolldown" : ""} `} >
      <Container>
        {/* <Navbar.Brand href="#home">
            <img src={logo}  alt = "logo" />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
            onClick={ () => updateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => updateActiveLink('skills')} >Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
            onClick={ () => updateActiveLink('projects')} >Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href={linkdinLink} target="_blank"><img src={linkdinLogo} alt='' /></a>
                <a href={twitterLink} target="_blank"><img src={xlogo} alt='' /></a>
                <a href={githubLink} target="_blank"><img src={githubLogo} alt='' /></a>
                {/* <button className='vvd' onClick={() => console.log ('connect')} >
                  <span>Let's Connect</span>
                </button> */}
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;