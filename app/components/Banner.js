import React from 'react';
import styles from '../styles/Banner.module.css'; 
import { Facebook, Instagram, Youtube, Phone, Mail } from 'lucide-react';

export default function TopBanner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/MedikaRay.tr" className="hover:opacity-80 transition-opacity">
            <div className={styles.iconWrapper}>
              <Facebook size={18} className="text-white" />
            </div>
          </a>
          <a href="https://www.instagram.com/medikaray/" className="hover:opacity-80 transition-opacity">
            <div className={styles.iconWrapper}>
              <Instagram size={18} className="text-white" />
            </div>
          </a>
          <a href="https://www.youtube.com/@medikaray2266" className="hover:opacity-80 transition-opacity">
            <div className={styles.iconWrapper}>
              <Youtube size={18} className="text-white" />
            </div>
          </a>
        </div>

        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <div className={styles.socialIcons}>
            <div className={styles.iconWrapper}>
              <Phone size={18} className="text-white" />
            </div>
            <span className={`${styles.textHidden} sm:${styles.textVisible}`}>
              +90 544 418 39 99
            </span>
          </div>
          <div className={styles.socialIcons}>
            <div className={styles.iconWrapper}>
              <Mail size={18} className="text-white" />
            </div>
            <span className={`${styles.textHidden} sm:${styles.textVisible}`}>
              contact@dentaray.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
