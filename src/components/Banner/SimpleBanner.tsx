import { Container } from 'react-bootstrap';
import { ArrowDown, Download } from 'react-bootstrap-icons';
import { useLanguage } from '../../hooks/useLanguage';
import './SimpleBanner.css';

const SimpleBanner = () => {
  const { t, get } = useLanguage();
  const outcomes = get<string[]>('hero.outcomes', []);

  return (
    <section className="simple-banner" id="home" aria-labelledby="hero-heading">
      <Container className="hero-layout">
        <div className="hero-content">
          <p className="hero-intro">{t('hero.badge')}</p>
          <h1 className="hero-name" id="hero-heading">
            {t('hero.greeting')}
            <br />
            Bartosz Litwa
          </h1>
          <p className="hero-title">{t('hero.role')}</p>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-actions">
            <a className="btn-modern btn-primary" href="#ecosystem">
              <span>{t('hero.cta.viewCompany')}</span>
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className="btn-modern btn-outline" href="/Bartosz_Litwa_CV.pdf" download>
              <Download size={18} aria-hidden="true" />
              <span>{t('hero.cta.downloadCv')}</span>
            </a>
          </div>
        </div>
        <aside className="delivery-summary" aria-labelledby="delivery-heading">
          <h2 id="delivery-heading">{t('hero.proofHeading')}</h2>
          <ul className="delivery-outcomes">
            {outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
          <div className="delivery-flow" aria-label={t('hero.proofFlowAria')}>
            <span>{t('hero.proofFlow.product')}</span>
            <span aria-hidden="true">/</span>
            <span>{t('hero.proofFlow.architecture')}</span>
            <span aria-hidden="true">/</span>
            <span>{t('hero.proofFlow.production')}</span>
          </div>
        </aside>
      </Container>
    </section>
  );
};

export default SimpleBanner;
