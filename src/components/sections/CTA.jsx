import { MessageCircle } from '../icons';
import { business } from '../../data/businessData';
import { useWhatsApp } from '../../hooks/useWhatsApp';

export const CTA = () => {
  const { handleWhatsAppClick } = useWhatsApp(business.name);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-32">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600 to-amber-700 p-8 md:p-12 text-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para transformar seu visual?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Agende agora mesmo na {business.name} e garanta um atendimento premium com profissionais especializados.
          </p>
          <button
            onClick={() => handleWhatsAppClick()}
            className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp agora
          </button>
        </div>
      </div>
    </section>
  );
};