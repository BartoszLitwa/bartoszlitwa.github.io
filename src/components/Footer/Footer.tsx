import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import './Footer.css'
import '../NavBar/NavBar.css'
import logo from '../../assets/img/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                        <Col sm={6}>
                            <img src={logo} alt="logo" />
                        </Col>
                        <Col sm={6}>
                            <span className="navbar-text">
                                <div className="social-icon">
                                    <a href="https://www.linkedin.com/in/bartoszlitwa/"><img height={40} src="https://github.com/devicons/devicon/raw/master/icons/linkedin/linkedin-plain.svg" alt="LinkedIn page"></img></a>
                                    <a href="https://github.com/BartoszLitwa"><img height={40} src="https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg" alt="Github Page"></img></a>
                                    <a href="https://litwa.dev"><img src={logo} height={40} alt="Portfolio Page"></img></a>
                                </div>
                                <Nav.Link href="#contact" >
                                    <Button className="">
                                        <span>Let's Connect</span>
                                    </Button>
                                </Nav.Link>
                            </span>
                        </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Copyright 2022. All rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer