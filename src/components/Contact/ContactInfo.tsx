import React from 'react';
import './ContactInfo.css';

const ContactInfo: React.FC = () => {
  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'bartosz.litwa@proton.me',
      href: 'mailto:bartosz.litwa@proton.me',
      primary: true
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/bartoszlitwa',
      href: 'https://www.linkedin.com/in/bartoszlitwa/',
      primary: true
    },
    {
      icon: '📱',
      label: 'GitHub',
      value: 'github.com/BartoszLitwa',
      href: 'https://github.com/BartoszLitwa',
      primary: false
    },
    {
      icon: '🚀',
      label: 'RentifyNow',
      value: 'rentifynow.com',
      href: 'https://www.rentifynow.com',
      primary: false
    }
  ];

  const services = [
    { name: 'Full-Stack Development', description: '.NET, React, Angular' },
    { name: 'SaaS Product Development', description: 'From concept to launch' },
    { name: 'Cloud Architecture', description: 'Azure infrastructure & DevOps' },
    { name: 'Technical Consulting', description: 'Architecture reviews & optimization' }
  ];

  return (
    <div className="contact-info">
      <div className="contact-header">
        <span className="contact-badge">Open to Work</span>
        <h3>Let's Build Something Great</h3>
        <p className="contact-subtitle">
          Whether you need a full SaaS product, enterprise application, or technical guidance — 
          I bring 4+ years of experience shipping production-ready software.
        </p>
      </div>
      
      <div className="services-section">
        <h4>What I Can Help You With</h4>
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
        <h4>Engagement Models</h4>
        <ul>
          <li><strong>Full-time:</strong> Senior developer roles</li>
          <li><strong>Contract:</strong> 3-6 month engagements</li>
          <li><strong>Project:</strong> Fixed-scope deliverables</li>
          <li><strong>Consulting:</strong> Hourly technical guidance</li>
        </ul>
      </div>

      <div className="response-time">
        <strong>Response Time:</strong> Usually within 24 hours
      </div>
    </div>
  );
};

export default ContactInfo; 