import React, { useEffect, useState } from "react"
import { Col, Container, Nav, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import TrackVisibility from 'react-on-screen'
import './Banner.css'
import '../NavBar/NavBar.css'

const Banner = () => {
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
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Bartosz`} <span className="txt-rotate" data-period="1000" data-rotate='[ "Full-Stack Developer", "Azure Cloud Expert", ".NET Specialist", "React Developer" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>Experienced Full-Stack Developer specializing in C# .NET, React, and Azure Cloud. Proven track record of reducing costs by 90%, improving performance by 40%, and delivering scalable solutions for enterprise applications.</p>
                                    <Nav.Link href="#contact">
                                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                                    </Nav.Link>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <div className="hero-visual">
                                        <div className="hero-placeholder">
                                            <h3>3D Model Coming Soon</h3>
                                            <p>Interactive 3D visualization will be added here</p>
                                        </div>
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner