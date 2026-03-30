import { PHONE } from '../data/businessData';

export const useWhatsApp = (businessName) => {
  const handleWhatsAppClick = (serviceTitle = null) => {
    const message = serviceTitle
      ? `Olá! Vim pelo site da ${businessName} e gostaria de agendar o serviço de ${serviceTitle}. Vocês têm horário disponível?`
      : `Olá! Vim pelo site da ${businessName} e gostaria de agendar um horário. Vocês têm disponibilidade?`;

    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return { handleWhatsAppClick };
};