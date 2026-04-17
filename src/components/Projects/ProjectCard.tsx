import React from 'react';
import './Projects.css';
import { ProjectCardProps } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';
import { resolveLocalizedField } from '../../utils/localization';

const ProjectCard = React.memo(({ card }: ProjectCardProps) => {
  const { t, language } = useLanguage();
  const title = resolveLocalizedField(card.title, language);
  const description = resolveLocalizedField(card.description, language);
  const metrics = card.metrics ? resolveLocalizedField(card.metrics, language) : undefined;

  const handleClick = () => {
    if (card.url) {
      window.open(card.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className="project-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${t('projects.aria.viewProject')} ${title}`}
    >
      <div
        className="project-card-image"
        style={{ backgroundImage: `url(${card.imgUrl})` }}
        role="img"
        aria-label={`${title} project screenshot`}
      />

      <div className="project-card-content">
        <h4 className="project-card-title">{title}</h4>

        <p className="project-card-description">{description}</p>

        {metrics && (
          <div className="project-metrics">
            <span className="metrics-label">{t('projects.impact')}</span>
            <span className="metrics-value">{metrics}</span>
          </div>
        )}

        <div className="project-card-tech">
          {card.type.split('|').map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
