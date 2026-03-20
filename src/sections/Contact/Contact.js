'use client';

import { useState } from 'react';
import IonIcon from '@/components/IonIcon/IonIcon';
import { whatsappLink } from '@/utils/whatsapp';
import styles from './Contact.module.css';

const CONTACT_INFO = [
  { icon: 'location',      label: 'Localização',          value: 'Zango 0, Rua 2, Luanda, Angola', href: null },
  { icon: 'call',          label: 'Telefone / WhatsApp',  value: '+244 928 959 382',                href: 'tel:+244928959382' },
  { icon: 'time',          label: 'Disponibilidade',      value: '24 horas, 7 dias por semana',     href: null },
  { icon: 'globe-outline', label: 'Actuação',             value: 'Luanda, Bengo, Kwanza Norte',     href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ nome: '', tel: '', servico: '', mensagem: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  /** Envia os dados do formulário via WhatsApp */
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá Hopson Segurança!\n\nNome: ${form.nome}\nTelefone: ${form.tel}\nServiço: ${form.servico || 'Não especificado'}\n\nMensagem: ${form.mensagem}`;
    window.open(whatsappLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={styles.contact} id="contacto">
      <div className="container">
        <p className={styles.label}>Entre em Contacto</p>
        <h2 className={styles.title}>
          Fale <span className={styles.gold}>connosco</span>
        </h2>

        <div className={styles.grid}>
          {/* Info de contacto */}
          <div className={styles.info}>
            {CONTACT_INFO.map(({ icon, label, value, href }) => (
              <div key={label} className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <IonIcon name={icon} />
                </div>
                <div>
                  <div className={styles.infoLabel}>{label}</div>
                  <div className={styles.infoValue}>
                    {href ? <a href={href}>{value}</a> : value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Formulário */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="nome">Nome completo</label>
                <input
                  className={styles.formControl}
                  type="text" id="nome" name="nome"
                  placeholder="O seu nome"
                  value={form.nome} onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="tel">Telefone</label>
                <input
                  className={styles.formControl}
                  type="tel" id="tel" name="tel"
                  placeholder="+244 9XX XXX XXX"
                  value={form.tel} onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="servico">Tipo de serviço</label>
              <select
                className={styles.formSelect}
                id="servico" name="servico"
                value={form.servico} onChange={handleChange}
              >
                <option value="">Seleccione um serviço</option>
                <option value="Segurança Patrimonial">Segurança Patrimonial</option>
                <option value="Escolta Armada">Escolta Armada</option>
                <option value="Segurança para Eventos">Segurança para Eventos</option>
                <option value="Candidatura a Vaga">Candidatura a Vaga</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="mensagem">Mensagem</label>
              <textarea
                className={`${styles.formControl} ${styles.textarea}`}
                id="mensagem" name="mensagem"
                placeholder="Descreva a sua necessidade..."
                value={form.mensagem} onChange={handleChange}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Enviar via WhatsApp
              <IonIcon name="logo-whatsapp" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
