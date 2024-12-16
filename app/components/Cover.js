"use client";

import { useState, useLayoutEffect } from "react";
import styles from "../styles/Cover.module.css";
import { useTranslation } from 'react-i18next';


export default function Cover() {

    const { t } = useTranslation('common'); 
  
  const images = [
    "/covervid.mp4"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <section
      className={styles.cover}
    >
      <video
    className={styles.backgroundVideo}
    src="/covervid.mp4"
    autoPlay
    loop
    muted
  />  
      <div>
        <h1>{t('coverTitle')} <br></br> {t('coverTitle2')}</h1>
        <p>{t('coverSubTitle')}.</p>
        <button>{t('coverButton')}</button>
      </div>
    </section>
  );
}
