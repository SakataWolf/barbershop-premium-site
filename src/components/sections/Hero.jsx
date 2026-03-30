import { useState } from 'react';
import { Sparkles, MessageCircle, ChevronRight, Users, ThumbsUp, Clock } from '../icons';
import { business, stats } from '../../data/businessData';
import { useWhatsApp } from '../../hooks/useWhatsApp';

export const Hero = () => {
  const { handleWhatsAppClick } = useWhatsApp(business.name);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getIcon = (iconName) => {
    const icons = { Users, ThumbsUp, Clock };
    return icons[iconName];
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px] opacity-[0.05]" />
      <div className="absolute top-20 right-20 h-96 w-96 rounded-full bg-amber-500/10 blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 left-20 h-80 w-80 rounded-full bg-white/5 blur-[100px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-amber-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 md:pt-8 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm text-amber-200">Atendimento com horário agendado</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Experiência premium
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Agende seu horário na{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                {business.name}
              </span>{' '}
              e saia com visual profissional hoje
            </h1>

            <p className="text-lg text-zinc-300 max-w-xl leading-relaxed">
              Corte, barba e finalização com qualidade premium, ambiente confortável e agendamento fácil pelo WhatsApp.
              Agende agora e transforme seu visual!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleWhatsAppClick()}
                className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                Ver serviços
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, idx) => {
                const Icon = getIcon(stat.icon);
                return (
                  <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-amber-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-amber-400" />
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <p className="text-sm text-zinc-400">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-transparent to-amber-600/20 rounded-[2.5rem] blur-2xl opacity-70" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="absolute top-6 left-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.22em] text-amber-300 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Premium grooming
              </div>

              <div className="relative rounded-[1.5rem] overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80"
                  alt={business.name}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Ambiente</p>
                  <p className="mt-2 text-sm text-zinc-200">Confortável, sofisticado e pensado para sua experiência</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Agendamento</p>
                  <p className="mt-2 text-sm text-zinc-200">Atendimento organizado via WhatsApp com rapidez</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};