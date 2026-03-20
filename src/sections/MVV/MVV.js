import styles from './MVV.module.css';

const VALUES = [
  'Ética e Transparência',
  'Responsabilidade',
  'Compromisso',
  'Respeito',
  'Qualidade e Excelência',
  'Inovação Contínua',
  'Foco em Resultados',
  'Capital Humano',
];

export default function MVV() {
  return (
    <section className={styles.mvv} id="mvv">
      <div className="container">
        <p className={styles.label}>Nossa Essência</p>
        <h2 className={styles.title}>
          Missão, Visão &amp; <span className={styles.gold}>Valores</span>
        </h2>

        <div className={styles.grid}>
          {/* Missão */}
          <div className={`${styles.card} reveal`}>
            <div className={styles.cardLabel}>Missão</div>
            <h3 className={styles.cardTitle}>O que fazemos</h3>
            <p className={styles.cardText}>
              Oferecer serviços de segurança de qualidade, de forma ética e com rigor técnico — proporcionando soluções eficazes e inovadoras, adaptadas às necessidades específicas de cada cliente.
            </p>
          </div>

          {/* Visão */}
          <div className={`${styles.card} reveal`} style={{ transitionDelay: '0.1s' }}>
            <div className={styles.cardLabel}>Visão</div>
            <h3 className={styles.cardTitle}>Para onde vamos</h3>
            <p className={styles.cardText}>
              Ser a empresa de referência no mercado angolano de segurança privada, reconhecida pela excelência, inovação e pela contribuição para uma sociedade mais protegida.
            </p>
          </div>

          {/* Valores */}
          <div className={`${styles.card} reveal`} style={{ transitionDelay: '0.2s' }}>
            <div className={styles.cardLabel}>Valores</div>
            <h3 className={styles.cardTitle}>Como actuamos</h3>
            <ul className={styles.valuesList}>
              {VALUES.map((v) => (
                <li key={v} className={styles.valueItem}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
