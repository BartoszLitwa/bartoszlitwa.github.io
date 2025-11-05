import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle, CheckCircle } from 'react-bootstrap-icons';
import './FeaturedProject.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const FeaturedProject = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
    const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

    const technologies = [
        "React", "TypeScript", ".NET Core", "Azure", "SQL Server", "SignalR", "Redis", "Docker"
    ];

    const highlights = [
        "Multi-tenant SaaS architecture with isolated data per organization",
        "Real-time notifications and updates using SignalR",
        "Advanced search and filtering with optimized database queries",
        "Automated billing and payment processing integration",
        "Role-based access control with granular permissions",
        "Responsive design supporting desktop and mobile devices",
        "CI/CD pipeline with automated testing and deployments"
    ];

    return (
        <section className="featured-project" id="featured-project">
            <Container>
                <Row>
                    <Col>
                        <div 
                            ref={headerRef as React.RefObject<HTMLDivElement>}
                            className={`featured-header scroll-animate ${headerVisible ? 'animate-in' : ''}`}
                        >
                            <span className="featured-badge">Featured Project</span>
                            <h2 className="featured-title">Rentify</h2>
                            <p className="featured-subtitle">Property Management Platform</p>
                            <p className="featured-description">
                                A full-stack SaaS platform revolutionizing property rental management. 
                                Built with modern cloud architecture and enterprise-grade patterns, 
                                Rentify showcases my ability to architect and deliver scalable, 
                                production-ready applications from concept to deployment.
                            </p>
                            <div className="featured-status">
                                <span className="status-indicator live"></span>
                                <span className="status-text">Almost Live at <a href="https://www.rentifynow.com" target="_blank" rel="noopener noreferrer">www.rentifynow.com</a></span>
                            </div>
                        </div>

                        <div 
                            ref={contentRef as React.RefObject<HTMLDivElement>}
                            className={`featured-content scroll-animate ${contentVisible ? 'animate-in' : ''}`}
                        >
                            <Row className="g-4">
                                <Col lg={6}>
                                    <div className="featured-section">
                                        <h3 className="section-heading">Technical Stack</h3>
                                        <div className="tech-stack">
                                            {technologies.map((tech, index) => (
                                                <span key={index} className="tech-badge">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="featured-section">
                                        <h3 className="section-heading">Key Features</h3>
                                        <ul className="highlights-list">
                                            {highlights.slice(0, 4).map((highlight, index) => (
                                                <li key={index} className="highlight-item">
                                                    <CheckCircle className="check-icon" size={16} />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Col>
                            </Row>

                            <div className="featured-metrics">
                                <div className="metric-card">
                                    <div className="metric-value">Multi-Tenant</div>
                                    <div className="metric-label">SaaS Architecture</div>
                                </div>
                                <div className="metric-card">
                                    <div className="metric-value">Real-Time</div>
                                    <div className="metric-label">Updates & Notifications</div>
                                </div>
                                <div className="metric-card">
                                    <div className="metric-value">Azure</div>
                                    <div className="metric-label">Cloud Infrastructure</div>
                                </div>
                                <div className="metric-card">
                                    <div className="metric-value">Enterprise</div>
                                    <div className="metric-label">Grade Security</div>
                                </div>
                            </div>

                            <div className="featured-actions">
                                <a 
                                    href="https://www.rentifynow.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="featured-button primary"
                                >
                                    <span>Visit Platform</span>
                                    <ArrowRightCircle size={20} />
                                </a>
                                <a 
                                    href="#projects" 
                                    className="featured-button secondary"
                                >
                                    <span>View More Projects</span>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FeaturedProject;


