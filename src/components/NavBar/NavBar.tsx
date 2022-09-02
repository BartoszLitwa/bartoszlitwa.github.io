import React, { useEffect } from "react"
import { useState } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import './NavBar.css'
import '../../App.css'
import logo from '../../assets/img/logo.svg'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('#home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value: string) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mx-5">
                        <Nav.Link href="#home" className={`navbar-link ${activeLink === '#home' ? 'active' : ''}`}
                        onClick={() => onUpdateActiveLink('#home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={`navbar-link ${activeLink === '#skills' ? 'active' : ''}`}
                        onClick={() => onUpdateActiveLink('#skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={`navbar-link ${activeLink === '#projects' ? 'active' : ''}`}
                        onClick={() => onUpdateActiveLink('#projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/bartoszlitwa/"><img src={navIcon1} alt="LinkedIn page"></img></a>
                            <a href="https://github.com/BartoszLitwa"><img src="https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg" alt="Github Page"></img></a>
                            <a href="https://litwa.dev"><img src={logo} alt="Portfolio Page"></img></a>
                        </div>
                        <Button className="vvd" onClick={() => onUpdateActiveLink('#contact')}>
                            <span>Let's Connect</span>
                        </Button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar