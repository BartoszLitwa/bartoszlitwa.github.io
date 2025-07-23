import React from "react";
import { Col } from "react-bootstrap";
import './Projects.css';
import { ProjectCardProps } from '../../types';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProjectCard = React.memo(({ card }: ProjectCardProps) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
    
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
        <Col sm={6} md={4} className="mb-4">
            <div 
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`project-card scroll-animate ${isVisible ? 'animate-in' : ''}`}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="button"
                aria-label={`View ${card.title} project`}
            >
                <div 
                    className="project-card-image"
                    style={{ backgroundImage: `url(${card.imgUrl})` }}
                    role="img"
                    aria-label={`${card.title} project screenshot`}
                />
                
                <div className="project-card-content">
                    <h4 className="project-card-title">{card.title}</h4>
                    
                    <p className="project-card-description">
                        {card.description}
                    </p>
                    
                    {card.metrics && (
                        <div className="project-metrics">
                            <span className="metrics-label">Impact:</span>
                            <span className="metrics-value">{card.metrics}</span>
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
        </Col>
    )
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard