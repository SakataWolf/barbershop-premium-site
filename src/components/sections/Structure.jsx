import { Sparkles, MapPin, Clock, Phone, Instagram, CheckCircle } from '../icons';
import { business, differentials } from '../../data/businessData';

export const Structure = () => {
  return (
    <section id="estrutura" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-400" />
            {business.name}
          </h3>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-400 mt-1" />
              <div>
                <p className="text-sm text-zinc-400">Endereço</p>
                <p className="text-zinc-200">{business.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-400 mt-1" />
              <div>
                <p className="text-sm text-zinc-400">Horário de funcionamento</p>
                <p className="text-zinc-200">{business.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-amber-400 mt-1" />
              <div>
                <p className="text-sm text-zinc-400">Telefone / WhatsApp</p>
                <p className="text-zinc-200 font-mono">{business.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Instagram className="w-5 h-5 text-amber-400 mt-1" />
              <div>
                <p className="text-sm text-zinc-400">Instagram</p>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-amber-400 transition-colors"
                >
                  {business.instagram}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <h4 className="font-semibold mb-3">Diferenciais que fazem a diferença</h4>
            <div className="space-y-2">
              {differentials.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-amber-400" />
            Como chegar
          </h3>
          <div className="rounded-xl overflow-hidden border border-white/10">
            <iframe
              src={business.mapUrl}
              className="w-full h-64"
              title={`Localização da ${business.name}`}
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="text-sm text-zinc-400 mt-4 text-center">
            📍 Estamos localizados no centro de {business.city}
          </p>
          <button
            onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(business.address)}`, '_blank')}
            className="mt-4 w-full py-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 font-medium transition-all duration-300"
          >
            Abrir no Google Maps
          </button>
        </div>
      </div>
    </section>
  );
};