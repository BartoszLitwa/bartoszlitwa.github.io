import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRight, CodeSlash, RocketTakeoff, Layers, Download } from 'react-bootstrap-icons';
import { useLanguage } from '../../hooks/useLanguage';
import './SimpleBanner.css';

const SimpleBanner = () => {
  const { t, get } = useLanguage();
  const hireMeUrl = 'https://www.linkedin.com/in/bartoszlitwa/';
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = useMemo(
    () =>
      get<string[]>('hero.roles', [
        'CEO & Founder of DoifyNow',
        'Senior .NET Architect',
        'Angular Expert',
        'Azure Cloud Architect'
      ]),
    [get]
  );
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);
  const period = 2000;

  const tick = useCallback(() => {
    const fullText = toRotate[index];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % toRotate.length);
      setDelta(200);
    }
  }, [index, isDeleting, text, toRotate, period]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [tick, delta]);

  const handleHireClick = () => {
    window.open(hireMeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleFeaturedClick = () => {
    const featuredSection = document.getElementById('featured-project');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="simple-banner align-items-center" id="home" role="banner">
      <div className="banner-glow-orb orb-1"></div>
      <div className="banner-glow-orb orb-2"></div>
      <Container className="position-relative z-1 hero-container">
        <Row className="align-items-center min-vh-100 hero-row">
          <Col lg={7} md={12} className="text-start hero-col">
            <div className="hero-content text-left">
              <div className="hero-badge animate-fade-up">
                <span className="badge-icon">{t('hero.badge')}</span>
              </div>
              <h1 className="hero-name animate-fade-up" style={{ animationDelay: '0.1s' }}>
                {t('hero.greeting')} <br className="d-block d-md-none" />
                <span className="text-accent-gradient">Bartosz Litwa</span>
              </h1>
              <h2
                className="hero-title text-left animate-fade-up"
                style={{ animationDelay: '0.2s', justifyContent: 'flex-start' }}
              >
                <span aria-live="polite" aria-label={`${t('hero.currentRoleAria')}: ${text}`}>
                  {text}
                </span>
                <span className="cursor" aria-hidden="true">
                  |
                </span>
              </h2>
              <p
                className="hero-description text-left animate-fade-up"
                style={{ animationDelay: '0.3s' }}
              >
                {t('hero.description')}
              </p>

              <div
                className="hero-actions text-left animate-fade-up flex-wrap"
                style={{ animationDelay: '0.4s', justifyContent: 'flex-start' }}
              >
                <button
                  className="btn-modern btn-primary glow-btn"
                  onClick={handleFeaturedClick}
                  type="button"
                >
                  <RocketTakeoff size={20} className="me-2" />
                  <span>{t('hero.cta.exploreEcosystem')}</span>
                </button>
                <button
                  className="btn-modern btn-secondary"
                  onClick={handleHireClick}
                  type="button"
                >
                  <span>{t('hero.cta.viewExperience')}</span>{' '}
                  <ArrowRight size={20} className="ms-2" />
                </button>
                <a
                  className="btn-modern btn-outline-glass"
                  href="/Bartosz_Litwa_CV.pdf"
                  download
                  aria-label={t('hero.cta.downloadCv')}
                >
                  <Download size={20} className="me-2" />
                  <span>{t('hero.cta.downloadCv')}</span>
                </a>
              </div>

              <div className="hero-tech-stack animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <span className="tech-stack-label">{t('hero.specializedIn')}</span>
                <div className="tech-stack-icons">
                  <span className="tech-item">
                    <CodeSlash size={16} /> {t('hero.tech.dotnet')}
                  </span>
                  <span className="tech-item">
                    <Layers size={16} /> {t('hero.tech.angular')}
                  </span>
                  <span className="tech-item">
                    <RocketTakeoff size={16} /> {t('hero.tech.azureDevops')}
                  </span>
                </div>
              </div>
            </div>
          </Col>

          <Col
            lg={5}
            md={12}
            className="d-none d-lg-flex hero-visual-col position-relative justify-content-center"
          >
            <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="glass-morphism-card hero-abstract-card">
                <div className="card-header-dots">
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <div className="abstract-code">
                  <div className="code-line w-75"></div>
                  <div className="code-line w-50 indent-1"></div>
                  <div className="code-line w-100 indent-2"></div>
                  <div className="code-line w-50 indent-2 accent-line"></div>
                  <div className="code-line w-75 indent-1"></div>
                  <div className="code-line w-25"></div>
                </div>
                <div className="floating-badge badge-1 glass-panel">
                  <RocketTakeoff size={18} className="me-2 text-accent" />{' '}
                  {t('hero.badges.microservices')}
                </div>
                <div className="floating-badge badge-2 glass-panel">
                  <Layers size={18} className="me-2 text-success" />{' '}
                  {t('hero.badges.saasArchitecture')}
                </div>
                <div className="floating-badge badge-3 glass-panel">
                  <CodeSlash size={18} className="me-2 text-info" /> {t('hero.badges.fullStack')}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SimpleBanner;
