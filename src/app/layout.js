import { Barlow_Condensed, Barlow } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
import ScrollRevealProvider from '@/components/ScrollRevealProvider/ScrollRevealProvider';
import '@/styles/variables.css';
import styles from '@/styles/layout.module.css';
import '@/styles/globals.css'; 

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Hopson Segurança | Protegemos o que mais importa',
  description:
    'Hopson Segurança e Prestação de Serviços — 12 anos protegendo pessoas e patrimónios em Luanda, Angola. Segurança patrimonial, escolta armada e eventos.',
  keywords: 'segurança privada angola, segurança luanda, escolta armada angola, hopson segurança',
  openGraph: {
    title: 'Hopson Segurança | Protegemos o que mais importa',
    description: '12 anos de excelência em segurança privada em Angola.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <body className={styles.body}>
        <ScrollRevealProvider>
          {children}
        </ScrollRevealProvider>

        {/* Ionicons — carregado no final do body para não bloquear renderização */}
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.4.0/dist/ionicons/ionicons.esm.js"
        />
        <script
          noModule
          src="https://unpkg.com/ionicons@7.4.0/dist/ionicons/ionicons.js"
        />
      </body>
    </html>
  );
}
