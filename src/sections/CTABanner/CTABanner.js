import IonIcon from '@/components/IonIcon/IonIcon';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.banner}>
      <div className="container">
        <h2 className={`${styles.title} reveal`}>
          A sua segurança<br />
          <span className={styles.gold}>começa aqui</span>
        </h2>
        <p className={`${styles.sub} reveal`} style={{ transitionDelay: '0.1s' }}>
          Solicite um orçamento personalizado e tenha a tranquilidade que você e a sua família merecem.
        </p>
        <div className={`${styles.actions} reveal`} style={{ transitionDelay: '0.2s' }}>
          <a
            href="https://wa.me/244928959382?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento+de+seguran%C3%A7a."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnWhatsapp}
          >
            <IonIcon name="logo-whatsapp" />
            WhatsApp Directo
          </a>
          <a href="#contacto" className={styles.btnPrimary}>
            <IonIcon name="mail" />
            Formulário de Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
