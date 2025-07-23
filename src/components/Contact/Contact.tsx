import React, { useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import './Contact.css'
import emailjs from '@emailjs/browser';
import ContactInfo from "./ContactInfo";
import { ContactFormDetails, ContactStatus } from '../../types';

// Initialize EmailJS with environment variable
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
if (publicKey) {
    emailjs.init(publicKey);
}

const Contact = () => {
    const formInitialDetails: ContactFormDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState<ContactFormDetails>(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')

    const initialStatus: ContactStatus = {
        message: '',
        success: true
    }
    const [status, setStatus] = useState<ContactStatus>(initialStatus)

    const onChangeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus({
                message: 'Email configuration is missing. Please contact the administrator.',
                success: false
            });
            setButtonText('Send');
            return;
        }

        await emailjs.send(serviceId, templateId, formDetails, publicKey)
            .then((result) => {
                setStatus({
                    message: 'Message Sent Successfully',
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
                        <Row className="align-items-start">
            <Col lg={6} md={12} className="mb-4">
                <ContactInfo />
            </Col>
            <Col lg={6} md={12}>
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
                                    <div className="navbar-text">
                                        <button type="submit" >
                                            <span>{buttonText}</span>
                                        </button>
                                    </div>
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