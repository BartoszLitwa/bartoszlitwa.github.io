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

  return (
    <a
      className="project-card"
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
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
    </a>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
