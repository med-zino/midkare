import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, Map } from 'lucide-react';
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <div className={styles.logoSection}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
          <p className={styles.description}>Medica Ray, a licensed hospital in Turkey, specializes in the field of dental implants, plastic surgery, and hair transplantation. Medica Ray provides all treatment and beauty services within its headquarters in Istanbul .</p>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.title}>Treatments</h4>
        <ul className={styles.linkList}>
          <li className={styles.link}><a href="/dental-treatments" >Dentures</a></li>
          <li className={styles.link}><a href="/dental-treatments" >Dental Implants</a></li>
          <li className={styles.link}><a href="/hair-transplant" >Hair Transplant</a></li>
          <li className={styles.link}><a href="/hair-transplant" >PRP</a></li>
          <li className={styles.link}><a href="/plastic-surgery" >Plastic Surgery</a></li>
          <li className={styles.link}><a href="/face-plastic-surgery" >Face Plastic Surgery</a></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4 className={styles.title}>Links</h4>
        <ul className={styles.linkList}>
          <li className={styles.link}><a href="/" >Home</a></li>
          <li className={styles.link}><a href="/about" >About Us</a></li>
          <li className={styles.link}><a href="" >Treatments</a></li>
          <li className={styles.link}><a href="/careers" >Services</a></li>
          <li className={styles.link}><a href="/careers" >Gallery</a></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4 className={styles.title}>Contact Us</h4>
        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <Mail className={styles.icon} />
            <p>Email: contact@company.com</p>
          </div>
          <div className={styles.contactItem}>
            <Phone className={styles.icon} />
            <p>Phone: +123 456 789</p>
          </div>
          <div className={styles.contactItem}>
            <Map className={styles.icon} />
            <p>Location: 123 Main St, City</p>
          </div>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <div className={styles.iconWrapper}>
            <Facebook className={styles.icon} /> </div>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <div className={styles.iconWrapper}>
            <Instagram className={styles.icon} /> </div>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <div className={styles.iconWrapper}>
            <Youtube className={styles.icon} /> </div>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <div className={styles.iconWrapper}>
            <Phone className={styles.icon} /> </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
