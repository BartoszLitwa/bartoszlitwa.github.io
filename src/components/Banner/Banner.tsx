import React from "react"
import { useEffect, useState } from "react"
import { Button, Col, Container, Nav, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import TrackVisibility from "react-on-screen"
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Web Developer', '.Net Developer', 'React Developer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(200 - Math.random() * 100)
    const period = 500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let fullText = toRotate[index];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 1.5)
        } 

        // Whole text was written
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period)
        } // Whole text was deleted
        else if (isDeleting && updatedText === ''){
            setIsDeleting(false)
            setIndex(prevIndex => ++prevIndex % toRotate.length)
            setDelta(period)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility >
                            { ({ isVisible }) => 
                            <div className={isVisible ? "" : ""}>
                                <span className="tagline">
                                    Welcome to my Portfolio Website
                                </span>
                                <h1>{`Hi! I'm `}<span className="no-wrap">{text}</span></h1>
                                <p>My name is Bartosz Litwa and I am a student at the Polish-Japanese Academy of Information Technology,
                                    majoring in Computer Science (extramural studies). I'm Self-taught hard-working student seeking
                                    to excel his career as a Software Engineer. I would love to continue my education in the field
                                    of computer science - programming and gain the experience and new skills as a Full-Stack React and .Net Developer. </p>
                                <Nav.Link href="#contact" className="navbar-text">
                                    <Button >
                                        Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle>
                                    </Button>
                                </Nav.Link>
                            </div> 
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner