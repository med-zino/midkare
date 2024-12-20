import styles from "../styles/Cover.module.css";
import { useTranslation } from 'react-i18next';


export default function Cover() {

    const { t } = useTranslation('common'); 
  

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
        <h1>{t('coverTitle')} <br></br> {t('coverTitle2')}</h1>
        <p>{t('coverSubTitle')}.</p>
        <button>{t('coverButton')}</button>
      </div>
    </section>
  );
}
