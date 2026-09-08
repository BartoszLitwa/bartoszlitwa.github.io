import React, { useEffect, useRef, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Linkedin } from 'react-bootstrap-icons';
import { useLanguage } from '../../hooks/useLanguage';
import NavBarControls from './NavBarControls';
import './NavBar.css';
import '../../App.css';
import logo from '../../assets/img/logo.webp';
import githubLogo from '../../assets/img/github.png';

const NavBar = () => {
  const { t } = useLanguage();
  const hireMeUrl = 'https://www.linkedin.com/in/bartoszlitwa/';
  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [toggled, setToggled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { href: '#home', label: t('navigation.home') },
    { href: '#ecosystem', label: t('navigation.company') },
    { href: '#experience', label: t('navigation.experience') },
    { href: '#certifications', label: t('certifications.title') }
  ];

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
    if (!window.location.hash) return;

    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'ecosystem', 'experience', 'certifications'];
    let frameId: number | undefined;

    const updateActiveSection = () => {
      frameId = undefined;
      const activationLine = window.innerHeight * 0.3;
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));
      let activeSection = sections[0];

      for (const section of sections) {
        if (section.getBoundingClientRect().top > activationLine) break;
        activeSection = section;
      }

      if (activeSection) setActiveLink(`#${activeSection.id}`);
    };

    const scheduleActiveSectionUpdate = () => {
      if (frameId !== undefined) return;
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', scheduleActiveSectionUpdate, { passive: true });
    window.addEventListener('resize', scheduleActiveSectionUpdate);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const resizeObserver =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(scheduleActiveSectionUpdate);
    sections.forEach((section) => resizeObserver?.observe(section));

    const main = document.getElementById('main-content');
    const mutationObserver = main ? new MutationObserver(scheduleActiveSectionUpdate) : null;
    if (main) mutationObserver?.observe(main, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', scheduleActiveSectionUpdate);
      window.removeEventListener('resize', scheduleActiveSectionUpdate);
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (!toggled) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setToggled(false);
      window.requestAnimationFrame(() => toggleRef.current?.focus());
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [toggled]);

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
    document.getElementById(value.slice(1))?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    });
  };

  const onSkipToMain = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const main = document.getElementById('main-content');
    if (!main) return;

    window.history.pushState({}, '', '#main-content');
    main.focus();
    main.scrollIntoView({ behavior: 'auto', block: 'start' });
  };

  return (
    <>
      <a href="#main-content" className="skip-link" onClick={onSkipToMain}>
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
            ref={toggleRef}
            aria-controls="basic-navbar-nav"
            aria-expanded={toggled}
            label={t('navigation.aria.toggle')}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-nav-links">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.href}
                  href={item.href}
                  className={`navbar-link ${activeLink === item.href ? 'active' : ''}`}
                  onClick={() => onUpdateActiveLink(item.href)}
                  aria-current={activeLink === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Nav.Link>
              ))}
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
