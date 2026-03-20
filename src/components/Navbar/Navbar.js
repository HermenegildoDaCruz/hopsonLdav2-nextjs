'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IonIcon from '@/components/IonIcon/IonIcon';
import styles from './Navbar.module.css';

/**
 * Navbar fixa com efeito de scroll e CTA que aparece ao rolar.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <Link href="#hero" className={styles.logo}>
          <Image src="/favicon.png" alt="Hopson Logo" width={44} height={44} priority />
          <div className={styles.logoText}>
            Hopson
            <span>Segurança &amp; Serviços</span>
          </div>
        </Link>

        <ul className={styles.links}>
          {['#sobre', '#servicos', '#mvv', '#recrutamento', '#contacto'].map((href, i) => (
            <li key={href}>
              <Link href={href}>
                {['Sobre', 'Serviços', 'Empresa', 'Vagas', 'Contacto'][i]}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA visível apenas após scroll */}
        {scrolled && (
          <a
            href="https://wa.me/244928959382?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <IonIcon name="logo-whatsapp" />
            Solicitar Orçamento
          </a>
        )}

        {/* Hambúrguer — controlado pelo MobileMenu via evento */}
        <button
          className={styles.hamburger}
          aria-label="Abrir menu"
          onClick={() => window.dispatchEvent(new CustomEvent('openMobileMenu'))}
        >
          <IonIcon name="menu" className={styles.menuIcon} />
        </button>
      </div>
    </nav>
  );
}
