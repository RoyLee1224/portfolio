import { useState } from "react";
import React, { useRef } from 'react';
import './contact.scss'
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio', form.current, 'TbdD2QYEh6E_HdDit')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setMessage(true);
      e.target.reset( )
  };

  return (
    <div className="contact" id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" placeholder='Name' />
          <label>Email</label>
          <input type="email" name="email" placeholder='Email' />
          <label>Message</label>
          <textarea name="message" placeholder='Messsage'/>
          <input className="send" type="submit" value="Send"/>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}
