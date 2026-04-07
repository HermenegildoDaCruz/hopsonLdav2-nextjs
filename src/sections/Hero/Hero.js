import Image from 'next/image';
import IonIcon from '@/components/IonIcon/IonIcon';
import styles from './Hero.module.css';
import heroImg from '../../assets/hero-img.jpg';
import { companyAge } from '@/utils/companyAge';

export const encodedRequestServiceMessage = encodeURIComponent("Olá, tenho interesse em solicitar um orçamento para os serviços de segurança da Hopson.");

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">

      <div className={styles.bgImg}>
        <Image
          src={heroImg}
          alt="Agente de segurança Hopson"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          priority
          quality={90}
        />
      </div>

      <div className={styles.overlay} />

      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>Hopson Segurança — Angola</p>

        <h1 className={styles.title}>
          Protegemos<br />
          o que <span className={styles.outline}>mais</span><br />
          importa
        </h1>

        <p className={styles.subtitle}>
          Segurança patrimonial, escolta armada e proteção para eventos —
          com {companyAge} anos de excelência a guardar pessoas e patrimónios em Angola.
        </p>

        <div className={styles.actions}>
          <a
            href={`https://wa.me/244928959382?text=${encodedRequestServiceMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            <IonIcon name="logo-whatsapp" />
            Solicitar Orçamento
          </a>
          <a href="#servicos" className={styles.btnOutline}>
            Ver Serviços
            <IonIcon name="arrow-forward" />
          </a>
        </div>
        <div className={styles.stats}>
          {[
            { num: companyAge, label: 'Anos no mercado' },
            { num: '300+', label: 'Funcionários' },
            { num: '60+', label: 'Postos activos' },
          ].map(({ num, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statNum}>{num}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.badge} aria-hidden="true">
        <span className={styles.badgeNum}>{companyAge}</span>
        <span className={styles.badgeText}>anos de{'\n'}experiência</span>
      </div>
    </section>
  );
}
