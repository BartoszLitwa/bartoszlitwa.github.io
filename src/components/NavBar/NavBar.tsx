import React, { useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { useLanguage } from '../../hooks/useLanguage'
import NavBarControls from './NavBarControls'
import './NavBar.css'
import '../../App.css'
import logo from '../../assets/img/logo.png'

const NavBar = () => {
    const { t } = useLanguage();
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
                {t('navigation.skipToMain')}
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
                        <img src={logo} alt="Bartosz Litwa Logo" loading="eager" />
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
                                {t('navigation.home')}
                            </Nav.Link>
                            <Nav.Link 
                                href="#skills" 
                                className={`navbar-link ${activeLink === '#skills' ? 'active' : ''}`}
                                onClick={() => onUpdateActiveLink('#skills')}
                                role="menuitem"
                                aria-current={activeLink === '#skills' ? 'page' : undefined}
                            >
                                {t('navigation.skills')}
                            </Nav.Link>
                            <Nav.Link 
                                href="#experience" 
                                className={`navbar-link ${activeLink === '#experience' ? 'active' : ''}`}
                                onClick={() => onUpdateActiveLink('#experience')}
                                role="menuitem"
                                aria-current={activeLink === '#experience' ? 'page' : undefined}
                            >
                                {t('navigation.experience')}
                            </Nav.Link>
                            <Nav.Link 
                                href="#projects" 
                                className={`navbar-link ${activeLink === '#projects' ? 'active' : ''}`}
                                onClick={() => onUpdateActiveLink('#projects')}
                                role="menuitem"
                                aria-current={activeLink === '#projects' ? 'page' : undefined}
                            >
                                {t('navigation.projects')}
                            </Nav.Link>
                            <Nav.Link 
                                href="#certifications" 
                                className={`navbar-link ${activeLink === '#certifications' ? 'active' : ''}`}
                                onClick={() => onUpdateActiveLink('#certifications')}
                                role="menuitem"
                                aria-current={activeLink === '#certifications' ? 'page' : undefined}
                            >
                                {t('navigation.certifications')}
                            </Nav.Link>
                        </Nav>
                        
                        <span className="navbar-text">
                            <NavBarControls />
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
                                        loading="lazy"
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
                                        loading="lazy"
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
                                        loading="lazy"
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
                                    <span>{t('navigation.letsConnect')}</span>
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