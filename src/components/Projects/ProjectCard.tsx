import React, { useState } from 'react';
import { CodeSlash } from 'react-bootstrap-icons';
import './Projects.css';
import { ProjectCardProps } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';
import { resolveLocalizedField } from '../../utils/localization';

const ProjectCard = React.memo(({ card }: ProjectCardProps) => {
  const { t, language } = useLanguage();
  const title = resolveLocalizedField(card.title, language);
  const description = resolveLocalizedField(card.description, language);
  const metrics = card.metrics ? resolveLocalizedField(card.metrics, language) : undefined;
  const [failedImageUrl, setFailedImageUrl] = useState<string | null>(null);
  const imageAvailable = Boolean(card.imgUrl) && failedImageUrl !== card.imgUrl;

  return (
    <a
      className="project-card"
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t('projects.aria.viewProject')} ${title}`}
    >
      <div className="project-card-media">
        {imageAvailable ? (
          <img
            className="project-card-image"
            src={card.imgUrl}
            alt={`${title} ${t('projects.aria.imageAlt')}`}
            loading="lazy"
            onError={() => setFailedImageUrl(card.imgUrl)}
          />
        ) : (
          <div
            className="project-card-image-fallback"
            role="img"
            aria-label={`${t('projects.aria.imageFallback')}: ${title}`}
          >
            <CodeSlash size={42} aria-hidden="true" />
            <span>{title}</span>
          </div>
        )}
      </div>

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
