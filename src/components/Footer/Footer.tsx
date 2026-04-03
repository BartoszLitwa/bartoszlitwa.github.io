import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Footer.css'
import '../NavBar/NavBar.css'
import logo from '../../assets/img/logo.png'
import rentifyNowLogo from '../../assets/rentifynow/RentifyNowLogo.jpeg'

const Footer = () => {
    const hireMeUrl = "https://www.linkedin.com/in/bartoszlitwa/";

    const ecosystemLinks = [
        { name: "DoifyNow", url: "https://doifynow.com", className: "" },
        { name: "RentifyNow", url: "https://rentifynow.com", className: "text-accent-green" },
        { name: "HouseifyNow", url: "https://houseifynow.com", className: "" },
        { name: "GoalifyNow", url: "https://goalifynow.com", className: "" },
    ];

    return (
        <footer className="footer" role="contentinfo">
            <Container>
                <Row className="footer-top-row">
                    <Col md={4} className="footer-brand-col">
                        <img
                            src={logo}
                            alt="Bartosz Litwa Logo"
                            loading="lazy"
                        />
                        <p className="footer-tagline">CEO & Founder of DoifyNow</p>
                    </Col>
                    <Col md={4} className="footer-ecosystem-col">
                        <h4 className="footer-section-title">Ecosystem</h4>
                        <nav className="footer-ecosystem-links" aria-label="DoifyNow ecosystem links">
                            {ecosystemLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`footer-eco-link ${link.className}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </Col>
                    <Col md={4} className="footer-connect-col">
                        <h4 className="footer-section-title">Connect</h4>
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
                                aria-label="Connect with Bartosz Litwa via LinkedIn"
                            >
                                Let's Connect
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="footer-bottom">
                            <p>&copy; {new Date().getFullYear()} Bartosz Litwa. All rights reserved.</p>
                            <p className="footer-bottom-links">
                                <a href="https://doifynow.com" target="_blank" rel="noopener noreferrer">DoifyNow</a>
                                <span className="footer-sep">·</span>
                                <a href="mailto:bartosz@litwa.dev">bartosz@litwa.dev</a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
