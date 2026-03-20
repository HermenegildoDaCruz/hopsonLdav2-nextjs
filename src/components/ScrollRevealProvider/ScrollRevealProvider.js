'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * Provider leve que activa o hook de scroll reveal em toda a página.
 * Inserido no layout raiz como filho do <body>.
 */
export default function ScrollRevealProvider({ children }) {
  useScrollReveal();
  return <>{children}</>;
}
