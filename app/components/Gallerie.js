import React, { useState, useEffect } from 'react';
import styles from "../styles/Gallerie.module.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';


const galleryImages = [
  '/gallery/1.jpg',
  '/gallery/1.jpg',
  '/gallery/1.jpg',
  '/gallery/1.jpg',
  '/gallery/1.jpg',

];

export default function Gallery() {

    const { t } = useTranslation('common'); 
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically move to the next image every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getImageAtOffset = (offset) => {
    const index = (currentImageIndex + offset + galleryImages.length) % galleryImages.length;
    return galleryImages[index];
  };

  const handleClick = () => {
    router.push('/gallerie');
  };

  return (
    <section id="gallery" className={styles.gallery}>
  <h2 className={styles.mainTitle}> {t('GallerySecTitle')}</h2>
  <p className={styles.subTitle}> {t('GallerySecSubTitle')}</p>
      <div className={styles.galleryContainer}>
        <button
          className={`${styles.navigationButton} ${styles.shadowButton}`}
          onClick={handlePrevious}
        >
          <ChevronLeft size={24} />
        </button>

        <div className={styles.imageWrapper}>
          {/* Dynamically render 5 images */}
          <img
            src={getImageAtOffset(-2)}
            alt="Far Previous Image"
            className={`${styles.galleryImage} ${styles.farPreviousImage} ${styles.fadeRight}`}
          />
          <img
            src={getImageAtOffset(-1)}
            alt="Previous Image"
            className={`${styles.galleryImage} ${styles.previousImage} ${styles.fadeRight}`}
          />
          <img
            src={getImageAtOffset(0)}
            alt="Current Image"
            className={`${styles.galleryImage} ${styles.currentImage}`}
          />
          <img
            src={getImageAtOffset(1)}
            alt="Next Image"
            className={`${styles.galleryImage} ${styles.nextImage} ${styles.fadeRight}`}
          />
          <img
            src={getImageAtOffset(2)}
            alt="Far Next Image"
            className={`${styles.galleryImage} ${styles.farNextImage} ${styles.fadeRight}`}
          />
        </div>

        <button
          className={`${styles.navigationButton} ${styles.shadowButton}`}
          onClick={handleNext}
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className={styles.exploreButtonContainer}>
        <button className={styles.exploreButton} onClick={handleClick}>
        {t('GallerySecBtn')}
        </button>
      </div>
    </section>
  );
}
