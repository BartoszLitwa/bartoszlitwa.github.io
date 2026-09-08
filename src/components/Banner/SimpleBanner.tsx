import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowDown, CheckCircle, RocketTakeoff, Download } from 'react-bootstrap-icons';
import { useLanguage } from '../../hooks/useLanguage';
import './SimpleBanner.css';

const SimpleBanner = () => {
  const { t, get } = useLanguage();
  const outcomes = get<string[]>('hero.outcomes', [
    '4+ years delivering production software',
    '90% Azure Cosmos DB cost reduction',
    '4 Microsoft Azure certifications'
  ]);

  const handleCompanyClick = () => {
    const ecosystemSection = document.getElementById('ecosystem');
    if (ecosystemSection) {
      ecosystemSection.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    }
  };

  return (
    <section className="simple-banner align-items-center" id="home">
      <div className="banner-glow-orb orb-1"></div>
      <div className="banner-glow-orb orb-2"></div>
      <Container className="position-relative z-1 hero-container">
        <Row className="align-items-center hero-row">
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
                  onClick={handleCompanyClick}
                  type="button"
                >
                  <RocketTakeoff size={20} className="me-2" />
                  <span>{t('hero.cta.viewCompany')}</span>
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

              <a className="hero-scroll-cue" href="#ecosystem">
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
                  <span>{t('hero.proofFlow.product')}</span>
                  <span aria-hidden="true">/</span>
                  <span>{t('hero.proofFlow.architecture')}</span>
                  <span aria-hidden="true">/</span>
                  <span>{t('hero.proofFlow.production')}</span>
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
