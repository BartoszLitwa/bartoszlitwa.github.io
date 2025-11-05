import React, { useEffect, useState, useCallback, useMemo } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import './SimpleBanner.css'

const SimpleBanner = () => {
    const [index, setIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = useMemo(() => ['.NET Developer 3 @ KPMG', 'Full-Stack Developer', 'Azure Cloud Expert', 'BSc Computer Science Graduate'], [])
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(200)
    const period = 2000;

    const tick = useCallback(() => {
        let fullText = toRotate[index];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        } 

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period)
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false)
            setIndex(prevIndex => (prevIndex + 1) % toRotate.length)
            setDelta(200)
        }
    }, [index, isDeleting, text, toRotate, period])

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker)}
    }, [tick, delta])

    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleExperienceClick = () => {
        const experienceSection = document.getElementById('experience');
        if (experienceSection) {
            experienceSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section className="simple-banner" id="home" role="banner">
            <Container>
                <Row className="align-items-center min-vh-100">
                    <Col lg={8} md={10} className="mx-auto text-center">
                        <div className="hero-content">
                            <h1 className="hero-name animate-fade-up">
                                Bartosz Litwa
                            </h1>
                            <h2 className="hero-title animate-fade-up" style={{ animationDelay: '0.2s' }}>
                                <span aria-live="polite" aria-label={`Current role: ${text}`}>
                                    {text}
                                </span>
                                <span className="cursor" aria-hidden="true">|</span>
                            </h2>
                            <p className="hero-description animate-fade-up" style={{ animationDelay: '0.4s' }}>
                                Senior Full-Stack Developer at KPMG with a BSc in Computer Science. 
                                <strong>Architecting enterprise-grade solutions</strong> using <strong>.NET Core</strong>, <strong>Angular</strong>, and <strong>Azure Cloud</strong>. 
                                Delivering scalable applications that drive measurable business value—reducing operational costs by 90% and serving 10K+ daily users across 15+ microservices.
                            </p>
                            <div className="hero-stats animate-fade-up" style={{ animationDelay: '0.6s' }}>
                                <div className="stat">
                                    <span className="stat-number" aria-label="4 years of experience">4</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number" aria-label="15 plus microservices built">15+</span>
                                    <span className="stat-label">Services Built</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number" aria-label="90 percent cost savings achieved">90%</span>
                                    <span className="stat-label">Cost Savings</span>
                                </div>
                            </div>
                            <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.8s' }}>
                                <button 
                                    className="cta-button primary"
                                    onClick={handleContactClick}
                                    type="button"
                                    aria-label="Contact Bartosz Litwa"
                                >
                                    <span>Let's Connect</span>
                                    <ArrowRightCircle size={20} aria-hidden="true" />
                                </button>
                                <button 
                                    className="cta-button secondary"
                                    onClick={handleExperienceClick}
                                    type="button"
                                    aria-label="View Bartosz's work experience"
                                >
                                    <span>View Experience</span>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SimpleBanner 