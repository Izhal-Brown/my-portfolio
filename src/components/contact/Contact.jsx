import React, { useRef } from 'react';
import './contact.css'
import Swal from 'sweetalert2';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';


function Contact() {
  // settingan untuk kirim ke gmail kita daftar di https://www.emailjs.com/
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7k22bfd', 'template_squnkl7', form.current, 'a2-NXEQbogJPPyWuF')//sesuaikan settingan emailjs kita

    e.target.reset()

    Swal.fire( // membuat alert menggunakan sweetalert2
      'The Message',
      'Send Message Success',
      'Success'
    )
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>isal.informatika@gmail.com</h5>
            {/* eslint-disable-next-line */}
            <a href="mailto:isal.informatika@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Izhal Rizhal</h5>
            {/* eslint-disable-next-line */}
            <a href="https://m.me/Izhal29" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            {/* eslint-disable-next-line */}
            <a href="https://api.whatsapp.com/send?phone=085340712885" target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;