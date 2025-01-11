import React, { useState, useEffect } from 'react';
import styles from "../styles/Gallerie.module.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';  // Import the Image component from Next.js

const galleryImages = [
  '/gallery/19.PNG',
  '/gallery/20.PNG',
  '/gallery/21.PNG',
  '/gallery/22.PNG',
  '/gallery/23.PNG',
  '/gallery/24.PNG',
];

export default function Gallery() {

    const { t } = useTranslation('common');
    const router = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    // const handlePrevious = () => {
    //   setCurrentImageIndex((prevIndex) =>
    //     prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    //   );
    // };

    // const handleNext = () => {
    //   setCurrentImageIndex((prevIndex) =>
    //     prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    //   );
    // };

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
          >
            <ChevronLeft size={24} />
          </button>

          <div className={styles.imageWrapper}>
            <Image
              src= 'https://medikarayclinic.com/gallery/19.png'
              alt="Far Previous Image"
              width={600} 
              height={400} 
              className={`${styles.galleryImage} ${styles.farPreviousImage} ${styles.fadeRight}`}
              loading="lazy"
            />
            <Image
              src='/gallery/20.PNG'
              alt="Previous Image"
              width={600}
              height={400}
              className={`${styles.galleryImage} ${styles.previousImage} ${styles.fadeRight}`}
              loading="lazy"
            />
            <Image
              src='/gallery/21.PNG'
              alt="Current Image"
              width={600}
              height={400}
              className={`${styles.galleryImage} ${styles.currentImage}`}
              loading="lazy"
            />
            <Image
              src='/gallery/22.PNG'
              alt="Next Image"
              width={600}
              height={400}
              className={`${styles.galleryImage} ${styles.nextImage} ${styles.fadeRight}`}
              loading="lazy"
            />
            <Image
              src='/gallery/23.PNG'
              alt="Far Next Image"
              width={600}
              height={400}
              className={`${styles.galleryImage} ${styles.farNextImage} ${styles.fadeRight}`}
              loading="lazy"
            />
          </div>

          <button
            className={`${styles.navigationButton} ${styles.shadowButton}`}
            // onClick={handleNext}
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
