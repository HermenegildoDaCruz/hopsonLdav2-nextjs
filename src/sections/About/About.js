'use client'
import Image from 'next/image';
import IonIcon from '@/components/IonIcon/IonIcon';
import styles from './About.module.css';
import { companyAge,foundingYear } from '@/utils/companyAge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const PILLS = [
    { icon: 'business',       label: 'Empresa Angolana' },
    { icon: 'location',       label: 'Luanda & Arredores' },
    { icon: 'shield-checkmark', label: 'Licenciada' },
    { icon: 'people',         label: `+${companyAge} Anos` },
  ];

const aboutImages = [
  '/images/hopson-img-1.jpeg',
  '/images/hopson-img-2.jpeg',
  '/images/hopson-img-3.jpg',
]

export default function About() {
  return (
    <section className={styles.about} id="sobre">
      <div className="container">
        <div className={styles.grid}>
          <Carousel>
              <CarouselContent>
                {aboutImages.map(img =><CarouselItem> <Image
                  src={img}
                  key={img}
                  alt="Agente de segurança Hopson em serviço"
                  width={600}
                  height={550}
                  className={styles.img}
                /></CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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
