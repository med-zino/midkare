import React from 'react';
import { Languages, Stethoscope, Plane, Car, Hotel } from 'lucide-react';
import styles from "../styles/Vip.module.css"

const services = [
  {
    icon: Languages,
    title: 'Translator',
    description: 'Professional translation services for seamless communication'
  },
  {
    icon: Stethoscope,
    title: 'After Treatment',
    description: 'Comprehensive post-treatment care and support'
  },
  {
    icon: Plane,
    title: 'Flight Reservations',
    description: 'Hassle-free flight booking and travel arrangements'
  },
  {
    icon: Car,
    title: 'Airport Transfer',
    description: 'Comfortable and reliable airport transportation'
  },
  {
    icon: Hotel,
    title: 'Hotels',
    description: 'Curated hotel bookings tailored to your needs'
  }
];

export default function Vip() {
  return (
    <section id="vip" className={styles.section}>
       <h1  className={styles.servicesTitle}>
    <span className={styles.servicesHighlight}>We Also Provide</span> These Services
</h1>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div 
            key={index} 
            className={styles.serviceCard}
          >
            <div className={styles.serviceIconContainer}>
              <service.icon size={50}  strokeWidth={1} />
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}