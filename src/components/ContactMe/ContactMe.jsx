import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

function ContactMe() {
  return (
    <section className='contact-container' id='contact'>
       <h5>Contacto</h5>

       <div className="contact-content">
            <div style={{ flex: 1}}>
                <ContactInfoCard iconUrl="./email.svg" text="rogerpy00@gmail.com"
                />
                <ContactInfoCard iconUrl="./github.svg" text="https://github.com/rgr0101"
                />

            </div>

            <div style={{ flex: 1}}>
                <ContactForm />
            </div>

        </div> 
    </section>
  )
}

export default ContactMe