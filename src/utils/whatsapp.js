/** Número de WhatsApp da Hopson */
export const HOPSON_PHONE = '244928959382';

/**
 * Gera um link de WhatsApp com mensagem pré-definida.
 * @param {string} message - Mensagem em texto puro
 * @returns {string} URL do WhatsApp
 */
export function whatsappLink(message = '') {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${HOPSON_PHONE}${encoded ? `?text=${encoded}` : ''}`;
}

/** Links pré-configurados */
export const WA_LINKS = {
  orcamento: whatsappLink('Olá, gostaria de solicitar um orçamento.'),
  candidatura: whatsappLink('Olá, tenho interesse em trabalhar como segurança na Hopson.'),
  geral: whatsappLink('Olá, gostaria de mais informações sobre os vossos serviços.'),
};
