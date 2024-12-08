import Navbar from "../components/Navbar";
import Cover from "../components/Cover";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import styles from "../styles/page.module.css"
export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <Cover />
        <Services />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
