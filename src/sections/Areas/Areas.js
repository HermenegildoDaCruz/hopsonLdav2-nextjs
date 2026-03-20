import IonIcon from '@/components/IonIcon/IonIcon';
import styles from './Areas.module.css';

const AREAS = [
  { icon: 'business',      name: 'Luanda',        country: 'Capital · Angola' },
  { icon: 'leaf',          name: 'Ícolo e Bengo', country: 'Luanda · Angola' },
  { icon: 'water',         name: 'Bengo',          country: 'Província · Angola' },
  { icon: 'trail-sign',    name: 'Kwanza Norte',  country: 'Província · Angola' },
];

export default function Areas() {
  return (
    <section className={styles.areas} id="areas">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <p className={styles.label}>Onde Actuamos</p>
          <h2 className={styles.title}>
            Áreas de <span className={styles.gold}>actuação</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {AREAS.map(({ icon, name, country }, i) => (
            <div
              key={name}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={styles.icon}>
                <IonIcon name={icon} />
              </div>
              <div className={styles.name}>{name}</div>
              <div className={styles.country}>{country}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
