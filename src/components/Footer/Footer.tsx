import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './Footer.css'
import logo from '../../assets/img/logo.svg'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                            <a href="https://www.linkedin.com/in/bartoszlitwa/"><img src={navIcon1} alt="LinkedIn page"></img></a>
                            <a href="https://github.com/BartoszLitwa"><img src={navIcon2} alt="Github Page"></img></a>
                            <a href="https://bartoszlitwa.github.io"><img src={navIcon3} alt="Portfolio Page"></img></a>
                        </div>
                        <Button className="vvd" onClick={() => console.log('connect')}>
                            <span>Let's Connect</span>
                        </Button>
                        <p>Copyright 2022. All rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer