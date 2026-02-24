import React from "react";
import { ListGroup } from "react-bootstrap";
import './Experience.css';
import { ExperienceCardProps } from '../../types';

const ExperienceCard = ({experience}: ExperienceCardProps) => {
    return (
        <article className="experienceCard-bx" aria-labelledby={`exp-title-${experience.company.replace(/\s+/g, '-').toLowerCase()}`}>
            <header className="experienceCard-header">
                <div className="experienceCard-company">
                    <img 
                        src={experience.companyLogo} 
                        alt={`${experience.company} logo`}
                        className="experienceCard-logo"
                        loading="lazy"
                    />
                    <div>
                        <h3 id={`exp-title-${experience.company.replace(/\s+/g, '-').toLowerCase()}`}>
                            {experience.title}
                        </h3>
                        <h4>
                            {experience.company} - {experience.city}
                        </h4>
                    </div>
                </div>
                <div className="experienceCard-period" aria-label={`Role timeline from ${experience.startDate} to ${experience.endDate}`}>
                    <span className="experienceCard-date">{experience.startDate}</span>
                    <span className="period-separator" aria-hidden="true">-</span>
                    <span className="experienceCard-date">{experience.endDate}</span>
                </div>
            </header>
            {experience.promotionPath && experience.promotionPath.length > 0 && (
                <div className="promotion-path" role="status" aria-label="Promotion progression">
                    <span className="promotion-label">{experience.promotionMonth || 'Annual'} promotions</span>
                    <div className="promotion-pills">
                        {experience.promotionPath.map((level, index) => (
                            <React.Fragment key={`${level}-${index}`}>
                                {index > 0 && <span className="promotion-arrow" aria-hidden="true">→</span>}
                                <span className="promotion-pill">{level}</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
            {experience.education && (
                <p className="education-badge" role="note" aria-label="Education">
                    {experience.education}
                </p>
            )}
            <ListGroup variant="flush" as="ul" aria-label={`Achievements at ${experience.company}`}>
                {experience.achievements.map((ach: string, index: number) => (
                    <ListGroup.Item key={`expIt-${index}-${ach.slice(0, 15)}`} className="achievement-bx" as="li" role="listitem">
                        {ach}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </article>
    )
}

export default ExperienceCard