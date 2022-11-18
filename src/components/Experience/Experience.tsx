import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Experience.css'
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    const experiences = [
        {
            title: "Junior Full Stack Developer, Full Time",
            company: "KPMG",
            companyLogo: require('../../assets/companyLogos/kpmg.png'),
            city: "Warsaw, Poland",
            description: "",
            achievements: [
                "",
                ""
            ],
            startDate: "2022-11",
            endDate: "Present",
        },
        {
            title: "Junior Full Stack Developer, Full Time",
            company: "Coded Projects",
            companyLogo: require('../../assets/companyLogos/codedProjects.png'),
            city: "Warsaw, Poland",
            description: "",
            achievements: [
                "Worked with React, Typescript, ChartJs on Front-end and C# ASP .Net Core API, microservices, SQL Database with Entity Framework and Stored Procedures.",
                "Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs and enhancements.",
                "Reviewed code, debugged problems and corrected issues.",
                "Developed functional databases, applications and servers to support websites on back-end.",
                "Adjusted design parameters to incorporate new features.",
                "Designed intuitive graphical user interfaces to improve user experience.",
                "Participated in testing to verify performance of developed projects and introduced improvements to final product."
            ],
            startDate: "2022-04",
            endDate: "2022-07",
        },
        {
            title: "Business Owner / Developer",
            company: "Crytech Bartosz Litwa",
            companyLogo: require('../../assets/img/logo.png'),
            city: "Warsaw, Poland",
            description: "",
            achievements: [
                "Designed, developed, modified and debugged desktop programs (C# winforms) and Arduino microcontroller code.",
                "Responsible for customer service and marketing.",
                "Designed, 3D modelled and 3D printed parts to complete final products for Sim Racing.",
                "Resolved hardware and software compatibility and interface design issues."
            ],
            startDate: "2021-09",
            endDate: "Present",
        },
        {
            title: "Junior Software Engineer",
            companyLogo: require('../../assets/companyLogos/pzpl.png'),
            company: "Polish Tug of War Association",
            city: "Warsaw, Poland",
            description: "",
            achievements: [
                "Designed, Developed C# application for sorting, merging local infrastructure files to to provide easy and fast migration of data to a web-service.",
                "Developed, modified and keep updated multiple excel VB macros to automate repetetive operations and make sure to eliminate the possible human error.",
                "Performed software testing to uncover bugs and troubleshoot issues prior to application launch.",
                "Collaborated with team to analyze, resolve and maintain the process of creating internal tools and scripts."
            ],
            startDate: "2021-02",
            endDate: "2021-05",
        },
    ]

    const generateCards = () => {
        return experiences.map(exp => {
            return (
                <ExperienceCard key={`exp-${exp.title}`} experience={exp}/>
            )
        })
    }

    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col>
                        <div className="experience-bx">
                            <h2>
                                Experience
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