import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './Experience.css';
import { ExperienceCardProps } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';
import { resolveLocalizedField } from '../../utils/localization';

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { language } = useLanguage();
  const title = resolveLocalizedField(experience.title, language);
  const company = resolveLocalizedField(experience.company, language);
  const city = resolveLocalizedField(experience.city, language);
  const achievements = resolveLocalizedField(experience.achievements, language);
  const promotionPath = experience.promotionPath
    ? resolveLocalizedField(experience.promotionPath, language)
    : undefined;
  const promotionMonth = experience.promotionMonth
    ? resolveLocalizedField(experience.promotionMonth, language)
    : undefined;
  const education = experience.education
    ? resolveLocalizedField(experience.education, language)
    : undefined;

  return (
    <article
      className="experienceCard-bx"
      aria-labelledby={`exp-title-${company.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <header className="experienceCard-header">
        <div className="experienceCard-company">
          <img
            src={experience.companyLogo}
            alt={`${company} logo`}
            className="experienceCard-logo"
            loading="lazy"
          />
          <div>
            <h3 id={`exp-title-${company.replace(/\s+/g, '-').toLowerCase()}`}>{title}</h3>
            <h4>
              {company} - {city}
            </h4>
          </div>
        </div>
        <div
          className="experienceCard-period"
          aria-label={`Role timeline from ${experience.startDate} to ${experience.endDate}`}
        >
          <span className="experienceCard-date">{experience.startDate}</span>
          <span className="period-separator" aria-hidden="true">
            -
          </span>
          <span className="experienceCard-date">{experience.endDate}</span>
        </div>
      </header>
      {promotionPath && promotionPath.length > 0 && (
        <div className="promotion-path" role="status" aria-label="Promotion progression">
          <span className="promotion-label">{promotionMonth || 'Annual'} promotions</span>
          <div className="promotion-pills">
            {promotionPath.map((level, index) => (
              <React.Fragment key={`${level}-${index}`}>
                {index > 0 && (
                  <span className="promotion-arrow" aria-hidden="true">
                    →
                  </span>
                )}
                <span className="promotion-pill">{level}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
      {education && (
        <p className="education-badge" role="note" aria-label="Education">
          {education}
        </p>
      )}
      <ListGroup variant="flush" as="ul" aria-label={`Achievements at ${company}`}>
        {achievements.map((ach: string, index: number) => (
          <ListGroup.Item
            key={`expIt-${index}-${ach.slice(0, 15)}`}
            className="achievement-bx"
            as="li"
            role="listitem"
          >
            {ach}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </article>
  );
};

export default ExperienceCard;
