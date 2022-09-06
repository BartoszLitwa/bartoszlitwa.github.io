import React from "react"
import { Col } from "react-bootstrap"
import "./Skills.css"

const SkillCircle = ({percentage, text}: {percentage: number, text: string}) => {
    return (
        <Col lg={true}>
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
            <p><b>{text}</b></p>
        </Col>
    )
}

export default SkillCircle