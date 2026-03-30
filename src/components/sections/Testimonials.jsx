import { Star } from '../icons';
import { testimonials } from '../../data/businessData';

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-wider text-amber-400 font-semibold">Depoimentos</p>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold">O que nossos clientes dizem</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-zinc-500">{item.role}</p>
              </div>
            </div>
            <div className="flex mb-4 gap-1">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-zinc-300 leading-relaxed">“{item.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};