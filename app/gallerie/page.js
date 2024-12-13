import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Album from "../components/PicAlbum"
import { menuItems, languages } from '../data/navbar';

import styles from "../styles/Gallerie.module.css"

const galleryImages = [
    '/gallery/00.png',
    '/gallery/1.png',
    '/gallery/2.png',
    '/gallery/3.png',
    '/gallery/05.png',
    '/gallery/5.png',
    '/gallery/6.png',
    '/gallery/7.png',
    '/gallery/9.png',
    '/gallery/10.png',
    '/gallery/11.png',
    '/gallery/12.png',
    '/gallery/13.png',
    '/gallery/14.png',
    '/gallery/15.png',
    '/gallery/16.png',
    '/gallery/17.png',
  
  ];


export default function Gallerie() {
  return (
    <div >
      <Navbar menuItems={menuItems} languages={languages} />
      <Album imagePaths={galleryImages} />
      <Footer />
    </div>
  );
}
