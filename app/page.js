"use client";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

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
        <ContactForm />
        <Vip />
      </main>
      <Footer />
    </div>

    
  );
}
