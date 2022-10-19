import React from "react"
import { Col, Row } from "react-bootstrap"
import "./Skills.css"

const SkillCircle = ({percentage, text, images, isMobile}: {percentage: number, text: string[], images: string[], isMobile: boolean}) => {
    if(isMobile){
        return (
            <Row style={{"marginTop": "10px"}}>
                <Col style={{"marginRight": "-50px"}}>
                    <svg viewBox="0 0 36 36" className="circular-chart purple">
                        <path className="circle-bg"
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path className="circle"
                            strokeDasharray={`${percentage}, 100`}
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" className="percentage">{percentage + "%"}</text>
                    </svg>
                </Col>
                <Col style={{"marginTop": "20px"}}>
                {
                    text.map((text, index) => {
                        return (
                            <Row style={{"marginBottom": "-30px"}}>
                                <Col className="skills-cricle-img">
                                    <img src={images[index]} alt={text} height="40"/> 
                                </Col>
                                <Col>
                                    <p><b>{text}</b></p>
                                </Col>
                            </Row>
                        )
                    })
                }
                </Col>
                <hr />
            </Row>
        )
    } else { // Desktop
        return (
            <Col lg={true} >
                <Row>
                    <svg viewBox="0 0 36 36" className="circular-chart purple" style={{"height": "100px"}}>
                        <path className="circle-bg"
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path className="circle"
                            strokeDasharray={`${percentage}, 100`}
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" className="percentage">{percentage + "%"}</text>
                    </svg>
                </Row>
                <Row>
                {
                    text.map((text, index) => {
                        return (
                            <Row className="d-flex flex-nowrap justify-content-between" >
                                <Col className="">
                                    <img src={images[index]} alt={text} height="40"/> 
                                </Col>
                                <Col className="d-flex flex-grow-1 text-nowrap">
                                    <p><b>{text}</b></p>
                                </Col>
                            </Row>
                        )
                    })
                }
                </Row>
            </Col>
        )
    }
}

export default SkillCircle