import React from 'react';
import { ArrowUpRight, CheckCircle, Diagram3, Stars } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';
import productsData from '../../data/products.json';
import { useLanguage } from '../../hooks/useLanguage';
import type { Product, ProductStage } from '../../types';
import { resolveLocalizedField } from '../../utils/localization';
import './CompanyEcosystem.css';

const products = productsData as Product[];

const CompanyEcosystem = () => {
  const { language, t } = useLanguage();
  const [company, ...productFamily] = products;

  const stageLabel = (stage: ProductStage) => t(`ecosystem.stages.${stage}`);

  return (
    <section className="ecosystem" id="ecosystem" aria-labelledby="ecosystem-heading">
      <div className="ecosystem-glow ecosystem-glow-primary" aria-hidden="true" />
      <div className="ecosystem-glow ecosystem-glow-secondary" aria-hidden="true" />
      <Container>
        <header className="ecosystem-header">
          <div className="ecosystem-kicker">
            <Stars aria-hidden="true" />
            <span>{t('ecosystem.kicker')}</span>
          </div>
          <h2 id="ecosystem-heading">{t('ecosystem.title')}</h2>
          <p>{t('ecosystem.description')}</p>
        </header>

        <article
          className="company-card glass-panel"
          data-product-id={company.id}
          data-stage={company.stage}
          aria-labelledby={`${company.id}-title`}
        >
          <div className="company-card-copy">
            <div className="company-card-meta">
              <span className="company-label">{t('ecosystem.companyLabel')}</span>
              <span className="stage-pill" data-stage={company.stage}>
                <span className="stage-dot" aria-hidden="true" />
                {stageLabel(company.stage)}
              </span>
            </div>
            <h3 id={`${company.id}-title`}>{company.name}</h3>
            <p className="company-role">{resolveLocalizedField(company.role, language)}</p>
            <p className="company-description">
              {resolveLocalizedField(company.description, language)}
            </p>
            <div className="company-tags" aria-label={t('ecosystem.aria.companyThemes')}>
              {resolveLocalizedField(company.tags, language).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="company-system" aria-label={t('ecosystem.aria.operatingModel')}>
            <div className="company-system-core">
              <Diagram3 size={28} aria-hidden="true" />
              <strong>DoifyNow</strong>
              <span>{t('ecosystem.system.core')}</span>
            </div>
            <div className="company-system-orbit" aria-hidden="true">
              {productFamily.map((product, index) => (
                <span key={product.id} style={{ '--orbit-index': index } as React.CSSProperties} />
              ))}
            </div>
            <div className="company-system-caption">
              <CheckCircle aria-hidden="true" />
              <span>{t('ecosystem.system.caption')}</span>
            </div>
          </div>
        </article>

        <div className="ecosystem-groups" aria-label={t('ecosystem.aria.productFamily')}>
          <div className="ecosystem-group-heading">
            <span>{t('ecosystem.productsLabel')}</span>
            <p>{t('ecosystem.productsDescription')}</p>
          </div>

          <div className="product-grid">
            {productFamily.map((product, index) => {
              const titleId = `${product.id}-title`;
              const role = resolveLocalizedField(product.role, language);
              const description = resolveLocalizedField(product.description, language);
              const tags = resolveLocalizedField(product.tags, language);

              return (
                <article
                  key={product.id}
                  className="product-card glass-panel"
                  data-product-id={product.id}
                  data-stage={product.stage}
                  aria-labelledby={titleId}
                >
                  <div className="product-card-topline">
                    <span className="product-index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="stage-pill" data-stage={product.stage}>
                      <span className="stage-dot" aria-hidden="true" />
                      {stageLabel(product.stage)}
                    </span>
                  </div>
                  <h3 id={titleId}>{product.name}</h3>
                  <p className="product-role">{role}</p>
                  <p className="product-description">{description}</p>
                  <div className="product-tags" aria-label={t('ecosystem.aria.productThemes')}>
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="product-card-footer">
                    {product.url ? (
                      <a href={product.url} target="_blank" rel="noopener noreferrer">
                        {t('ecosystem.verifiedLink')}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="development-note">
                        <span aria-hidden="true" />
                        {t('ecosystem.developmentNote')}
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyEcosystem;
