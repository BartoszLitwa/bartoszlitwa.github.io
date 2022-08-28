import React, { useState } from "react";
import './Projects.css'
import projImg1 from '../../assets/img/project-img1.png'
import projImg2 from '../../assets/img/project-img2.png'
import projImg3 from '../../assets/img/project-img3.png'
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from '../../assets/img/color-sharp2.png'

const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description: "Project 1 desc",
            imgUrl: projImg1,
            type: "React"
        },
        {
            title: "Project 2",
            description: "Project 2 desc",
            imgUrl: projImg2,
            type: "Net"
        },
        {
            title: "Project 3",
            description: "Project 3 desc",
            imgUrl: projImg3,
            type: "React"
        },
        {
            title: "Project 4",
            description: "Project 4 desc",
            imgUrl: projImg1,
            type: "Java"
        },
        {
            title: "Project 5",
            description: "Project 5 desc",
            imgUrl: projImg2,
            type: "Unity"
        },
        {
            title: "Project 6",
            description: "Project 6 desc",
            imgUrl: projImg3,
            type: "Net"
        },
    ]

    const [eventKey, setEventKey] = useState("All")
    const generateCards = (type: string) => {
        return projects.filter((proj) => type === "All" || proj.type === type).map((proj) => {
            return (
                <ProjectCard card={proj} key={`proj-${proj.title}-${proj.type}`}/>
            )
        })
    }

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Projects aobut</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="All">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-nav">
                                <Nav.Item>
                                    <Nav.Link eventKey="All" onClick={() => setEventKey("All")}>All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Net" onClick={() => setEventKey("Net")}>.Net</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="React" onClick={() => setEventKey("React")}>React</Nav.Link>
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