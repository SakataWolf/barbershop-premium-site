import { Scissors, Instagram, MessageCircle } from '../icons';
import { business } from '../../data/businessData';
import { useWhatsApp } from '../../hooks/useWhatsApp';

export const Header = () => {
  const { handleWhatsAppClick } = useWhatsApp(business.name);

  return (
    <header className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-4">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_0_30px_rgba(245,158,11,0.18)]">
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-amber-300/20 to-transparent" />
            <Scissors className="relative w-5 h-5 text-black" />
          </div>
          <div>
            <p className="text-lg font-bold tracking-wide text-white">{business.name}</p>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80">Barbearia premium</p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-2 text-sm text-zinc-300 md:justify-center">
          <a href="#servicos" className="rounded-full px-4 py-2 transition-all hover:bg-white/5 hover:text-white">Serviços</a>
          <a href="#estrutura" className="rounded-full px-4 py-2 transition-all hover:bg-white/5 hover:text-white">Estrutura</a>
          <a href="#depoimentos" className="rounded-full px-4 py-2 transition-all hover:bg-white/5 hover:text-white">Depoimentos</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-500/10 hover:text-amber-300"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <button
            onClick={() => handleWhatsAppClick()}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-amber-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar
          </button>
        </div>
      </div>
    </header>
  );
};