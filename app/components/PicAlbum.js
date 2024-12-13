import React from 'react';
import Image from 'next/image';
import styles from '../styles/Album.module.css';

export default function Album({ imagePaths }) {
  return (
    <div className={styles.albumContainer}>
      {imagePaths.map((image, index) => (
        <div key={index} className={styles.imageWrapper}>
           <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={200}
            height={200}
            className={styles.image}
            priority={index < 4} // Prioritize first 4 images
          />
        </div>
      ))}
    </div>
  );
}
