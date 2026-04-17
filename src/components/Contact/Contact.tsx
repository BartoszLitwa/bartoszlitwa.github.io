import React, { useMemo, useState } from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import ContactInfo from './ContactInfo';
import { ContactFormDetails, ContactStatus } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';
import { appEnv, hasEmailJsConfig } from '../../config/env';
import './Contact.css';

if (appEnv.emailJsPublicKey) {
  emailjs.init(appEnv.emailJsPublicKey);
}

type SubmitState = 'idle' | 'sending';

const Contact = () => {
  const { t } = useLanguage();
  const formInitialDetails: ContactFormDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState<ContactFormDetails>(formInitialDetails);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [status, setStatus] = useState<ContactStatus>({ message: '', success: true });

  const buttonText = useMemo(
    () => (submitState === 'sending' ? t('contact.form.sending') : t('contact.form.send')),
    [submitState, t]
  );

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault();

    if (!hasEmailJsConfig()) {
      setStatus({
        message: t('contact.form.configError'),
        success: false
      });
      return;
    }

    setSubmitState('sending');

    try {
      await emailjs.send(
        appEnv.emailJsServiceId!,
        appEnv.emailJsTemplateId!,
        formDetails,
        appEnv.emailJsPublicKey!
      );

      setStatus({
        message: t('contact.form.success'),
        success: true
      });
      setFormDetails(formInitialDetails);
    } catch (error) {
      console.error('Failed to send contact form', error);
      setStatus({
        message: t('contact.form.error'),
        success: false
      });
    } finally {
      setSubmitState('idle');
    }
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <Container>
        <Row className="align-items-start">
          <Col lg={6} md={12} className="mb-4">
            <ContactInfo />
          </Col>
          <Col lg={6} md={12}>
            <h2 id="contact-heading">{t('contact.title')}</h2>
            <Form onSubmit={handleSubmit} aria-label={t('contact.title')}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder={t('contact.form.firstName')}
                    onChange={onChangeForm}
                    name="firstName"
                    aria-label={t('contact.form.firstName')}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder={t('contact.form.lastName')}
                    onChange={onChangeForm}
                    name="lastName"
                    aria-label={t('contact.form.lastName')}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder={t('contact.form.phone')}
                    onChange={onChangeForm}
                    name="phone"
                    aria-label={t('contact.form.phone')}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder={t('contact.form.email')}
                    onChange={onChangeForm}
                    name="email"
                    aria-label={t('contact.form.email')}
                    required
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <input
                    type="text"
                    value={formDetails.subject}
                    placeholder={t('contact.form.subject')}
                    onChange={onChangeForm}
                    name="subject"
                    aria-label={t('contact.form.subject')}
                    required
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    value={formDetails.message}
                    placeholder={t('contact.form.message')}
                    onChange={onChangeForm}
                    name="message"
                    aria-label={t('contact.form.message')}
                    required
                  />
                  <div className="navbar-text">
                    <button
                      type="submit"
                      disabled={submitState === 'sending'}
                      aria-label={t('contact.form.send')}
                    >
                      {submitState === 'sending' && (
                        <span className="spinner" aria-hidden="true"></span>
                      )}
                      <span>{buttonText}</span>
                    </button>
                  </div>
                </Col>
                <Col>
                  {status.message && (
                    <p
                      className={status.success ? 'success' : 'danger'}
                      role="alert"
                      aria-live="polite"
                    >
                      {status.message}
                    </p>
                  )}
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
