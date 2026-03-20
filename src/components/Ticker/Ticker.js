import styles from './Ticker.module.css';

const ITEMS = [
  'Segurança Patrimonial',
  'Escolta Armada',
  'Segurança para Eventos',
  '+12 Anos de Experiência',
  '+300 Profissionais',
  'Luanda · Bengo · Kwanza Norte',
  'Ícolo e Bengo',
];

/** Faixa animada com os serviços principais — duplicada para loop infinito */
export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
