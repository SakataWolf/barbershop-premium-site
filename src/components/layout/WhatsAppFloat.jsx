import { MessageCircle } from '../icons';
import { PHONE, business } from '../../data/businessData';

export const WhatsAppFloat = () => {
  const message = `Olá! Vim pelo site da ${business.name} e gostaria de agendar um horário. Vocês têm disponibilidade?`;

  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 group"
    >
      <MessageCircle className="text-white w-6 h-6 group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-10 right-0 bg-zinc-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale conosco
      </span>
    </a>
  );
};