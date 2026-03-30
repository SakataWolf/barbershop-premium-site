import { Scissors, Instagram, MessageCircle, Phone, CheckCircle } from '../icons';
import { business, differentials } from '../../data/businessData';
import { useWhatsApp } from '../../hooks/useWhatsApp';

export const Footer = () => {
  const { handleWhatsAppClick } = useWhatsApp(business.name);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black backdrop-blur-sm">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-amber-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px] opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent px-5 py-4 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Atendimento via agendamento
            </span>
          </div>
          <button
            onClick={() => handleWhatsAppClick()}
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/15 px-5 py-2.5 text-sm font-medium text-amber-300 transition-all duration-300 hover:bg-amber-500/25 hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4" />
            Reservar horário
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_0_30px_rgba(245,158,11,0.18)]">
                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-amber-300/20 to-transparent" />
                <Scissors className="relative w-6 h-6 text-black" />
              </div>
              <div>
                <p className="text-xl font-bold tracking-wide text-white">{business.name}</p>
                <p className="text-sm uppercase tracking-[0.22em] text-amber-300/80">Barbearia premium em {business.city}</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-zinc-400 max-w-xl">
              Atendimento com horário agendado, ambiente sofisticado e foco total em corte, barba e finalização com padrão premium para quem valoriza presença, cuidado e experiência.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-500/10 hover:text-amber-300 hover:-translate-y-0.5"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button
                onClick={() => handleWhatsAppClick()}
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:border-green-400/40 hover:bg-green-500/10 hover:text-green-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <a
                href={`tel:${business.phoneClean}`}
                aria-label="Telefone"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-500/10 hover:text-amber-300 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/90">Contato</h4>
            <div className="space-y-4 text-sm text-zinc-400">
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">Telefone</p>
                <p className="text-zinc-300">{business.phone}</p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">Endereço</p>
                <p>{business.address}</p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">Instagram</p>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-amber-300 transition-colors"
                >
                  {business.instagram}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/90">Atendimento</h4>
            <div className="space-y-4 text-sm text-zinc-400">
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">Horários</p>
                <p>{business.hours}</p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">Modelo</p>
                <p className="text-zinc-300">Atendimento exclusivo com agendamento prévio</p>
              </div>
              <button
                onClick={() => handleWhatsAppClick()}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2.5 font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-amber-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar agora
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {business.name}. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#servicos" className="transition-colors hover:text-zinc-300">Serviços</a>
            <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-300">Instagram</a>
            <button onClick={() => handleWhatsAppClick()} className="transition-colors hover:text-zinc-300">WhatsApp</button>
          </div>
        </div>
      </div>
    </footer>
  );
};