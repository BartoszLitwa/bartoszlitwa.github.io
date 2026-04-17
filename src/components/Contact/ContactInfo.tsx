import React from 'react';
import './ContactInfo.css';
import { useLanguage } from '../../hooks/useLanguage';

const ContactInfo: React.FC = () => {
  const { t } = useLanguage();
  const contactMethods = [
    {
      icon: '📧',
      label: t('contact.info.methods.email'),
      value: 'bartosz.litwa@proton.me',
      href: 'mailto:bartosz.litwa@proton.me',
      primary: true
    },
    {
      icon: '💼',
      label: t('contact.info.methods.linkedin'),
      value: 'linkedin.com/in/bartoszlitwa',
      href: 'https://www.linkedin.com/in/bartoszlitwa/',
      primary: true
    },
    {
      icon: '📱',
      label: t('contact.info.methods.github'),
      value: 'github.com/BartoszLitwa',
      href: 'https://github.com/BartoszLitwa',
      primary: false
    },
    {
      icon: '🚀',
      label: t('contact.info.methods.rentify'),
      value: 'rentifynow.com',
      href: 'https://www.rentifynow.com',
      primary: false
    }
  ];

  const services = [
    {
      name: t('contact.info.services.fullstack.name'),
      description: t('contact.info.services.fullstack.description')
    },
    {
      name: t('contact.info.services.saas.name'),
      description: t('contact.info.services.saas.description')
    },
    {
      name: t('contact.info.services.cloud.name'),
      description: t('contact.info.services.cloud.description')
    },
    {
      name: t('contact.info.services.consulting.name'),
      description: t('contact.info.services.consulting.description')
    }
  ];

  return (
    <div className="contact-info">
      <div className="contact-header">
        <span className="contact-badge">{t('contact.info.openToWork')}</span>
        <h3>{t('contact.subtitle')}</h3>
        <p className="contact-subtitle">{t('contact.description')}</p>
      </div>

      <div className="services-section">
        <h4>{t('contact.info.servicesTitle')}</h4>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-name">{service.name}</div>
              <div className="service-desc">{service.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-methods">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.href}
            className={`contact-method ${method.primary ? 'primary' : ''}`}
            target={method.href.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            aria-label={`Contact via ${method.label}`}
          >
            <span className="contact-icon">{method.icon}</span>
            <div className="contact-details">
              <div className="contact-label">{method.label}</div>
              <div className="contact-value">{method.value}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="availability">
        <h4>{t('contact.info.availability')}</h4>
        <ul>
          <li>{t('contact.info.opportunities.0')}</li>
          <li>{t('contact.info.opportunities.1')}</li>
          <li>{t('contact.info.opportunities.2')}</li>
          <li>{t('contact.info.opportunities.3')}</li>
        </ul>
      </div>

      <div className="response-time">
        <strong>{t('contact.info.responseTime')}</strong> {t('contact.info.responseTimeValue')}
      </div>
    </div>
  );
};

export default ContactInfo;
