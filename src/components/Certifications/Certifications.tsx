import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollAnimation, useStaggeredScrollAnimation } from '../../hooks/useScrollAnimation';
import CertificationCard from './CertificationCard';
import { Certification } from '../../types';
import certificationsData from '../../data/certifications.json';
import './Certifications.css';

const Certifications: React.FC = () => {
  const { t } = useLanguage();
  // Type assertion to ensure data matches our Certification interface
  const certifications: Certification[] = certificationsData as Certification[];
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: certsRef, visibleItems } = useStaggeredScrollAnimation(certifications.length, { threshold: 0.1 });

  // Group certifications by status
  const completedCerts = certifications.filter(cert => cert.status === 'completed');
  const inProgressCerts = certifications.filter(cert => cert.status === 'in-progress');

  return (
    <section className="certifications" id="certifications" aria-labelledby="certifications-heading">
      <Container>
        <Row>
          <Col>
            <div 
              ref={headerRef as React.RefObject<HTMLDivElement>}
              className={`certifications-header scroll-animate ${headerVisible ? 'animate-in' : ''}`}
            >
              <h2 className="section-title" id="certifications-heading">{t('certifications.title')}</h2>
              <p className="section-description">
                {t('certifications.description')}
              </p>
            </div>

            <div 
              ref={certsRef as React.RefObject<HTMLDivElement>}
              className="certifications-content"
            >
              {/* Completed Certifications */}
              {completedCerts.length > 0 && (
                <div className="certification-group">
                  <h3 className="group-title">
                    <span className="status-icon completed">✓</span>
                    {t('certifications.status.completed')}
                  </h3>
                  <Row className="g-4">
                    {completedCerts.map((cert, index) => (
                      <Col key={cert.id} lg={6} xl={4}>
                        <div 
                          className={`certification-item scroll-animate ${visibleItems[index] ? 'animate-in' : ''}`}
                          style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                          <CertificationCard certification={cert} />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}

              {/* In Progress Certifications */}
              {inProgressCerts.length > 0 && (
                <div className="certification-group">
                  <h3 className="group-title">
                    <span className="status-icon in-progress">⏳</span>
                    {t('certifications.status.inProgress')}
                  </h3>
                  <Row className="g-4">
                    {inProgressCerts.map((cert, index) => (
                      <Col key={cert.id} lg={6} xl={4}>
                        <div 
                          className={`certification-item scroll-animate ${visibleItems[completedCerts.length + index] ? 'animate-in' : ''}`}
                          style={{ transitionDelay: `${(completedCerts.length + index) * 0.1}s` }}
                        >
                          <CertificationCard certification={cert} />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Certifications; 