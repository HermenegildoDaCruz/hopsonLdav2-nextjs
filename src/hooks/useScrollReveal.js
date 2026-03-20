'use client';

import { useEffect } from 'react';

/**
 * useScrollReveal
 * Adiciona a classe "visible" a todos os elementos com as classes
 * reveal, reveal-left ou reveal-right quando entram no viewport.
 *
 * Uso: chame este hook no layout raiz ou num componente Provider.
 */
export function useScrollReveal() {
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right';
    const elements = document.querySelectorAll(selectors);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
