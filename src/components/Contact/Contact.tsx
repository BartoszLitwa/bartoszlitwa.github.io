import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import contactImg from '../../assets/img/contact-img.svg'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')

    const initialStatus = {
        message: '',
        success: true
    }
    const [status, setStatus] = useState(initialStatus)

    const onChangeForm = (e: any) => {
        const {name, value} = e.target

        setFormDetails((prev) => {
            return {
                ...prev,
                [name]:value 
            }
        })
    }

    const handleSubmit = async (form: React.FormEvent<HTMLFormElement>) => {
        form.preventDefault()
        setButtonText('Sending...')

        await emailjs.send('service_j49lkum', 'template_uajf2in', formDetails, 'Xnx7-7wFdP57_J61-')
            .then((result) => {
                setStatus({
                    message: 'Message Sent Successfuly',
                    success: true
                })
            }, (error) => {
                setStatus({
                    message: 'Oops! Something went wrong',
                    success: false
                })
            });

        setButtonText('Sent')
        setFormDetails(formInitialDetails)
    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name"
                                        onChange={onChangeForm} name="firstName" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name"
                                        onChange={onChangeForm} name="lastName" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="phone" value={formDetails.phone} placeholder="Phone Number"
                                        onChange={onChangeForm} name="phone" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.email} placeholder="Email"
                                        onChange={onChangeForm} name="email" />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <input type="text" value={formDetails.subject} placeholder="Subject"
                                        onChange={onChangeForm} name="subject" />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea value={formDetails.message} placeholder="Message"
                                        onChange={onChangeForm} name="message" />
                                    <Button type="submit">
                                        <span>{buttonText}</span>
                                    </Button>
                                </Col>
                                <Col>
                                    {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success"}>
                                                {status.message}
                                            </p>
                                        </Col>
                                    }
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact