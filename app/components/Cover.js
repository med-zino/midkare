"use client";

import { useState, useLayoutEffect } from "react";
import styles from "../styles/Cover.module.css";

export default function Cover() {
  const images = [
    // "/cover1.jpeg",
    // "/cover2.jpeg",
    // "/cover3.jpeg",
    "/covervid.mp4"
    // "/cover4.jpeg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <section
      className={styles.cover}
    >
      <video
    className={styles.backgroundVideo}
    src="/covervid.mp4"
    autoPlay
    loop
    muted
  />
      <div>
        <h1>Excellence in cosmetic surgery <br></br> dental implants, and hair restoration.</h1>
        <p>Transforming your confidence with world-class care and expertise.</p>
        <button>Get free consultation</button>
      </div>
    </section>
  );
}
