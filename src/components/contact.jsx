import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        'service_g18ztpa',    // Your EmailJS Service ID
        'template_jl8bcik',   // Your EmailJS Template ID
        form.current,
        'YEUZLJkGihkv1LAow'   // EmailJS Public Key
      )
      .then(
        () => {
          setStatus('success');
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatus('error');
        }
      );
  };

  return (
    <section id="contact" className="contact" data-mood="happy">
      <h2>Get in Touch</h2>
      <p>I'd love to hear from you. Whether it's a project idea or just a hello, feel free to reach out!</p>

      <div className="contact-container">
        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="form-status success">✅ Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="form-status error">❌ Failed to send. Please try again or email directly.</p>
          )}
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p><strong>Email:</strong> varunkhandelwal505050@gmail.com</p>
          <p><strong>Phone:</strong> +91 9548594326</p>
          <p><strong>Location:</strong> Agra, Uttar Pradesh, India</p>

          <div className="social-links">
            <a href="https://github.com/Varun9548?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/varun-khandelwal-93b03228b/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
