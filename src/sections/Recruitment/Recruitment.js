import IonIcon from '@/components/IonIcon/IonIcon';
import styles from './Recruitment.module.css';

const REQUIREMENTS = [
  { icon: 'calendar',      text: '<strong>Idade mínima:</strong> 24 anos' },
  { icon: 'school',        text: '<strong>Escolaridade:</strong> Mínimo 8ª classe' },
  { icon: 'document-text', text: '<strong>Documentos:</strong> B.I., declaração de rendimento, 2 fotografias' },
];

const STEPS = [
  { num: '1', title: 'Entrega de Documentos', desc: 'B.I., 2 fotografias tipo passe e declaração de rendimento' },
  { num: '2', title: 'Avaliação do Perfil',   desc: 'Verificação dos requisitos mínimos e entrevista' },
  { num: '3', title: 'Formação & Integração', desc: 'Formação técnica e integração na equipa operacional' },
  { num: '4', title: 'Início de Funções',     desc: 'Colocação num posto de acordo com o perfil' },
];

export default function Recruitment() {
  return (
    <section className={styles.recruitment} id="recrutamento">
      <div className="container">
        <div className={styles.grid}>
          {/* Texto & requisitos */}
          <div className={`${styles.text} reveal-left`}>
            <p className={styles.label}>Trabalhe Connosco</p>
            <h2 className={styles.title}>
              Faça parte da <span className={styles.gold}>nossa equipa</span>
            </h2>
            <p className={styles.body}>
              A Hopson Segurança recruta com frequência agentes de segurança comprometidos, disciplinados e prontos para defender o que mais importa.
            </p>
            <p className={styles.body}>
              Oferecemos formação, integração e suporte bancário para todos os colaboradores.
            </p>

            <ul className={styles.reqList}>
              {REQUIREMENTS.map(({ icon, text }) => (
                <li key={text} className={styles.reqItem}>
                  <div className={styles.reqIcon}>
                    <IonIcon name={icon} />
                  </div>
                  <span dangerouslySetInnerHTML={{ __html: text }} />
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/244928959382?text=Ol%C3%A1%2C+tenho+interesse+em+trabalhar+como+segurança+na+Hopson."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              <IonIcon name="logo-whatsapp" />
              Candidatar-me Agora
            </a>
          </div>

          {/* Card de processo */}
          <div className={`${styles.card} reveal-right`}>
            <h3 className={styles.cardTitle}>Processo de Admissão</h3>
            <div className={styles.steps}>
              {STEPS.map(({ num, title, desc }) => (
                <div key={num} className={styles.step}>
                  <span className={styles.stepNum}>{num}</span>
                  <div>
                    <div className={styles.stepTitle}>{title}</div>
                    <div className={styles.stepDesc}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.bankInfo}>
              <IonIcon name="card" />
              <span>Pagamento via <strong>Banco BIC</strong> — auxiliamos na abertura de conta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
