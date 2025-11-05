import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import './Footer.css'
import '../NavBar/NavBar.css'
import logo from '../../assets/img/logo.png'

const Footer = () => {
    return (
        <footer className="footer" role="contentinfo">
            <Container>
                <Row className="align-items-center">
                    <Col sm={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
                        <img 
                            src={logo} 
                            alt="Bartosz Litwa Logo" 
                            loading="lazy"
                        />
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="navbar-text">
                            <div className="social-icon" role="group" aria-label="Social media links">
                                <a 
                                    href="https://www.linkedin.com/in/bartoszlitwa/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn Profile"
                                >
                                    <img 
                                        height={24} 
                                        width={24}
                                        src="https://github.com/devicons/devicon/raw/master/icons/linkedin/linkedin-plain.svg" 
                                        alt="LinkedIn"
                                        loading="lazy"
                                    />
                                </a>
                                <a 
                                    href="https://github.com/BartoszLitwa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub Profile"
                                >
                                    <img 
                                        height={24} 
                                        width={24}
                                        src={require("../../assets/img/github.png")} 
                                        alt="GitHub"
                                        loading="lazy"
                                    />
                                </a>
                                <a 
                                    href="https://litwa.dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Portfolio Website"
                                >
                                    <img 
                                        src={logo} 
                                        height={24}
                                        width={24}
                                        alt="Portfolio"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                            <Nav.Link href="#contact">
                                <button type="button" aria-label="Contact Bartosz Litwa">
                                    <span>Let's Connect</span>
                                </button>
                            </Nav.Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Copyright {new Date().getFullYear()}. All rights Reserved</p>
                        <div className="d-none">
                            <img 
                                src="https://hitwebcounter.com/counter/counter.php?page=8054486&style=0038&nbdigits=5&type=ip&initCount=0" 
                                alt=""
                            />   
                            <img 
                                src="https://hitwebcounter.com/counter/counter.php?page=8054486&style=0038&nbdigits=5&type=page&initCount=0" 
                                alt=""
                            />      
                        </div> 
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer