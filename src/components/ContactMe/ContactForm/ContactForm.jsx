import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className="contact-form-content">
        <form action="">
            <div className="name-container">
                <input type="text" name='firstname' placeholder='Nombre (s)'/>
                <input type="text" name='lastname' placeholder='Apellido (s)'/>
            </div>

            <input type="text" name='email' placeholder='Correo' />

            <textarea type='text' name="message" id="" placeholder='Mensaje' rows={3}></textarea>

            <button disabled>PROXIMAMENTE</button>
        </form>
    </div>
  )
}

export default ContactForm