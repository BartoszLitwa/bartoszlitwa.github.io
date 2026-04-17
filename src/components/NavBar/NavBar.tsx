import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Linkedin } from 'react-bootstrap-icons';
import { useLanguage } from '../../hooks/useLanguage';
import NavBarControls from './NavBarControls';
import './NavBar.css';
import '../../App.css';
import logo from '../../assets/img/logo.webp';
import rentifyNowLogo from '../../assets/rentifynow/RentifyNowLogo.jpeg';
import githubLogo from '../../assets/img/github.png';

const NavBar = () => {
  const { t } = useLanguage();
  const hireMeUrl = 'https://www.linkedin.com/in/bartoszlitwa/';
  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) {
        setToggled(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
    setToggled(false); // Close mobile menu when link is clicked
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t('navigation.skipToMain')}
      </a>
      <Navbar
        expand="lg"
        expanded={toggled}
        collapseOnSelect
        className={scrolled || toggled ? 'scrolled' : ''}
        onToggle={(nextExpanded) => setToggled(Boolean(nextExpanded))}
        role="navigation"
        aria-label={t('navigation.aria.mainNav')}
      >
        <Container>
          <Navbar.Brand href="#home" aria-label={t('navigation.aria.homeBrand')}>
            <img src={logo} alt={t('navigation.aria.logoAlt')} loading="eager" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            aria-expanded={toggled}
            aria-label={t('navigation.aria.toggle')}
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
              <div className="social-icon" role="group" aria-label={t('navigation.aria.social')}>
                <a
                  href="https://www.linkedin.com/in/bartoszlitwa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('navigation.aria.linkedin')}
                >
                  <Linkedin size={24} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/BartoszLitwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('navigation.aria.github')}
                >
                  <img
                    src={githubLogo}
                    alt={t('navigation.aria.githubAlt')}
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://www.rentifynow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('navigation.aria.rentify')}
                  className="rentifynow-link"
                >
                  <img
                    src={rentifyNowLogo}
                    alt={t('navigation.aria.rentifyAlt')}
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
                aria-label={t('navigation.aria.hire')}
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
  );
};

export default NavBar;
