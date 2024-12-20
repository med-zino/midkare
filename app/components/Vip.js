import React from 'react';
import { Languages, Stethoscope, Plane, Car, Hotel } from 'lucide-react';
import styles from "../styles/Vip.module.css";
import { useTranslation } from 'react-i18next';

export default function Vip() {
  const { t } = useTranslation('common');

  const services = [
    {
      icon: Languages,
      titleKey: 'vip.services.translator.title',
      descriptionKey: 'vip.services.translator.description'
    },
    {
      icon: Stethoscope,
      titleKey: 'vip.services.afterTreatment.title',
      descriptionKey: 'vip.services.afterTreatment.description'
    },
    {
      icon: Plane,
      titleKey: 'vip.services.flight.title',
      descriptionKey: 'vip.services.flight.description'
    },
    {
      icon: Car,
      titleKey: 'vip.services.transfer.title',
      descriptionKey: 'vip.services.transfer.description'
    },
    {
      icon: Hotel,
      titleKey: 'vip.services.hotels.title',
      descriptionKey: 'vip.services.hotels.description'
    }
  ];

  return (
    <section id="vip" className={styles.section}>
      <h1 className={styles.servicesTitle}>
        <span className={styles.servicesHighlight}>{t('vip.titleHighlight')}</span> {t('vip.titleRest')}
      </h1>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div 
            key={index} 
            className={styles.serviceCard}
          >
            <div className={styles.serviceIconContainer}>
              <service.icon size={50} strokeWidth={1} />
            </div>
            <h3 className={styles.serviceTitle}>{t(service.titleKey)}</h3>
            <p className={styles.serviceDescription}>{t(service.descriptionKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}