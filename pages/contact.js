import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="contact page"></meta>
      </Head>
      <ContactForm />
    </div>
  );
};

export default Contact;
