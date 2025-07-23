import React, { useLayoutEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SkillCircle from "./SkillCircle";
import './Skills.css'
import skillsData from '../../data/skills.json';
import { Skill } from '../../types';

const Skills = () => {
    const technologies: Skill[] = skillsData.technologies.map(tech => ({
        ...tech,
        images: tech.images.map(img => 
            img.startsWith('http') ? img : require(`../../assets/${img}`)
        )
    }));

    const programs: Skill[] = skillsData.programs.map(prog => ({
        ...prog,
        images: prog.images.map(img => 
            img.startsWith('http') ? img : require(`../../assets/${img}`)
        )
    }));

    const [isMobile, setIsMobile] = useState(false);
    const mobileSize = 768;

    useLayoutEffect(() => {
        setIsMobile(window.innerWidth < mobileSize);

        const handleResize = () => {
            setIsMobile(window.innerWidth < mobileSize);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Here are the technologies and tools I work with to create amazing digital experiences.</p>
                            
                            <h3>Technologies</h3>
                            <div className="skills-grid">
                                {technologies.map((tech, index) => (
                                    <SkillCircle 
                                        key={`tech-${tech.text.join('-')}`} 
                                        percentage={tech.percentage} 
                                        text={tech.text} 
                                        images={tech.images} 
                                        isMobile={isMobile}
                                    />
                                ))}
                            </div>
                            
                            <h3>Programs & Tools</h3>
                            <div className="skills-grid">
                                {programs.map((prog, index) => (
                                    <SkillCircle 
                                        key={`prog-${prog.text.join('-')}`} 
                                        percentage={prog.percentage} 
                                        text={prog.text} 
                                        images={prog.images} 
                                        isMobile={isMobile}
                                    />
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills