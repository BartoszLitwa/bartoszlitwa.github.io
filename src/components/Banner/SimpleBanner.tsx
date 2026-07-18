import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowDown, ArrowRight, CheckCircle, CodeSlash, RocketTakeoff, Layers, Download } from 'react-bootstrap-icons';
import { useLanguage } from '../../hooks/useLanguage';
import './SimpleBanner.css';

const SimpleBanner = () => {
  const { t, get } = useLanguage();
  const hireMeUrl = 'https://www.linkedin.com/in/bartoszlitwa/';
  const outcomes = get<string[]>('hero.outcomes', [
    '4+ years delivering production software',
    '90% Azure Cosmos DB cost reduction',
    '4 Microsoft Azure certifications'
  ]);

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
                {t('hero.role')}
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
                  <span>{t('hero.cta.viewWork')}</span>
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
              <a className="hero-scroll-cue" href="#featured-project">
                <ArrowDown size={16} aria-hidden="true" />
                {t('hero.scrollCue')}
              </a>
            </div>
          </Col>

          <Col
            lg={5}
            md={12}
            className="d-none d-lg-flex hero-visual-col position-relative justify-content-center"
          >
            <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="delivery-card glass-panel">
                <div className="delivery-card-kicker">{t('hero.proofTitle')}</div>
                <h3>{t('hero.proofHeading')}</h3>
                <div className="delivery-outcomes">
                  {outcomes.map((outcome) => (
                    <div className="delivery-outcome" key={outcome}>
                      <CheckCircle size={18} aria-hidden="true" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
                <div className="delivery-flow" aria-label={t('hero.proofFlowAria')}>
                  <span>Product</span><ArrowRight aria-hidden="true" />
                  <span>Architecture</span><ArrowRight aria-hidden="true" />
                  <span>Production</span>
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
