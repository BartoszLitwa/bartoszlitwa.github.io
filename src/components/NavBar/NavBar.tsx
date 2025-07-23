import React, { useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import './NavBar.css'
import '../../App.css'
import logo from '../../assets/img/logo.png'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('#home');
    const [scrolled, setScrolled] = useState(false);
    const [toggled, setToggled] = useState(false);

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
        setToggled(false) // Close mobile menu when link is clicked
    }

    const handleToggle = () => {
        setToggled(!toggled)
    }

    return (
        <>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <Navbar 
                expand="lg" 
                className={scrolled || toggled ? "scrolled" : ""} 
                onToggle={handleToggle}
                role="navigation"
                aria-label="Main navigation"
            >
                <Container>
                    <Navbar.Brand href="#home" aria-label="Bartosz Litwa - Home">
                        <img src={logo} alt="Bartosz Litwa Logo" />
                    </Navbar.Brand>
                    
                    <Navbar.Toggle 
                        aria-controls="basic-navbar-nav"
                        aria-expanded={toggled}
                        aria-label="Toggle navigation menu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto mx-5" role="menubar">
                            <Nav.Link 
                                href="#home" 
                                className={`navbar-link ${activeLink === '#home' ? 'active' : ''}`}
                                onClick={() => onUpdateActiveLink('#home')}
                                role="menuitem"
                                aria-current={activeLink === '#home' ? 'page' : undefined}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link 
                                href="#skills" 
                                className={`navbar-link ${activeLink === '#skills' ? 'active' : ''}`}
                                onClick={() => onUpdateActiveLink('#skills')}
                                role="menuitem"
                                aria-current={activeLink === '#skills' ? 'page' : undefined}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link 
                                href="#experience" 
                                className={`navbar-link ${activeLink === '#experience' ? 'active' : ''}`}
                                onClick={() => onUpdateActiveLink('#experience')}
                                role="menuitem"
                                aria-current={activeLink === '#experience' ? 'page' : undefined}
                            >
                                Experience
                            </Nav.Link>
                            <Nav.Link 
                                href="#projects" 
                                className={`navbar-link ${activeLink === '#projects' ? 'active' : ''}`}
                                onClick={() => onUpdateActiveLink('#projects')}
                                role="menuitem"
                                aria-current={activeLink === '#projects' ? 'page' : undefined}
                            >
                                Projects
                            </Nav.Link>
                        </Nav>
                        
                        <span className="navbar-text">
                            <div className="social-icon" role="group" aria-label="Social media links">
                                <a 
                                    href="https://www.linkedin.com/in/bartoszlitwa/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn Profile"
                                >
                                    <img 
                                        src="https://github.com/devicons/devicon/raw/master/icons/linkedin/linkedin-plain.svg" 
                                        alt="LinkedIn"
                                        width="24"
                                        height="24"
                                    />
                                </a>
                                <a 
                                    href="https://github.com/BartoszLitwa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub Profile"
                                >
                                    <img 
                                        src={require("../../assets/img/github.png")} 
                                        alt="GitHub"
                                        width="24"
                                        height="24"
                                    />
                                </a>
                                <a 
                                    href="https://litwa.dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Portfolio Website"
                                >
                                    <img 
                                        src={logo} 
                                        alt="Portfolio"
                                        width="24"
                                        height="24"
                                    />
                                </a>
                            </div>
                            <Nav.Link 
                                href="#contact" 
                                onClick={() => onUpdateActiveLink('#contact')}
                                className="cta-link"
                            >
                                <button 
                                    type="button"
                                    aria-label="Contact Bartosz Litwa"
                                >
                                    <span>Let's Connect</span>
                                </button>
                            </Nav.Link>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar