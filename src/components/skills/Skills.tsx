import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillCard from "./SkillCard";
import { useLanguage } from '../../hooks/useLanguage';
import './Skills.css';
import skillsData from '../../data/skills.json';
import { SkillCategory } from '../../types';

const Skills = () => {
    const { t } = useLanguage();
    const categories: SkillCategory[] = skillsData.categories;

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>{t('skills.title')}</h2>
                            <p className="skill-description">{t('skills.description')}</p>
                            
                            <div className="skills-grid-modern">
                                {categories.map((category) => (
                                    <SkillCard 
                                        key={category.id} 
                                        category={category}
                                    />
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
