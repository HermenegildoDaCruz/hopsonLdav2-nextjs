# Hopson Segurança — Landing Page

Landing page institucional da **Hopson Segurança e Prestação de Serviços**, construída com Next.js 14 (App Router), JavaScript e CSS Modules.

---

## 🚀 Tecnologias

- **Next.js 14** — App Router
- **JavaScript** 
- **CSS Modules** — estilização encapsulada por componente
- **Google Fonts** — Barlow Condensed + Barlow (via `next/font`)
- **Shadcn - Radix** — Biblioteca de UI


---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.js          # Layout raiz — metadados, fontes, SEO
│   └── page.js            # Página principal (monta todas as sections)
│
├── components/            # Componentes reutilizáveis
│   ├── Footer/
│   ├── Navbar/
│   ├── IonIcon/
│   ├── MobileMenu/
│   ├── ScrollRevealProvider/
│   ├── Ticker/
    ├── ui/
│
├── sections/              # Secções da landing page (ordem da página)
│   ├── Hero/
│   ├── About/
│   ├── Services/
│   ├── Stats/
│   ├── MVV/
│   ├── Areas/
│   ├── Recruitment/
│   ├── CTABanner/
│   └── Contact/
│
├── styles/
│   ├── globals.module.css # Body base
│   └── variables.css      # Tokens CSS globais (cores, tipografia, layout)
│
├── hooks/
│   └── useScrollReveal.js # Hook de animação de entrada ao scroll
│
└── utils/
    └── whatsapp.js        # Gerador de links WhatsApp

public/
├── favicon.png            # Logo Hopson
└── hero-img.png           # Foto do agente de segurança
```

---

## ⚙️ Como correr localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar em modo desenvolvimento
npm run dev

# 3. Aceder no browser
http://localhost:3000
```

---

## 🏗️ Build para produção

```bash
npm run build
npm run start
```

---

## 🎨 Design System

As variáveis de design estão em `src/styles/variables.css`:

| Token            | Valor       | Uso                          |
|-----------------|-------------|------------------------------|
| `--gold`        | `#c9a84c`   | Cor de destaque principal    |
| `--black`       | `#0a0a0a`   | Fundo escuro principal       |
| `--font-display`| Barlow Condensed | Títulos e headings       |
| `--font-body`   | Barlow      | Corpo de texto               |
| `--nav-h`       | `7rem`      | Altura da navbar             |
| `--section-pad` | `10rem 0`   | Padding padrão de secções    |

### Dark / Light Mode

O tema adapta-se automaticamente à preferência do dispositivo via `@media (prefers-color-scheme)`. Não é necessária nenhuma configuração adicional.

---

## 📞 Contacto da Empresa

- **Morada:** Zango 0, Rua 2, Luanda, Angola
- **Telefone / WhatsApp:** +244 928 959 382
- **Disponibilidade:** 24 horas, 7 dias por semana

---


## 📱 Responsividade

Breakpoints usados (em `em`):

| Breakpoint | Equivalente | Alvo           |
|-----------|-------------|----------------|
| `75em`    | ~1200px     | Desktop médio  |
| `62em`    | ~992px      | Tablet         |
| `48em`    | ~768px      | Mobile grande  |
| `30em`    | ~480px      | Mobile pequeno |

---


