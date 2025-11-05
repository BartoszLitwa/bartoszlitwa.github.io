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
      icon: '🌐',
      label: 'Website',
      value: 'litwa.dev',
      href: 'https://litwa.dev',
      primary: false
    }
  ];

  return (
    <div className="contact-info">
      <h3>Let's Connect!</h3>
      <p className="contact-subtitle">
        Ready to discuss your next project or opportunity? 
        I'm always open to new challenges and collaborations.
      </p>
      
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
        <h4>🕒 Availability</h4>
        <p>Available for:</p>
        <ul>
          <li>Full-time opportunities</li>
          <li>Consulting projects</li>
          <li>Technical discussions</li>
          <li>Mentoring sessions</li>
        </ul>
      </div>

      <div className="response-time">
        <strong>⚡ Response Time:</strong> Usually within 24 hours
      </div>
    </div>
  );
};

export default ContactInfo; 