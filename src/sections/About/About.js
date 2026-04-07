import Image from 'next/image';
import IonIcon from '@/components/IonIcon/IonIcon';
import styles from './About.module.css';
import { companyAge,foundingYear } from '@/utils/companyAge';

const PILLS = [
    { icon: 'business',       label: 'Empresa Angolana' },
    { icon: 'location',       label: 'Luanda & Arredores' },
    { icon: 'shield-checkmark', label: 'Licenciada' },
    { icon: 'people',         label: `+${companyAge} Anos` },
  ];

export default function About() {
  return (
    <section className={styles.about} id="sobre">
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.imgWrap} reveal-left`}>
            <Image
              src="/hopson-img.jpg"
              alt="Agente de segurança Hopson em serviço"
              width={600}
              height={550}
              className={styles.img}
            />
            <div className={styles.imgBadge}>
              <span className={styles.badgeNum}>{foundingYear}</span>
              <span className={styles.badgeText}>Fundada em Angola</span>
            </div>
          </div>

          <div className={`${styles.text} reveal-right`}>
            <p className={styles.label}>Quem somos</p>
            <h2 className={styles.title}>
              Guardiões da <span className={styles.gold}>sua</span> segurança
            </h2>
            <p className={styles.body}>
              A <strong>Hopson Segurança e Prestação de Serviços</strong> é uma empresa angolana com mais de {companyAge} anos dedicados à protecção de pessoas e bens patrimoniais públicos e privados.
            </p>
            <p className={styles.body}>
              Com sede em Luanda, actuamos com rigor técnico, ética profissional e soluções adaptadas a cada cliente — de residências particulares a grandes eventos empresariais.
            </p>
            <div className={styles.pills}>
              {PILLS.map(({ icon, label }) => (
                <span key={label} className={styles.pill}>
                  <IonIcon name={icon} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
