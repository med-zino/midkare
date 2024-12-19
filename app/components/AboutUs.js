import React from 'react';
import styles from '../styles/About.module.css';
import { useTranslation } from 'react-i18next';


export default function About() {
  const { t } = useTranslation('common'); 

  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.textContent} data-aos="fade-right">
        <img src="/Blogo.png" alt="Logo" className={styles.logoImage} />
          <div className={styles.greenLight}></div>
          <p className={styles.par}>
          {t('aboutUs')} </p>

        </div>
        <div className={styles.videoContainer} data-aos="fade-left">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/W9V0w4XBZsc"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}