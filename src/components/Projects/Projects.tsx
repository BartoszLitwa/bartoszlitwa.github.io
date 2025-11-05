import React, { useState } from "react";
import './Projects.css'
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from '../../assets/img/color-sharp2.png'
import { Project } from '../../types';
import projectsData from '../../data/projects.json';
import { useScrollAnimation, useStaggeredScrollAnimation } from '../../hooks/useScrollAnimation';

const Projects = () => {
    const projects: Project[] = (projectsData as Project[]).map(project => ({
        ...project,
        imgUrl: require(`../../assets/${project.imgUrl}`)
    }));

    const [eventKey, setEventKey] = useState("All")
    const filteredProjects = projects.filter((proj) => eventKey === "All" || proj.type.includes(eventKey));
    
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
    const { ref: projectsRef, visibleItems } = useStaggeredScrollAnimation(filteredProjects.length, { threshold: 0.1 });

    const generateCards = (type: string) => {
        return filteredProjects.map((proj, index) => {
            return (
                <div 
                    key={`proj-${proj.title}-${proj.type}`}
                    className={`project-item scroll-animate ${visibleItems[index] ? 'animate-in' : ''}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                >
                    <ProjectCard card={proj} />
                </div>
            )
        })
    }

    const projectTypes = ["All", ".Net", "React", "Flutter", "C++", "Java"];

    return (
        <section className="project" id="projects" aria-labelledby="projects-heading">
            <Container>
                <Row>
                    <Col>
                        <div 
                            ref={headerRef as React.RefObject<HTMLDivElement>}
                            className={`projects-header scroll-animate ${headerVisible ? 'animate-in' : ''}`}
                        >
                            <h2 className="section-title" id="projects-heading">Projects</h2>
                            <p className="section-description">
                                Explore my portfolio of applications and solutions that demonstrate my expertise in full-stack development, 
                                cloud architecture, and modern web technologies.
                            </p>
                        </div>
                        
                        <Tab.Container id="projects-tabs" defaultActiveKey="All">
                            <Nav 
                                variant="pills" 
                                className={`nav-pills mb-5 justify-content-center align-items-center scroll-animate ${headerVisible ? 'animate-in' : ''}`}
                                id="pills-nav"
                                style={{ transitionDelay: '0.2s' }}
                                role="tablist"
                                aria-label="Filter projects by technology"
                            >
                                {projectTypes.map((type) => (
                                    <Nav.Item key={type}>
                                        <Nav.Link 
                                            eventKey={type} 
                                            onClick={() => setEventKey(type)}
                                            className={eventKey === type ? 'active' : ''}
                                            role="tab"
                                            aria-selected={eventKey === type}
                                            aria-controls={`projects-tab-panel-${type}`}
                                        >
                                            {type}
                                        </Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>

                            <Tab.Content>
                                <div 
                                    ref={projectsRef as React.RefObject<HTMLDivElement>}
                                    className="projects-grid"
                                    role="tabpanel"
                                    id={`projects-tab-panel-${eventKey}`}
                                    aria-labelledby={`projects-tab-${eventKey}`}
                                >
                                    <Row className="g-4">
                                        {generateCards(eventKey)}
                                    </Row>
                                </div>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt="" className="background-image-right" aria-hidden="true" loading="lazy"/>
        </section>
    )
}

export default Projects