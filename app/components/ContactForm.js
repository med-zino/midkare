import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/ContactForm.module.css';
import countries from '../data/countries';  
import { useTranslation } from 'react-i18next';

export default function ContactForm({withNoImage}) {
  const { t } = useTranslation('common'); 
  
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
      to_email: 'Hdallow@gmail.com'
    };
    event.preventDefault();

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert(t('contact.successMessage'));
        
        setFormData({
          country: '',
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      }, (error) => {
        alert(t('contact.errorMessage'));
      });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={withNoImage ? styles.leftSectionNone : styles.leftSection } >
        <img 
          src="nurse.png" 
          alt={t('contact.imageAlt')} 
          className={styles.image}
        />
      </div>

      <div className={styles.rightSection} >
        <h3 className={styles.subtitle}>
          {t('contact.subtitle')}
        </h3>
        <h2 className={styles.title}>
          {t('contact.title')}
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
            <option value="">{t('contact.selectCountry')}</option>
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
            placeholder={t('contact.namePlaceholder')}
            className={styles.input}
            value={formData.name} 
            onChange={handleInputChange} 
            required
          />
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder={t('contact.phonePlaceholder')}
            className={styles.input}
            value={formData.phone} 
            onChange={handleInputChange} 
            required
          />
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder={t('contact.emailPlaceholder')}
            className={styles.input}
            value={formData.email} 
            onChange={handleInputChange} 
            required
          />
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            placeholder={t('contact.messagePlaceholder')}
            className={styles.textarea}
            value={formData.message} 
            onChange={handleInputChange} 
            required
          ></textarea>

          <button 
            type="submit" 
            className={styles.submitButton}
          >
            {t('contact.submitButton')}
          </button>
        </form>
      </div>
    </section>
  );
}