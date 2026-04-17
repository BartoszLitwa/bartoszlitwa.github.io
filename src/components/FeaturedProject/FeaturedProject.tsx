import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  ArrowRightCircle,
  CheckCircle,
  CodeSlash,
  CreditCard,
  Cloud,
  Display,
  HouseDoor,
  Bullseye,
  Gear,
  Rocket
} from 'react-bootstrap-icons';
import './FeaturedProject.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../hooks/useLanguage';

const FeaturedProject = () => {
  const { t, get } = useLanguage();
  const hireMeUrl = 'https://www.linkedin.com/in/bartoszlitwa/';
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

  const technologies = get<string[]>('featured.technologies', [
    '.NET 10',
    'Azure Cloud',
    'Tauri',
    'Angular',
    'TypeScript',
    'Microservices',
    'Stripe API',
    'PostgreSQL'
  ]);

  const highlights = get<string[]>('featured.highlights', [
    'Distributed microservices architecture hosted on Azure Cloud',
    'Cross-platform support: Web application alongside Desktop and Mobile (via Tauri)',
    'Advanced payment and subscription processing using Stripe',
    'Multi-tenant data isolation and role-based access control',
    'Real-time notifications and dashboard updates',
    'Automated CI/CD pipelines ensuring zero-downtime deployments'
  ]);

  const ecosystemProducts = [
    {
      icon: HouseDoor,
      name: 'HouseifyNow',
      desc: t('featured.ecosystem.houseifyDesc'),
      url: 'https://www.houseifynow.com',
      tech: ['Angular', '.NET 10', 'Tauri', 'PostgreSQL']
    },
    {
      icon: Gear,
      name: 'DoifyNow',
      desc: t('featured.ecosystem.doifyDesc'),
      url: 'https://www.doifynow.com',
      tech: ['Angular', 'PostgreSQL', 'Redis', 'Grafana']
    },
    {
      icon: Bullseye,
      name: 'GoalifyNow',
      desc: t('featured.ecosystem.goalifyDesc'),
      url: 'https://www.goalifynow.com',
      tech: ['Angular 21', '.NET 10', 'PrimeNG', 'Tauri']
    },
    {
      icon: Rocket,
      name: 'DeployifyNow',
      desc: t('featured.ecosystem.deployifyDesc'),
      url: 'https://www.deployifynow.com',
      tech: ['.NET 10', 'SignalR', 'Docker', 'Dokploy']
    }
  ];

  const businessValue = [
    {
      icon: Cloud,
      title: t('featured.businessValue.cloud.title'),
      desc: t('featured.businessValue.cloud.description')
    },
    {
      icon: Display,
      title: t('featured.businessValue.crossPlatform.title'),
      desc: t('featured.businessValue.crossPlatform.description')
    },
    {
      icon: CreditCard,
      title: t('featured.businessValue.billing.title'),
      desc: t('featured.businessValue.billing.description')
    },
    {
      icon: CodeSlash,
      title: t('featured.businessValue.saas.title'),
      desc: t('featured.businessValue.saas.description')
    }
  ];

  return (
    <section
      className="featured-project"
      id="featured-project"
      aria-labelledby="featured-project-heading"
    >
      <div className="featured-background-glow"></div>
      <Container className="position-relative z-1">
        <Row className="justify-content-center">
          <Col lg={10}>
            <div
              ref={headerRef as React.RefObject<HTMLDivElement>}
              className={`featured-header scroll-animate ${headerVisible ? 'animate-in' : ''}`}
            >
              <div className="featured-badge-wrapper text-center">
                <span className="featured-badge">{t('featured.badge')}</span>
                <span className="featured-badge secondary">{t('featured.secondaryBadge')}</span>
              </div>
              <h2 className="featured-title text-center" id="featured-project-heading">
                RentifyNow
              </h2>
              <p className="featured-subtitle text-center">{t('featured.subtitle')}</p>
              <p className="featured-tagline text-center">{t('featured.description')}</p>

              <div className="featured-status-wrapper text-center mt-4">
                <div className="featured-status glass-panel">
                  <span className="status-indicator live"></span>
                  <span className="status-text text-white">{t('featured.statusLive')}</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className={`featured-content scroll-animate ${contentVisible ? 'animate-in' : ''}`}
        >
          {/* Value Proposition Cards */}
          <div className="value-props mb-5 mt-5">
            {businessValue.map((item, index) => (
              <div key={index} className="value-card glass-panel">
                <item.icon className="value-icon" size={32} />
                <h4 className="value-title mt-3">{item.title}</h4>
                <p className="value-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass-card featured-main-card">
            <Row className="g-0 align-items-center">
              <Col lg={6} className="featured-image-col">
                <div className="multi-device-showcase">
                  <div className="desktop-mockup glass-panel">
                    <div className="screen-header">
                      <div className="dot red"></div>
                      <div className="dot yellow"></div>
                      <div className="dot green"></div>
                    </div>
                    <div className="screen-body">
                      <div className="skeleton-dash-sidebar"></div>
                      <div className="skeleton-dash-main">
                        <div className="skeleton-dash-nav"></div>
                        <div className="skeleton-dash-cards">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <div className="skeleton-dash-chart"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-mockup glass-panel">
                    <div className="mobile-notch"></div>
                    <div className="skeleton-mobile-nav"></div>
                    <div className="skeleton-mobile-list">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="mockup-floating-badge text-center">
                    <strong>{t('featured.mockup.primary')}</strong>
                    <br />
                    {t('featured.mockup.secondary')}
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="featured-details">
                  <div className="ownership-badge">
                    <span>{t('featured.ownershipBadge')}</span>
                  </div>
                  <p className="featured-description">{t('featured.longDescription')}</p>

                  <div className="featured-section mt-4">
                    <h3 className="section-heading mb-3">{t('featured.technicalStack')}</h3>
                    <div className="tech-stack">
                      {technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="featured-actions mt-5 d-flex gap-3">
                    <a
                      href={hireMeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-modern btn-primary glow-btn"
                    >
                      <span>{t('featured.buttons.moreProjects')}</span>
                      <ArrowRightCircle size={20} className="ms-2" />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <Row className="mt-5 g-4">
            <Col lg={12}>
              <div className="glass-panel features-grid-panel">
                <h3 className="features-title text-center mb-5">{t('featured.keyFeatures')}</h3>
                <Row className="g-4">
                  {highlights.map((highlight, index) => (
                    <Col md={6} key={index}>
                      <div className="feature-item p-3 glass-panel">
                        <div className="feature-icon-wrapper">
                          <CheckCircle className="check-icon" size={24} />
                        </div>
                        <span className="feature-text">{highlight}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>

          <div className="featured-metrics mt-5">
            <div className="metric-card glass-panel highlight-metric">
              <div className="metric-value">{t('featured.metrics.multiTenant')}</div>
              <div className="metric-label">{t('featured.metrics.security')}</div>
            </div>
            <div className="metric-card glass-panel">
              <div className="metric-value">{t('featured.metrics.realTime')}</div>
              <div className="metric-label">{t('featured.metrics.updates')}</div>
            </div>
            <div className="metric-card glass-panel">
              <div className="metric-value">{t('featured.metrics.azure')}</div>
              <div className="metric-label">{t('featured.metrics.cloud')}</div>
            </div>
            <div className="metric-card glass-panel">
              <div className="metric-value">{t('featured.metrics.enterprise')}</div>
              <div className="metric-label">{t('featured.metrics.architecture')}</div>
            </div>
          </div>

          <div className="cta-banner glass-card mt-5">
            <div className="cta-content">
              <h3>{t('featured.ctaTitle')}</h3>
              <p className="mt-2 text-white-50">{t('featured.ctaDescription')}</p>
            </div>
            <a
              href={hireMeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modern btn-outline-glass"
            >
              <span>{t('featured.ctaButton')}</span>
              <ArrowRightCircle size={20} className="ms-2" />
            </a>
          </div>

          <div className="ecosystem-section mt-5">
            <h3 className="features-title text-center mb-4">{t('featured.ecosystemTitle')}</h3>
            <p
              className="text-center text-white-50 mb-5"
              style={{ maxWidth: '700px', margin: '0 auto 2rem' }}
            >
              {t('featured.ecosystemDescription')}
            </p>
            <Row className="g-4 justify-content-center">
              {ecosystemProducts.map((product, index) => (
                <Col md={4} key={index}>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ecosystem-card glass-panel d-block text-decoration-none"
                  >
                    <product.icon className="value-icon mb-3" size={28} />
                    <h4 className="value-title">{product.name}</h4>
                    <p className="value-desc">{product.desc}</p>
                    <div className="tech-stack mt-3">
                      {product.tech.map((t, i) => (
                        <span key={i} className="tech-badge" style={{ fontSize: '0.7rem' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </a>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProject;
