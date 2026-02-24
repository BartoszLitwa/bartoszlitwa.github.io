import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Footer.css'
import '../NavBar/NavBar.css'
import logo from '../../assets/img/logo.png'
import rentifyNowLogo from '../../assets/rentifynow/RentifyNowLogo.jpeg'

const Footer = () => {
    const hireMeUrl = "https://www.linkedin.com/in/bartoszlitwa/";

    return (
        <footer className="footer" role="contentinfo">
            <Container>
                <Row className="align-items-center footer-main-row">
                    <Col sm={12} md={5} className="text-center text-md-start mb-3 mb-md-0">
                        <img 
                            src={logo} 
                            alt="Bartosz Litwa Logo" 
                            loading="lazy"
                        />
                    </Col>
                    <Col sm={12} md={7}>
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
                                    href="https://www.rentifynow.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="RentifyNow Website"
                                    className="rentifynow-link"
                                >
                                    <img 
                                        src={rentifyNowLogo}
                                        height={24}
                                        width={24}
                                        alt="RentifyNow"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                            <a
                                href={hireMeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-cta"
                                aria-label="Hire Bartosz Litwa via LinkedIn"
                            >
                                Hire Me
                            </a>
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