import React, { useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { useLanguage } from '../../hooks/useLanguage'
import NavBarControls from './NavBarControls'
import './NavBar.css'
import '../../App.css'
import logo from '../../assets/img/logo.png'
import rentifyNowLogo from '../../assets/rentifynow/RentifyNowLogo.jpeg'

const NavBar = () => {
    const { t } = useLanguage();
    const hireMeUrl = "https://www.linkedin.com/in/bartoszlitwa/";
    const [activeLink, setActiveLink] = useState('#home');
    const [scrolled, setScrolled] = useState(false);
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 992) {
                setToggled(false)
            }
        }

        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    const onUpdateActiveLink = (value: string) => {
        setActiveLink(value)
        setToggled(false) // Close mobile menu when link is clicked
    }

    return (
        <>
            <a href="#main-content" className="skip-link">
                {t('navigation.skipToMain')}
            </a>
            <Navbar
                expand="lg"
                expanded={toggled}
                collapseOnSelect
                className={scrolled || toggled ? "scrolled" : ""}
                onToggle={(nextExpanded) => setToggled(Boolean(nextExpanded))}
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
                        <Nav className="me-auto navbar-nav-links" role="menubar">
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
                                href="#experience"
                                className={`navbar-link ${activeLink === '#experience' ? 'active' : ''}`}
                                onClick={() => onUpdateActiveLink('#experience')}
                                role="menuitem"
                                aria-current={activeLink === '#experience' ? 'page' : undefined}
                            >
                                {t('navigation.experience')}
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
                            <div className="navbar-controls-wrapper">
                                <NavBarControls />
                            </div>
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
                                    href="https://www.rentifynow.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="RentifyNow Website"
                                    className="rentifynow-link"
                                >
                                    <img
                                        src={rentifyNowLogo}
                                        alt="RentifyNow"
                                        width="24"
                                        height="24"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                            <a
                                href={hireMeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-link"
                                aria-label="Hire Bartosz Litwa via LinkedIn"
                            >
                                <span className="btn-modern btn-primary">
                                    <span>{t('navigation.letsConnect')}</span>
                                </span>
                            </a>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar