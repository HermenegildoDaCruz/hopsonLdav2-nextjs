import IonIcon from '@/components/IonIcon/IonIcon';
import styles from './Services.module.css';

/** Dados dos serviços */
const SERVICES = [
  {
    num: '01',
    icon: 'business',
    title: 'Segurança Patrimonial',
    desc: 'Proteção de imóveis, instalações comerciais, residências e patrimónios com vigilância especializada 24 horas.',
    priceLabel: 'A partir de',
    priceValue: '150.000 Kz / segurança',
  },
  {
    num: '02',
    icon: 'car-sport',
    title: 'Escolta Armada',
    desc: 'Escolta profissional para transporte de valores, pessoas VIP e cargas sensíveis com agentes treinados e equipados.',
    priceLabel: 'Valor',
    priceValue: 'Sob análise de risco',
  },
  {
    num: '03',
    icon: 'people',
    title: 'Segurança para Eventos',
    desc: 'Equipa especializada para concertos, conferências, casamentos e eventos corporativos — garantindo ordem e protecção.',
    priceLabel: 'Valor',
    priceValue: 'Conforme dimensão',
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="servicos">
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.label}>O que fazemos</p>
            <h2 className={styles.title}>
              Nossos <span className={styles.gold}>serviços</span>
            </h2>
          </div>
          <a href="#contacto" className={styles.cta}>Solicitar Proposta</a>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div key={s.num} className={styles.card}>
              <div className={styles.cardNum}>{s.num}</div>
              <div className={styles.cardIcon}>
                <IonIcon name={s.icon} />
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.cardPrice}>
                <span className={styles.priceLabel}>{s.priceLabel}</span>
                <span className={styles.priceValue}>{s.priceValue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
