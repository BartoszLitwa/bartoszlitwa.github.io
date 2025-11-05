import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { CertificationCardProps } from '../../types';
import './Certifications.css';

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  const { t } = useLanguage();

  const handleCredentialClick = () => {
    if (certification.credentialUrl && certification.credentialUrl !== '#') {
      window.open(certification.credentialUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Fundamentals': return '#4ade80';
      case 'Associate': return '#3b82f6';
      case 'Expert': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  return (
    <div className="certification-card">
      <div className="certification-header">
        <div className="certification-badge">
          <img 
            src={certification.badgeUrl} 
            alt={`${certification.name} badge`}
            className="badge-image"
            loading="lazy"
          />
          <div className="badge-overlay">
            <span className="certification-code">{certification.code}</span>
          </div>
        </div>
        
        <div className="certification-status">
          <span 
            className={`status-badge ${certification.status}`}
            style={{ 
              backgroundColor: certification.status === 'completed' ? '#10b981' : '#f59e0b' 
            }}
          >
            {certification.status === 'completed' 
              ? t('certifications.status.completed')
              : t('certifications.status.inProgress')
            }
          </span>
          <span 
            className="level-badge"
            style={{ backgroundColor: getLevelColor(certification.level) }}
          >
            {t(`certifications.levels.${certification.level.toLowerCase()}`)}
          </span>
        </div>
      </div>

      <div className="certification-content">
        <h4 className="certification-name">{certification.name}</h4>
        <p className="certification-provider">{certification.provider}</p>
        <p className="certification-description">{certification.description}</p>

        {certification.status === 'in-progress' && certification.progress && (
          <div className="progress-section">
            <div className="progress-header">
              <span className="progress-label">{t('certifications.progress')}</span>
              <span className="progress-value">{certification.progress}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${certification.progress}%` }}
              />
            </div>
            {certification.expectedDate && (
              <p className="expected-date">
                {t('certifications.status.expected')}: {formatDate(certification.expectedDate)}
              </p>
            )}
          </div>
        )}

        {certification.completedDate && (
          <p className="completion-date">
            {t('certifications.status.completed')}: {formatDate(certification.completedDate)}
          </p>
        )}

        <div className="certification-skills">
          {certification.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
          {certification.skills.length > 3 && (
            <span className="skill-tag more">
              +{certification.skills.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="certification-footer">
        {certification.credentialUrl && certification.credentialUrl !== '#' && (
          <button 
            className="credential-btn"
            onClick={handleCredentialClick}
            aria-label={`View ${certification.name} credential`}
          >
            {t('certifications.viewCredential')}
          </button>
        )}
      </div>
    </div>
  );
};

export default CertificationCard; 