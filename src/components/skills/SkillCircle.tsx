import React from "react"
import { Col, Row } from "react-bootstrap"
import "./Skills.css"

const SkillCircle = ({percentage, text, images, isMobile}: {percentage: number, text: string[], images: string[], isMobile: boolean}) => {
    if(isMobile){
        return (
            <Row style={{"marginTop": "10px"}}>
                <Col style={{"marginRight": "-40px"}}>
                    <svg viewBox="0 0 36 36" className="circular-chart purple" style={{"maxHeight": "100px"}}>
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
                            <Row key={`m-sctext-${text.slice(0,15)}`} style={{"marginBottom": "-10px"}} className="d-flex flex-nowrap">
                                <Col className="d-flex justify-content-start">
                                    <img src={images[index]} alt={text} height="36"/> 
                                </Col>
                                <Col className="d-flex justify-content-start flex-grow-1 text-nowrap" style={{marginTop: "-15px"}}>
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
            <Col lg={true} style={{maxWidth: "250px", marginRight: "25px"}}>
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
                            <Row key={`sctext-${text.slice(0,15)}`} className="d-flex flex-nowrap justify-content-between" >
                                <Col className="d-flex justify-content-start">
                                    <img src={images[index]} alt={text} height="40"/> 
                                </Col>
                                <Col className="d-flex justify-content-end flex-grow-1 text-nowrap" style={{marginTop: "-15px"}}>
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