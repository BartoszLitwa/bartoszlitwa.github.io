import React, { useLayoutEffect, useState } from "react"
import { Row, Col, Container } from "react-bootstrap"
import TrackVisibility from "react-on-screen"
import SkillCircle from "./SkillCircle"
import { Skill } from '../../types';
import skillsData from '../../data/skills.json';

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

    const [screenSize, setScreenSize] = useState(1024);
    const [isMobile, setIsMobile] = useState(false);
    const mobileSize = 768;

    useLayoutEffect(() => {
        setScreenSize(window.innerWidth);
        setIsMobile(window.innerWidth < mobileSize);

        window.addEventListener('resize', () => {
            setScreenSize(window.innerWidth)

            setIsMobile(window.innerWidth < mobileSize);
        });

        return () => window.removeEventListener('resize', () => setScreenSize(window.innerWidth));
    }, []);

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            { ({ isVisible }) => 
                                <div className="skills-bx">
                                        <h2>
                                            Skills
                                        </h2>
                                        <p>All technologies that I've been using: </p>
                                        <Row className={!isMobile ? "f-flex justify-content-center" : ""}>
                                            {isMobile && <hr />}
                                            {
                                                technologies.map((tech, index) => {
                                                    return (
                                                        <SkillCircle key={`sc-${tech.text}`} percentage={tech.percentage} text={tech.text} images={tech.images} isMobile={isMobile}/>
                                                    )
                                                })
                                            }
                                        </Row>
                                        <h2>
                                            Programs
                                        </h2>
                                        <p>All Programs that I've been using: </p>
                                        <Row className={!isMobile ? "f-flex justify-content-center" : ""}>
                                            {isMobile && <hr />}
                                            {
                                                programs.map((prog,index) => {
                                                    return (
                                                        <SkillCircle key={`sc-${prog.text}`} percentage={prog.percentage} text={prog.text} images={prog.images} isMobile={isMobile}/>
                                                    )
                                                })
                                            }
                                        </Row>
                                </div>
                            } 
                            </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            {/* <img src={colorSharp} className="background-image" alt="Color Sharp"></img> */}
        </section>
    )
}

export default Skills