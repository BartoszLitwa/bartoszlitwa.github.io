import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle, CheckCircle, CodeSlash, CreditCard, Cloud, Display } from 'react-bootstrap-icons';
import './FeaturedProject.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const FeaturedProject = () => {
    const hireMeUrl = "https://www.linkedin.com/in/bartoszlitwa/";
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
    const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

    const technologies = [
        ".NET Core 8", "Azure Cloud", "Tauri", "Angular", "TypeScript", "Microservices", "Stripe API", "SQL Server"
    ];

    const highlights = [
        "Distributed microservices architecture hosted on Azure Cloud",
        "Cross-platform support: Web application alongside Desktop and Mobile (via Tauri)",
        "Advanced payment and subscription processing using Stripe",
        "Multi-tenant data isolation and role-based access control",
        "Real-time notifications and dashboard updates",
        "Automated CI/CD pipelines ensuring zero-downtime deployments"
    ];

    const businessValue = [
        { icon: Cloud, title: "Cloud-Native", desc: "Azure-hosted Microservices" },
        { icon: Display, title: "Cross-Platform", desc: "Web, Desktop & Mobile (Tauri)" },
        { icon: CreditCard, title: "Automated Billing", desc: "Complex Stripe Integrations" },
        { icon: CodeSlash, title: "Scalable SaaS", desc: "High availability architecture" }
    ];

    return (
        <section className="featured-project" id="featured-project" aria-labelledby="featured-project-heading">
            <div className="featured-background-glow"></div>
            <Container className="position-relative z-1">
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div
                            ref={headerRef as React.RefObject<HTMLDivElement>}
                            className={`featured-header scroll-animate ${headerVisible ? 'animate-in' : ''}`}
                        >
                            <div className="featured-badge-wrapper text-center">
                                <span className="featured-badge">Flagship SaaS Showcase</span>
                                <span className="featured-badge secondary">Founder & Architect</span>
                            </div>
                            <h2 className="featured-title text-center" id="featured-project-heading">RentifyNow</h2>
                            <p className="featured-subtitle text-center">A Comprehensive Property Management Ecosystem</p>
                            <p className="featured-tagline text-center">
                                Not just a side project. RentifyNow is a fully scalable, production-grade SaaS
                                designed for modern real estate professionals. I engineered the entire ecosystem from
                                the ground up using a multi-tenant microservices architecture.
                            </p>

                            <div className="featured-status-wrapper text-center mt-4">
                                <div className="featured-status glass-panel">
                                    <span className="status-indicator live"></span>
                                    <span className="status-text text-white">Live Production Infrastructure</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div
                    ref={contentRef as React.RefObject<HTMLDivElement>}
                    className={`featured-content scroll-animate ${contentVisible ? 'animate-in' : ''}`}
                >
                    {/* Value Proposition Cards */}
                    <div className="value-props mb-5 mt-5">
                        {businessValue.map((item, index) => (
                            <div key={index} className="value-card glass-panel">
                                <item.icon className="value-icon" size={32} />
                                <h4 className="value-title mt-3">{item.title}</h4>
                                <p className="value-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="glass-card featured-main-card">
                        <Row className="g-0 align-items-center">
                            <Col lg={6} className="featured-image-col">
                                <div className="multi-device-showcase">
                                    <div className="desktop-mockup glass-panel">
                                        <div className="screen-header">
                                            <div className="dot red"></div>
                                            <div className="dot yellow"></div>
                                            <div className="dot green"></div>
                                        </div>
                                        <div className="screen-body">
                                            <div className="skeleton-dash-sidebar"></div>
                                            <div className="skeleton-dash-main">
                                                <div className="skeleton-dash-nav"></div>
                                                <div className="skeleton-dash-cards">
                                                    <div></div><div></div><div></div>
                                                </div>
                                                <div className="skeleton-dash-chart"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mobile-mockup glass-panel">
                                        <div className="mobile-notch"></div>
                                        <div className="skeleton-mobile-nav"></div>
                                        <div className="skeleton-mobile-list">
                                            <div></div><div></div><div></div><div></div>
                                        </div>
                                    </div>
                                    <div className="mockup-floating-badge text-center">
                                        <strong>Web & Native App</strong><br />Powered by Tauri
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="featured-details">
                                    <div className="ownership-badge">
                                        <span>Full Stack Architecture</span>
                                    </div>
                                    <p className="featured-description">
                                        This platform represents my ability to deliver end-to-end commercial solutions.
                                        By leveraging an <strong>Azure-hosted microservices backend</strong> and a versatile frontend ecosystem
                                        (Web, Desktop, and Mobile via <strong>Tauri</strong>), RentifyNow provides a seamless experience across all devices.
                                        I implemented comprehensive real-time functionality and robust financial workflows with <strong>Stripe integration</strong> to handle automated billing and payouts at scale.
                                    </p>

                                    <div className="featured-section mt-4">
                                        <h3 className="section-heading mb-3">Enterprise Tech Stack</h3>
                                        <div className="tech-stack">
                                            {technologies.map((tech, index) => (
                                                <span key={index} className="tech-badge">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="featured-actions mt-5 d-flex gap-3">
                                        <a
                                            href={hireMeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-modern btn-primary glow-btn"
                                        >
                                            <span>Discuss SaaS Architecture</span>
                                            <ArrowRightCircle size={20} className="ms-2" />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <Row className="mt-5 g-4">
                        <Col lg={12}>
                            <div className="glass-panel features-grid-panel">
                                <h3 className="features-title text-center mb-5">Key Technical Achievements</h3>
                                <Row className="g-4">
                                    {highlights.map((highlight, index) => (
                                        <Col md={6} key={index}>
                                            <div className="feature-item p-3 glass-panel">
                                                <div className="feature-icon-wrapper">
                                                    <CheckCircle className="check-icon" size={24} />
                                                </div>
                                                <span className="feature-text">{highlight}</span>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <div className="featured-metrics mt-5">
                        <div className="metric-card glass-panel highlight-metric">
                            <div className="metric-value">Real-World</div>
                            <div className="metric-label">SaaS Product</div>
                        </div>
                        <div className="metric-card glass-panel">
                            <div className="metric-value">Tauri + Web</div>
                            <div className="metric-label">Omnichannel UI</div>
                        </div>
                        <div className="metric-card glass-panel">
                            <div className="metric-value">Microservices</div>
                            <div className="metric-label">Azure Backend</div>
                        </div>
                        <div className="metric-card glass-panel">
                            <div className="metric-value">Stripe API</div>
                            <div className="metric-label">Financial Engine</div>
                        </div>
                    </div>

                    <div className="cta-banner glass-card mt-5">
                        <div className="cta-content">
                            <h3>Need an Enterprise-Grade Application?</h3>
                            <p className="mt-2 text-white-50">I am ready to bring this level of architectural expertise to your organization.</p>
                        </div>
                        <a
                            href={hireMeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-modern btn-outline-glass"
                        >
                            <span>Let's Talk Leadership</span>
                            <ArrowRightCircle size={20} className="ms-2" />
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FeaturedProject;
