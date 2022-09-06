import { Row, Col, Container } from "react-bootstrap"
import SkillCircle from "./SkillCircle"

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skills-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>All technologies that I've been using: </p>
                            <Row>
                                <SkillCircle percentage={90} text=".NET" />
                                <SkillCircle percentage={70} text="React" />
                                <SkillCircle percentage={70} text="Flutter" />
                                <SkillCircle percentage={50} text="Java, Python" />
                                <SkillCircle percentage={50} text="HTML, CSS" />
                                <SkillCircle percentage={50} text="C++" />
                            </Row>
                            <h2>
                                Programs
                            </h2>
                            <p>All Programs that I've been using: </p>
                            <Row>
                                <SkillCircle percentage={80} text="Visual Studio" />
                                <SkillCircle percentage={80} text="Visual Studio Code" />
                                <SkillCircle percentage={70} text="Postman, Insomnia" />
                                <SkillCircle percentage={70} text="Github, TFS" />
                                <SkillCircle percentage={50} text="Docker, Github Actions" />
                                <SkillCircle percentage={50} text="Fusion 360" />
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img src={colorSharp} className="background-image" alt="Color Sharp"></img> */}
        </section>
    )
}

export default Skills