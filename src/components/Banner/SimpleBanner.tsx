import React, { useEffect, useState } from "react"
import { Col, Container, Nav, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import './SimpleBanner.css'

const SimpleBanner = () => {
    const [index, setIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Full-Stack Developer', 'Azure Cloud Expert', '.NET Specialist', 'React Developer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(200)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker)}
    }, [text, delta])

    const tick = () => {
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
    }

    return (
        <section className="simple-banner" id="home">
            <Container>
                <Row className="align-items-center min-vh-100">
                    <Col lg={8} md={10} className="mx-auto text-center">
                        <div className="hero-content">
                            <h1 className="hero-name">Bartosz Litwa</h1>
                            <h2 className="hero-title">{text}<span className="cursor">|</span></h2>
                            <p className="hero-description">
                                Experienced Full-Stack Developer specializing in <strong>C# .NET</strong>, <strong>React</strong>, and <strong>Azure Cloud</strong>. 
                                Proven track record of <strong>reducing costs by 90%</strong>, <strong>improving performance by 40%</strong>, and delivering scalable solutions for enterprise applications.
                            </p>
                            <div className="hero-stats">
                                <div className="stat">
                                    <span className="stat-number">3+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">15+</span>
                                    <span className="stat-label">Microservices Built</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">90%</span>
                                    <span className="stat-label">Cost Reduction</span>
                                </div>
                            </div>
                            <div className="hero-actions">
                                <Nav.Link href="#contact" className="hero-cta">
                                    <button className="cta-button primary">
                                        Let's Connect <ArrowRightCircle size={20} />
                                    </button>
                                </Nav.Link>
                                <Nav.Link href="#experience" className="hero-cta">
                                    <button className="cta-button secondary">
                                        View Experience
                                    </button>
                                </Nav.Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SimpleBanner 