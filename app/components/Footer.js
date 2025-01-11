import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, Map } from 'lucide-react';
import styles from "../styles/Footer.module.css";
import { useTranslation } from 'react-i18next';

const phoneNumber = "905444183999"; 
const whatsappUrl = `https://wa.me/${phoneNumber}`;

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <div className={styles.logoSection}>
          <img src="/logo.png" alt={t('footer.logoAlt')} className={styles.logo} />
          <p className={styles.description}>{t('footer.description')}</p>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.title}>{t('footer.treatmentsTitle')}</h4>
        <ul className={styles.linkList}>
          <li className={styles.link}><a href="/dental-treatments">{t('footer.treatments.dentures')}</a></li>
          <li className={styles.link}><a href="/dental-treatments">{t('footer.treatments.dentalImplants')}</a></li>
          <li className={styles.link}><a href="/hair-transplant">{t('footer.treatments.hairTransplant')}</a></li>
          <li className={styles.link}><a href="/hair-transplant">{t('footer.treatments.prp')}</a></li>
          <li className={styles.link}><a href="/plastic-surgery">{t('footer.treatments.plasticSurgery')}</a></li>
          <li className={styles.link}><a href="/face-plastic-surgery">{t('footer.treatments.facePlasticSurgery')}</a></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4 className={styles.title}>{t('footer.linksTitle')}</h4>
        <ul className={styles.linkList}>
          <li className={styles.link}><a href="/">{t('footer.links.home')}</a></li>
          <li className={styles.link}><a href="/about">{t('footer.links.aboutUs')}</a></li>
          <li className={styles.link}><a href="">{t('footer.links.treatments')}</a></li>
          <li className={styles.link}><a href="/careers">{t('footer.links.services')}</a></li>
          <li className={styles.link}><a href="/careers">{t('footer.links.gallery')}</a></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4 className={styles.title}>{t('footer.contactTitle')}</h4>
        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <Mail className={styles.icon} />
            <p>{t('footer.contact.email')}: medikarayist@gmail.com</p>
          </div>
          <div className={styles.contactItem}>
            <Phone className={styles.icon} />
            <p>{t('footer.contact.phone')}: +90 544 418 39 99</p>
          </div>
          <div className={styles.contactItem}>
            <Map className={styles.icon} />
            <p>{t('footer.contact.location')}Pınartepe, 34500 Büyükçekmece/İstanbul, Türkiye</p>
          </div>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/MedikaRay.tr" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <div className={styles.iconWrapper}>
              <Facebook className={styles.icon} />
            </div>
          </a>
          <a href="https://www.instagram.com/medikaray/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <div className={styles.iconWrapper}>
              <Instagram className={styles.icon} />
            </div>
          </a>
          <a href="https://www.youtube.com/@medikaray2266" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <div className={styles.iconWrapper}>
              <Youtube className={styles.icon} />
            </div>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <div className={styles.iconWrapper}>
              <Phone className={styles.icon} />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}