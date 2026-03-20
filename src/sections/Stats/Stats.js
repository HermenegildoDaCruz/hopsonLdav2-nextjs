import styles from './Stats.module.css';

const STATS = [
  { num: '12', symbol: '+', label: 'Anos no Mercado' },
  { num: '300', symbol: '+', label: 'Funcionários' },
  { num: '60', symbol: '+', label: 'Postos Activos' },
  { num: '4', symbol: '',  label: 'Províncias' },
];

/** Faixa de estatísticas em fundo dourado */
export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.grid}>
          {STATS.map(({ num, symbol, label }, i) => (
            <div key={label} className={`${styles.item} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className={styles.number}>
                {symbol && <span className={styles.symbol}>{symbol}</span>}
                {num}
              </div>
              <div className={styles.label}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
