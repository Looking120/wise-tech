import React from 'react';
import Footer from '../../component/FooterSection/Footer';
import MainHeader from '../../component/header/mainHeader/mainHeader';
import ContactForm from './contactComponent/ContactForm';

export default function Contact() {
  return (
        <>
        <header className="header">
            <MainHeader />
        </header>

        <section className="contact-form-section">
            <ContactForm />
        </section>

        <Footer />
        </>
  );
}
