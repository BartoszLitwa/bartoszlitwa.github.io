import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { CertificationCardProps } from '../../types';
import './Certifications.css';

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  const { language, t } = useLanguage();
  const [failedBadgeUrl, setFailedBadgeUrl] = useState<string | null>(null);
  const badgeAvailable =
    Boolean(certification.badgeUrl) && failedBadgeUrl !== certification.badgeUrl;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'pl' ? 'pl-PL' : 'en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Fundamentals':
        return '#166534';
      case 'Associate':
        return '#1d4ed8';
      case 'Expert':
        return '#6d28d9';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="certification-card">
      <div className="certification-header">
        <div className="certification-badge">
          {badgeAvailable ? (
            <img
              src={certification.badgeUrl}
              alt={`${certification.name} ${t('certifications.aria.badgeAlt')}`}
              className="badge-image"
              loading="lazy"
              onError={() => setFailedBadgeUrl(certification.badgeUrl)}
            />
          ) : (
            <div
              className="badge-image badge-image-fallback"
              role="img"
              aria-label={`${t('certifications.aria.badgeFallback')}: ${certification.name}`}
            >
              {certification.code}
            </div>
          )}
          <div className="badge-overlay">
            <span className="certification-code">{certification.code}</span>
          </div>
        </div>

        <div className="certification-status">
          <span
            className={`status-badge ${certification.status}`}
            style={{
              backgroundColor: certification.status === 'completed' ? '#047857' : '#92400e'
            }}
          >
            {certification.status === 'completed'
              ? t('certifications.status.completed')
              : t('certifications.status.inProgress')}
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
              <div className="progress-fill" style={{ width: `${certification.progress}%` }} />
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
              +{certification.skills.length - 3} {t('certifications.moreSkills')}
            </span>
          )}
        </div>
      </div>

      <div className="certification-footer">
        {certification.credentialUrl && certification.credentialUrl !== '#' && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="credential-btn"
            aria-label={`${t('certifications.aria.viewCredential')} ${certification.name}`}
          >
            {t('certifications.viewCredential')}
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;
