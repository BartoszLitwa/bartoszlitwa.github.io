import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CertificationCard from './CertificationCard';
import { Certification } from '../../types';
import certificationsData from '../../data/certifications.json';
import { useLanguage } from '../../hooks/useLanguage';
import './Certifications.css';

const Certifications: React.FC = () => {
  const { t } = useLanguage();
  const certifications = certificationsData as Certification[];

  return (
    <section className="certifications" aria-labelledby="certifications-heading">
      <Container>
        <header className="certifications-header">
          <h2 id="certifications-heading">{t('certifications.title')}</h2>
          <p>{t('certifications.description')}</p>
        </header>
        <Row className="certifications-grid" role="list">
          {certifications.map((certification) => (
            <Col md={6} key={certification.id} role="listitem">
              <CertificationCard certification={certification} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certifications;
