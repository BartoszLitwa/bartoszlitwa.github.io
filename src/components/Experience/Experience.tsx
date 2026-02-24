import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Experience.css'
import ExperienceCard from "./ExperienceCard";
import { Experience as ExperienceType } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';
import experienceData from '../../data/experience.json';

const Experience = () => {
    const { t } = useLanguage();
    const experiences: ExperienceType[] = experienceData.map(exp => ({
        ...exp,
        companyLogo: require(`../../assets/${exp.companyLogo}`)
    }));

    const generateCards = () => {
        return experiences.map((exp, index) => {
            return (
                <ExperienceCard key={`exp-${index}-${exp.title}`} experience={exp}/>
            )
        })
    }

    return (
        <section className="experience" id="experience" aria-labelledby="experience-heading">
            <Container>
                <Row>
                    <Col>
                        <div className="experience-bx">
                            <h2 id="experience-heading">
                                {t('experience.title')}
                            </h2>
                            {
                                generateCards()
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )   
}

export default Experience