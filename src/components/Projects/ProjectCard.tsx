import React from "react";
import { Col } from "react-bootstrap";
import './Projects.css';
import { ProjectCardProps } from '../../types';

const ProjectCard = React.memo(({ card }: ProjectCardProps) => {
    const handleClick = () => window.open(card.url);

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx" onClick={handleClick}>
                <img 
                    src={card.imgUrl} 
                    alt={card.title} 
                    height={256} 
                    width={420}
                    loading="lazy"
                />
                <div className="proj-txtx">
                    <h4>{card.title}</h4>
                    <span>{card.description}</span>
                </div>
            </div>
        </Col>
    )
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard