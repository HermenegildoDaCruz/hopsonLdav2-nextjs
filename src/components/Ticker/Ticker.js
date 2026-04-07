import styles from './Ticker.module.css';
import { companyAge } from '@/utils/companyAge';

const ITEMS = [
    'Segurança Patrimonial',
    'Escolta Armada',
    'Segurança para Eventos',
    `+${companyAge} Anos de Experiência`,
    '+300 Profissionais',
    'Luanda · Bengo · Kwanza Norte',
    'Ícolo e Bengo',
  ];

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
