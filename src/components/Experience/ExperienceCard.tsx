import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import './Experience.css';
import { ExperienceCardProps } from '../../types';

const ExperienceCard = ({experience}: ExperienceCardProps) => {
    return (
        <Container>
            <div className="experienceCard-bx">
                <Row>
                    <Col md={1} xs={2}>
                        <Row>
                            <img src={experience.companyLogo} alt={experience.company}/>
                        </Row>
                        <Row className="h-100">
                            <div className="d-flex flex-column justify-content-between align-items-center">
                                <div className="experienceCard-date mt-4">
                                    {experience.endDate}
                                </div>
                                <div className="verticalLine"></div>
                                <div className="experienceCard-date mb-5">
                                    {experience.startDate}
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h3 className="d-flex justify-content-start ml-5">
                                {experience.title}
                            </h3>
                        </Row>
                        <Row>
                            <h6 className="d-flex justify-content-start pl-5">
                                {experience.company} - {experience.city}
                            </h6>
                        </Row>
                        <Row>
                            <ListGroup variant="flush" as="ul">
                            {
                                experience.achievements.map((ach: string, index: number) => {
                                    return (
                                        <ListGroup.Item key={`expIt-${index}-${ach.slice(0, 15)}`} className="achievement-bx d-flex justify-content-start" as="li">
                                            {ach}
                                        </ListGroup.Item>
                                    )
                                })
                            }
                            </ListGroup>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default ExperienceCard