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
  '/gallery/25.PNG',
  '/gallery/26.PNG',
  '/gallery/27.PNG',
  '/gallery/28.PNG',
  '/gallery/29.PNG',
  '/gallery/18.PNG',
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
      }, 10000);
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
            {/* Dynamically render 5 images with Next.js Image component */}
            <Image
              src={getImageAtOffset(-2)}
              alt="Far Previous Image"
              width={600} // Define image width
              height={400} // Define image height
              className={`${styles.galleryImage} ${styles.farPreviousImage} ${styles.fadeRight}`}
              loading="lazy" // Lazy load the image
            />
            <Image
              src={getImageAtOffset(-1)}
              alt="Previous Image"
              width={600}
              height={400}
              className={`${styles.galleryImage} ${styles.previousImage} ${styles.fadeRight}`}
              loading="lazy"
            />
            <Image
              src={getImageAtOffset(0)}
              alt="Current Image"
              width={600}
              height={400}
              className={`${styles.galleryImage} ${styles.currentImage}`}
              loading="lazy"
            />
            <Image
              src={getImageAtOffset(1)}
              alt="Next Image"
              width={600}
              height={400}
              className={`${styles.galleryImage} ${styles.nextImage} ${styles.fadeRight}`}
              loading="lazy"
            />
            <Image
              src={getImageAtOffset(2)}
              alt="Far Next Image"
              width={600}
              height={400}
              className={`${styles.galleryImage} ${styles.farNextImage} ${styles.fadeRight}`}
              loading="lazy"
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
