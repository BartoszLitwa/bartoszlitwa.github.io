import React, { useLayoutEffect } from "react"
import { useEffect, useState } from "react"
import { Col, Container, Nav, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import './Banner.css'
import '../NavBar/NavBar.css'
import RocketModel from "./RocketModel"

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

    const [screenSize, setScreenSize] = useState(1024);
    const [isMobile, setIsMobile] = useState(false);
    const mobileSize = 768;

    useLayoutEffect(() => {
        setScreenSize(window.innerWidth);
        setIsMobile(window.innerWidth < mobileSize);

        window.addEventListener('resize', () => {
            setScreenSize(window.innerWidth)

            setIsMobile(window.innerWidth < mobileSize);
        });

        return () => window.removeEventListener('resize', () => setScreenSize(window.innerWidth));
    }, []);

    return (
        <section className="banner" id="home">
            <Container>
                <div className="canvas-container" style={{"top": `${isMobile ? 500 : 1}px `}}>
                    <RocketModel />
                </div>
                <Row className="align-items-center" style={{"zIndex": "99999", "marginTop": "10%"}}>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portfolio Website
                        </span>
                        <h1 className="text-nowrap">{`Hi! I'm ` + text.substring(0, text.indexOf(' ') > 0 ? text.indexOf(' ') : text.length)}</h1>
                        <h1 className="text-nowrap" style={{"height": "60px"}}>{text.indexOf(' ') > 0 ? text.substring(text.indexOf(' ') , text.length) : "     "}</h1>
                        <p className="mt-3">My name is Bartosz Litwa and I am a student at the Polish-Japanese Academy of Information Technology,
                            majoring in Computer Science (extramural studies). I'm Self-taught hard-working student seeking
                            to excel his career as a Software Engineer. I would love to continue my education in the field
                            of computer science - programming and gain the experience and new skills as a Full-Stack React and .Net Developer. </p>
                        <Nav.Link href="#contact" className="navbar-text">
                            <button>
                                Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle>
                            </button>
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner