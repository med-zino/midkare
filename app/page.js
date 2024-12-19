"use client"
import { appWithTranslation } from 'next-i18next';
import '../i18n'; 
import dynamic from "next/dynamic";
import styles from "./styles/page.module.css"
import {languages , menuItems} from './data/navbar';  
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Services from './components/Services';
import Gallery from './components/Gallerie';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import About from './components/AboutUs';
import TopBanner from './components/Banner';
import WhatsAppButton from './components/WhatsApp';
import Vip from './components/Vip';

function Home() {

  return (
    <div className={styles.page}>
      <TopBanner />
      <Navbar  menuItems={menuItems} languages={languages}/>
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