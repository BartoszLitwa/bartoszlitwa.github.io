import React, { useLayoutEffect, useState } from "react"
import { Row, Col, Container } from "react-bootstrap"
import TrackVisibility from "react-on-screen"
import SkillCircle from "./SkillCircle"

const Skills = () => {
    const technologies = [
        {
            percentage: 90, 
            text: [".NET Core", "C#"],
            images: [
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
            ],   
        },
        {
            percentage: 70, 
            text: ["React", "TypeScript"],
            images: [
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
            ],   
        },
        {
            percentage: 70, 
            text: ["Flutter", "Dart"],
            images: [
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg",
            ],   
        },
        {
            percentage: 50, 
            text: ["Java", "Python"],
            images: [
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            ],   
        },
        {
            percentage: 50, 
            text: ["HTML", "CSS"],
            images: [
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
            ],   
        },
        {
            percentage: 50, 
            text: ["C++"],
            images: [
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
            ],   
        },
    ]

    const programs = [
        {
            percentage: 90, 
            text: ["Visual Studio", "VS Code"],
            images: [
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
            ],   
        },
        {
            percentage: 70, 
            text: ["Postman", "Insomnia"],
            images: [
            "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
            "https://seeklogo.com/images/I/insomnia-logo-A35E09EB19-seeklogo.com.png",
            ],   
        },
        {
            percentage: 70, 
            text: ["Github", "TFS"],
            images: [
            require("../../assets/img/github.png"),
            "https://logodix.com/logo/646669.png",
            ],   
        },
        {
            percentage: 50, 
            text: ["Docker", "Github Actions"],
            images: [
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
            "https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg",
            ],   
        },
        {
            percentage: 50, 
            text: ["Fusion 360"],
            images: [
            "https://upload.wikimedia.org/wikipedia/commons/7/78/Fusion360_Logo.png",
            ],   
        },
    ]

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