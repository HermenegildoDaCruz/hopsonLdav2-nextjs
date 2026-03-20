'use client';

import { useEffect, useState } from 'react';
import IonIcon from '@/components/IonIcon/IonIcon';
import styles from './MobileMenu.module.css';

const NAV_ITEMS = [
  { href: '#sobre',        label: 'Sobre' },
  { href: '#servicos',     label: 'Serviços' },
  { href: '#mvv',          label: 'Empresa' },
  { href: '#recrutamento', label: 'Vagas' },
  { href: '#contacto',     label: 'Contacto' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener('openMobileMenu', openHandler);
    return () => window.removeEventListener('openMobileMenu', openHandler);
  }, []);

  const close = () => setOpen(false);

  return (
    <div className={`${styles.menu} ${open ? styles.open : ''}`} role="dialog" aria-modal="true">
      <button className={styles.closeBtn} onClick={close} aria-label="Fechar menu">
        <IonIcon name="close" />
      </button>

      {open && (
        <nav>
          {NAV_ITEMS.map(({ href, label }) => (
            <a key={href} href={href} className={styles.link} onClick={close}>
              {label}
            </a>
          ))}
        </nav>
      )}

      <a
        href="https://wa.me/244928959382?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cta}
        onClick={close}
      >
        <IonIcon name="logo-whatsapp" />
        Solicitar Orçamento
      </a>
    </div>
  );
}
