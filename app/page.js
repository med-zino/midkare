"use client";

import { appWithTranslation } from 'next-i18next';
import '../i18n'; 
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import Services from "./components/Services";
import Gallery from "./components/Gallerie";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import styles from "./styles/page.module.css"
import About from "./components/AboutUs";
import TopBanner from "./components/Banner";
import WhatsAppButton from "./components/WhatsApp";
import Vip from "./components/Vip";
import {languages , menuItems} from './data/navbar'; 
import { frMenuItems } from './data/frNavbar';
import { arMenuItems } from './data/arNavbar';
import { ruMenuItems } from './data/ruNavbar';
import { useTranslation } from 'react-i18next';

function Home() {

  const { i18n } = useTranslation(); 
  
    const currentLanguage = i18n.language || 'en';  
  
    const currentMenuItems = currentLanguage === 'fr' ? frMenuItems : 
    (currentLanguage === 'ar' ? arMenuItems : 
    (currentLanguage === 'ru' ? ruMenuItems : menuItems));

    
  return (
    <div className={styles.page}>
      <TopBanner />
      <Navbar  menuItems={currentMenuItems} languages={languages}/>
      <main className={styles.main}>
        <Cover />
        <WhatsAppButton />
        <About />
        <Services />
        <Gallery />
        <ContactForm withNoImage={false}/>
        <Vip />
      </main>
      <Footer />
    </div>

    
  );
}

export default appWithTranslation(Home)