import React from 'react';
import styles from '../styles/Services.module.css';
import { FaTooth  } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiComb } from "react-icons/gi";
import { CiFaceSmile } from "react-icons/ci";
import { useTranslation } from 'react-i18next';






export default function Services() {
  const { t } = useTranslation('common'); 

  const serviceData = [
    {
      icon: <FaTooth />    ,
      title: t('ServiceDITitle'),
      description: t('ServiceDIDescription'),
      image: '/dentimp.webp'
    },
    {
      icon: <GiComb />    ,
      title: t('ServiceHITitle'),
      description: t('ServiceHIDescription'),
      image: '/hairtreat.webp'
    },
    {
      icon: <FaUserDoctor />    ,
      title:  t('ServicePSTitle'),
      description: t('ServicePSDescription'),
      image: '/psurg.webp'
    },
    {
      icon: <CiFaceSmile />    ,
      title: t('ServiceFSTitle'),
      description: t('ServiceFSDescription'),
      image: '/facesur.jpg'
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.servicesContainer}>
      <h1  className={styles.servicesTitle}>
    <span className={styles.servicesHighlight}> {t('ServiceSecTitle')}</span> {t('ServiceSecSubTitle')}
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