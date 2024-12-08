import React from "react";
import styles from "../styles/WhatsApp.module.css"; 

import { FaWhatsapp } from 'react-icons/fa'; 

const WhatsAppButton = () => {
  const phoneNumber = "905444183999"; 

  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
    >
      <FaWhatsapp className={styles.whatsappIcon} />
      <span className={styles.whatsappText}>Contact via WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
