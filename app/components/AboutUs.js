import React from 'react';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.textContent} data-aos="fade-right">
        <img src="/Blogo.png" alt="Logo" className={styles.logoImage} />
          <div className={styles.greenLight}></div>
          <p className={styles.par}>
            Medica Ray, a licensed hospital in Turkey, specializes in the field of dental implants, plastic surgery, and hair transplantation. Medica Ray provides all treatment and beauty services within its headquarters in Istanbul, in cooperation with the best Turkish hospitals and under the supervision of a professional and integrated medical staff.
          </p>

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