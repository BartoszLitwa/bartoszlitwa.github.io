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
                        <Col sm={6} style={{marginTop: "-10px"}}>
                            <img src={logo} alt="logo" />
                        </Col>
                        <Col sm={6} style={{marginTop: "10px"}}>
                            <span className="navbar-text">
                                <div className="social-icon">
                                    <a href="https://www.linkedin.com/in/bartoszlitwa/"><img height={40} src="https://github.com/devicons/devicon/raw/master/icons/linkedin/linkedin-plain.svg" alt="LinkedIn page"></img></a>
                                    <a href="https://github.com/BartoszLitwa"><img height={40} src={require("../../assets/img/github.png")} alt="Github Page"></img></a>
                                    <a href="https://litwa.dev"><img src={logo} height={40} alt="Portfolio Page"></img></a>
                                </div>
                                <Nav.Link href="#contact">
                                    <button>
                                        <span>Let's Connect</span>
                                    </button>
                                </Nav.Link>
                            </span>
                        </Col>
                </Row>
                <Row style={{marginTop: "-10px"}}>
                    <Col>
                        <p>Copyright 2022. All rights Reserved</p>
                        <div className="d-none">
                            <img src="https://hitwebcounter.com/counter/counter.php?page=8054486&style=0038&nbdigits=5&type=ip&initCount=0" />   
                            <img src="https://hitwebcounter.com/counter/counter.php?page=8054486&style=0038&nbdigits=5&type=page&initCount=0" />      
                        </div> 
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer