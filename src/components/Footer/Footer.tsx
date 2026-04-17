import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Linkedin } from 'react-bootstrap-icons';
import { useLanguage } from '../../hooks/useLanguage';
import './Footer.css';
import '../NavBar/NavBar.css';
import logo from '../../assets/img/logo.webp';
import rentifyNowLogo from '../../assets/rentifynow/RentifyNowLogo.jpeg';
import githubLogo from '../../assets/img/github.png';

const Footer = () => {
  const { t } = useLanguage();
  const hireMeUrl = 'https://www.linkedin.com/in/bartoszlitwa/';

  const ecosystemLinks = [
    { name: 'DoifyNow', url: 'https://doifynow.com', className: '' },
    { name: 'RentifyNow', url: 'https://rentifynow.com', className: 'text-accent-green' },
    { name: 'HouseifyNow', url: 'https://houseifynow.com', className: '' },
    { name: 'GoalifyNow', url: 'https://goalifynow.com', className: '' },
    { name: 'DeployifyNow', url: 'https://deployifynow.com', className: '' }
  ];

  return (
    <footer className="footer" role="contentinfo">
      <Container>
        <Row className="footer-top-row">
          <Col md={4} className="footer-brand-col">
            <img src={logo} alt={t('footer.aria.logoAlt')} loading="lazy" />
            <p className="footer-tagline">{t('footer.tagline')}</p>
          </Col>
          <Col md={4} className="footer-ecosystem-col">
            <h4 className="footer-section-title">{t('footer.ecosystemTitle')}</h4>
            <nav className="footer-ecosystem-links" aria-label={t('footer.aria.ecosystem')}>
              {ecosystemLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`footer-eco-link ${link.className}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </Col>
          <Col md={4} className="footer-connect-col">
            <h4 className="footer-section-title">{t('footer.connectTitle')}</h4>
            <div className="navbar-text">
              <div className="social-icon" role="group" aria-label={t('footer.aria.social')}>
                <a
                  href="https://www.linkedin.com/in/bartoszlitwa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('footer.aria.linkedin')}
                >
                  <Linkedin size={24} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/BartoszLitwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('footer.aria.github')}
                >
                  <img
                    height={24}
                    width={24}
                    src={githubLogo}
                    alt={t('footer.aria.githubAlt')}
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://www.rentifynow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('footer.aria.rentify')}
                  className="rentifynow-link"
                >
                  <img
                    src={rentifyNowLogo}
                    height={24}
                    width={24}
                    alt={t('footer.aria.rentifyAlt')}
                    loading="lazy"
                  />
                </a>
              </div>
              <a
                href={hireMeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-cta"
                aria-label={t('footer.aria.connectCta')}
              >
                {t('footer.connect')}
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="footer-bottom">
              <p>
                &copy; {new Date().getFullYear()} {t('footer.rights')}
              </p>
              <p className="footer-bottom-links">
                <a href="https://doifynow.com" target="_blank" rel="noopener noreferrer">
                  DoifyNow
                </a>
                <span className="footer-sep">·</span>
                <a href="mailto:bartosz.litwa@proton.me">bartosz.litwa@proton.me</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
