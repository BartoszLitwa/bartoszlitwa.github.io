import React, { useEffect, useState, useCallback, useMemo } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRight, CodeSlash, RocketTakeoff, Layers } from "react-bootstrap-icons"
import './SimpleBanner.css'

const SimpleBanner = () => {
    const [index, setIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = useMemo(() => ['Senior .NET Developer', 'Angular Expert', 'Founder of RentifyNow', 'Azure Cloud Architect'], [])
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(200)
    const period = 2000;

    const tick = useCallback(() => {
        let fullText = toRotate[index];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setIndex(prevIndex => (prevIndex + 1) % toRotate.length)
            setDelta(200)
        }
    }, [index, isDeleting, text, toRotate, period])

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [tick, delta])

    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleFeaturedClick = () => {
        const featuredSection = document.getElementById('featured-project');
        if (featuredSection) {
            featuredSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section className="simple-banner align-items-center" id="home" role="banner">
            <div className="banner-glow-orb orb-1"></div>
            <div className="banner-glow-orb orb-2"></div>
            <Container className="position-relative z-1 hero-container">
                <Row className="align-items-center min-vh-100 hero-row">
                    <Col lg={7} md={12} className="text-start hero-col">
                        <div className="hero-content text-left">
                            <div className="hero-badge animate-fade-up">
                                <span className="badge-icon">Available for Senior Roles & Projects</span>
                            </div>
                            <h1 className="hero-name animate-fade-up" style={{ animationDelay: '0.1s' }}>
                                Hi, I'm <br className="d-block d-md-none" /><span className="text-accent-gradient">Bartosz Litwa</span>
                            </h1>
                            <h2 className="hero-title text-left animate-fade-up" style={{ animationDelay: '0.2s', justifyContent: 'flex-start' }}>
                                <span aria-live="polite" aria-label={`Current role: ${text}`}>
                                    {text}
                                </span>
                                <span className="cursor" aria-hidden="true">|</span>
                            </h2>
                            <p className="hero-description text-left animate-fade-up" style={{ animationDelay: '0.3s' }}>
                                I architect and build <strong>enterprise-grade scalable applications</strong>.
                                Currently building <strong>RentifyNow</strong> — a comprehensive SaaS for property management.
                                With expertise in <strong className="highlight-text">.NET Core, Angular, and Azure</strong>, I transform complex business
                                problems into intuitive, high-performance software solutions. Let's build something exceptional.
                            </p>

                            <div className="hero-actions text-left animate-fade-up flex-wrap" style={{ animationDelay: '0.4s', justifyContent: 'flex-start' }}>
                                <button className="btn-modern btn-primary glow-btn" onClick={handleFeaturedClick} type="button">
                                    <RocketTakeoff size={20} className="me-2" />
                                    <span>Explore RentifyNow</span>
                                </button>
                                <button className="btn-modern btn-secondary" onClick={handleContactClick} type="button">
                                    <span>Hire Me</span> <ArrowRight size={20} className="ms-2" />
                                </button>
                            </div>

                            <div className="hero-tech-stack animate-fade-up" style={{ animationDelay: '0.5s' }}>
                                <span className="tech-stack-label">Specialized In:</span>
                                <div className="tech-stack-icons">
                                    <span className="tech-item"><CodeSlash size={16} /> .NET 8 / C#</span>
                                    <span className="tech-item"><Layers size={16} /> Angular</span>
                                    <span className="tech-item"><RocketTakeoff size={16} /> Azure DevOps</span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={5} md={12} className="d-none d-lg-flex hero-visual-col position-relative justify-content-center">
                        <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.3s' }}>
                            <div className="glass-morphism-card hero-abstract-card">
                                <div className="card-header-dots">
                                    <div className="dot red"></div>
                                    <div className="dot yellow"></div>
                                    <div className="dot green"></div>
                                </div>
                                <div className="abstract-code">
                                    <div className="code-line w-75"></div>
                                    <div className="code-line w-50 indent-1"></div>
                                    <div className="code-line w-100 indent-2"></div>
                                    <div className="code-line w-50 indent-2 accent-line"></div>
                                    <div className="code-line w-75 indent-1"></div>
                                    <div className="code-line w-25"></div>
                                </div>
                                <div className="floating-badge badge-1 glass-panel">
                                    <RocketTakeoff size={18} className="me-2 text-accent" /> Microservices
                                </div>
                                <div className="floating-badge badge-2 glass-panel">
                                    <Layers size={18} className="me-2 text-success" /> SaaS Architecture
                                </div>
                                <div className="floating-badge badge-3 glass-panel">
                                    <CodeSlash size={18} className="me-2 text-info" /> Full Stack
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SimpleBanner