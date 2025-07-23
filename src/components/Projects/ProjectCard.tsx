import React from "react";
import { Col } from "react-bootstrap";
import './Projects.css';
import { ProjectCardProps } from '../../types';

const ProjectCard = React.memo(({ card }: ProjectCardProps) => {
    const handleClick = () => window.open(card.url);

    return (
        <Col sm={6} md={4} className="mb-4">
            <div className="project-card" onClick={handleClick}>
                <div className="project-image">
                    <img 
                        src={card.imgUrl} 
                        alt={card.title} 
                        loading="lazy"
                    />
                </div>
                <div className="project-content">
                    <h4 className="project-title">{card.title}</h4>
                    <p className="project-description">{card.description}</p>
                    {card.metrics && (
                        <div className="project-metrics">
                            {card.metrics}
                        </div>
                    )}
                    <div className="project-tech">
                        {card.type.split('|').map((tech, index) => (
                            <span key={index} className="tech-badge">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Col>
    )
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard