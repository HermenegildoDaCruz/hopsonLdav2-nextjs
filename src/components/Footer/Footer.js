import Image from 'next/image';
import IonIcon from '@/components/IonIcon/IonIcon';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image src="/favicon.png" alt="Hopson" width={50} height={50} />
              <span className={styles.logoText}>Hopson</span>
            </div>
            <p className={styles.desc}>
              Hopson Segurança e Prestação de Serviços — protegendo pessoas e patrimónios em Angola há mais de 12 anos.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <div className={styles.colTitle}>Serviços</div>
            <ul className={styles.links}>
              <li><a href="#servicos">Segurança Patrimonial</a></li>
              <li><a href="#servicos">Escolta Armada</a></li>
              <li><a href="#servicos">Segurança para Eventos</a></li>
              <li><a href="#recrutamento">Vagas Disponíveis</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <div className={styles.colTitle}>Empresa</div>
            <ul className={styles.links}>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#mvv">Missão &amp; Visão</a></li>
              <li><a href="#areas">Áreas de Actuação</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <div className={styles.colTitle}>Contacto</div>
            <ul className={styles.contactList}>
              <li>
                <IonIcon name="location" />
                <span>Zango 0, Rua 2, Luanda, Angola</span>
              </li>
              <li>
                <IonIcon name="call" />
                <span><a href="tel:+244928959382">+244 928 959 382</a></span>
              </li>
              <li>
                <IonIcon name="logo-whatsapp" />
                <span><a href="https://wa.me/244928959382" target="_blank" rel="noopener noreferrer">WhatsApp Disponível</a></span>
              </li>
              <li>
                <IonIcon name="time" />
                <span>Disponível 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {year} Hopson Segurança e Prestação de Serviços, Lda. Todos os direitos reservados.</p>
          <span className={styles.badge}>Empresa Licenciada · Angola</span>
        </div>
      </div>
    </footer>
  );
}
