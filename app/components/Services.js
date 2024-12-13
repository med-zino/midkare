import React from 'react';
import styles from '../styles/Services.module.css';
import { FaTooth  } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiComb } from "react-icons/gi";
import { CiFaceSmile } from "react-icons/ci";
import { Link } from 'lucide-react';


const serviceData = [
  {
    icon: <FaTooth />    ,
    title: 'Dental Implant',
    description: 'Restore your smile with our advanced dental implant solutions. Precision, comfort, and natural-looking results.',
    image: '/dentimp.webp'
  },
  {
    icon: <GiComb />    ,
    title: 'Hair Transplant',
    description: 'Reclaim your confidence with our state-of-the-art hair transplant techniques. Natural, lasting results.',
    image: '/hairtreat.webp'
  },
  {
    icon: <FaUserDoctor />    ,
    title: 'Plastic Surgery',
    description: 'Transform and enhance your appearance with our expert plastic surgery procedures. Personalized care.',
    image: '/psurg.webp'
  },
  {
    icon: <CiFaceSmile />    ,
    title: 'Face Surgery',
    description: 'Enhance your confidence with our expert facial surgery solutions. Precision, care, and naturally stunning results tailored to you.',
    image: '/facesur.jpg'
  }
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.servicesContainer}>
      <h1  className={styles.servicesTitle}>
    <span className={styles.servicesHighlight}>Reignite Your Confidence</span> with Our Expert Treatments
</h1>
        
        <div className={styles.servicesGrid}>
          {serviceData.map((service, index) => (
            <div key={index} className={styles.serviceCard} data-aos="fade-up">
              <div className={styles.serviceImage}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                />
              </div>
              
              <div className={styles.serviceContent}>
                <div className={styles.serviceHeader}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                </div>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}