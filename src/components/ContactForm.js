import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import "./ContactForm.css"


const ContactForm = () => {

    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (message) {
            const serviceId = 'service_nn0h09m';
            const templateId = 'template_d6y5e5h';
            const userId = 'lrrEuyaA6Il2LBobl';
            const templateParams = {
              
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

         
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div id="contact-form">
            <p>A short explanation about the section</p>
            <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button onClick={submit}>Send Message</button>
            <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
        </div>
    );
};

export default ContactForm;