import { Row, Col, Container } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import SkillCircle from "./SkillCircle"
import colorSharp from '../../assets/img/color-sharp.png'
import meter from '../../assets/img/meter1.svg'

{/* <SkillCircle percentage={25} text="Beginner"/>
                                <SkillCircle percentage={55} text="Intermiediate" />
                                <SkillCircle percentage={75} text="Advanced" /> */}

const Skills = () => {
    const responsive = {
        superLargerDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5,
            partialVisibilityGutter: 30
        },
        desktop: {
            breakpoint: {max: 2999, min: 1024},
            items: 3,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {max: 1023, min: 464},
            items: 2,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: {max: 463, min: 0},
            items: 1,
            partialVisibilityGutter: 30
        },
    }

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
                            <div className="d-flex flex-row">
                                <SkillCircle percentage={70} text=".NET" />
                                <SkillCircle percentage={50} text="React" />
                                <SkillCircle percentage={100} text="Java" />
                                <SkillCircle percentage={20} text="C++" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img src={colorSharp} className="background-image" alt="Color Sharp"></img> */}
        </section>
    )
}

export default Skills