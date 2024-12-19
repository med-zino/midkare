"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/ContactForm.module.css';
import countries from '../data/countries';  

export default function ContactForm({withNoImage}) {
  const [formData, setFormData] = useState({
    country: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    const serviceId = 'service_ocz428m';
    const templateId = 'template_ojadxm8';
    const publicKey = 'p4lGv1sG08NaFuSdM';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,       
      country: formData.country,   
      message: formData.message,
      to_email: 'm.feddag@esi-sba.com'
    };
    event.preventDefault();

    // Send form data using emailjs
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert('Your message has been sent!');
        
        // Reset form data
        setFormData({
          country: '',
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      }, (error) => {
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={withNoImage ? styles.leftSectionNone : styles.leftSection } >
        <img 
          src="nurse.png" 
          alt="Diagnosis illustration" 
          className={styles.image}
        />
      </div>

      <div className={styles.rightSection} >
        <h3 className={styles.subtitle}>
          Diagnosis and Prices in Minutes
        </h3>
        <h2 className={styles.title}>
          Send us a direct message
        </h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <select 
            id="country" 
            name="country" 
            className={styles.select} 
            value={formData.country} 
            onChange={handleInputChange} 
            required
          >
            <option value="">Select your country *</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your full name *" 
            className={styles.input}
            value={formData.name} 
            onChange={handleInputChange} 
            required
          />
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="Enter your phone number *" 
            className={styles.input}
            value={formData.phone} 
            onChange={handleInputChange} 
            required
          />
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email address *" 
            className={styles.input}
            value={formData.email} 
            onChange={handleInputChange} 
            required
          />
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            placeholder="Write your message here *" 
            className={styles.textarea}
            value={formData.message} 
            onChange={handleInputChange} 
            required
          ></textarea>

          <button 
            type="submit" 
            className={styles.submitButton}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
