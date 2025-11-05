import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import './Experience.css';
import { ExperienceCardProps } from '../../types';

const ExperienceCard = ({experience}: ExperienceCardProps) => {
    return (
        <Container>
            <article className="experienceCard-bx" aria-labelledby={`exp-title-${experience.company.replace(/\s+/g, '-').toLowerCase()}`}>
                <Row>
                    <Col md={1} xs={2}>
                        <Row>
                            <img 
                                src={experience.companyLogo} 
                                alt={`${experience.company} logo`}
                                loading="lazy"
                            />
                        </Row>
                        <Row className="h-100">
                            <div className="d-flex flex-column justify-content-between align-items-center">
                                <div className="experienceCard-date mt-4" aria-label={`End date: ${experience.endDate}`}>
                                    {experience.endDate}
                                </div>
                                <div className="verticalLine" aria-hidden="true"></div>
                                <div className="experienceCard-date mb-5" aria-label={`Start date: ${experience.startDate}`}>
                                    {experience.startDate}
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h3 className="d-flex justify-content-start ml-5" id={`exp-title-${experience.company.replace(/\s+/g, '-').toLowerCase()}`}>
                                {experience.title}
                            </h3>
                        </Row>
                        <Row>
                            <h4 className="d-flex justify-content-start pl-5">
                                {experience.company} - {experience.city}
                            </h4>
                        </Row>
                        {experience.education && (
                            <Row>
                                <p className="d-flex justify-content-start pl-5 education-badge" role="note" aria-label="Education">
                                    🎓 {experience.education}
                                </p>
                            </Row>
                        )}
                        <Row>
                            <ListGroup variant="flush" as="ul" aria-label={`Achievements at ${experience.company}`}>
                            {
                                experience.achievements.map((ach: string, index: number) => {
                                    return (
                                        <ListGroup.Item key={`expIt-${index}-${ach.slice(0, 15)}`} className="achievement-bx d-flex justify-content-start" as="li" role="listitem">
                                            {ach}
                                        </ListGroup.Item>
                                    )
                                })
                            }
                            </ListGroup>
                        </Row>
                    </Col>
                </Row>
            </article>
        </Container>
    )
}

export default ExperienceCard