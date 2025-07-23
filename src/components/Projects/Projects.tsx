import React, { useState } from "react";
import './Projects.css'

import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from '../../assets/img/color-sharp2.png'
import { Project } from '../../types';
import projectsData from '../../data/projects.json';

const Projects = () => {
    const projects: Project[] = projectsData.map(project => ({
        ...project,
        imgUrl: require(`../../assets/${project.imgUrl}`)
    }));

    const [eventKey, setEventKey] = useState("All")
    const generateCards = (type: string) => {
        return projects.filter((proj) => type === "All" || proj.type.includes(type)).map((proj) => {
            return (
                <ProjectCard card={proj} key={`proj-${proj.title}-${proj.type}`} />
            )
        })
    }

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2 className="mb-5">Projects</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="All">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-nav">
                                <Nav.Item>
                                    <Nav.Link eventKey="All" onClick={() => setEventKey("All")}>All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey=".Net" onClick={() => setEventKey(".Net")}>.Net</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="React" onClick={() => setEventKey("React")}>React</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Flutter" onClick={() => setEventKey("Flutter")}>Flutter</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="C++" onClick={() => setEventKey("C++")}>C++</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Java" onClick={() => setEventKey("Java")}>Java</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Row>
                                    {
                                        generateCards(eventKey)
                                    }
                                </Row>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt="colorSharp 2" className="background-image-right"/>
        </section>
    )
}

export default Projects