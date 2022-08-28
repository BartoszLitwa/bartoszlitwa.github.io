import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ card }: {card: any}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={card.imgUrl}alt={card.title}/>
                <div className="proj-txtx">
                    <h4>{card.title}</h4>
                    <span>{card.description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard