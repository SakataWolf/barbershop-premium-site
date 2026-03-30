import { useState } from 'react';
import { ServiceCard } from '../ui/ServiceCard';
import { services } from '../../data/businessData';

export const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section id="servicos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-wider text-amber-400 font-semibold">Serviços Premium</p>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold">Escolha o pacote ideal para você</h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          Oferecemos serviços de alta qualidade com produtos selecionados e profissionais experientes
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={idx}
            hoveredService={hoveredService}
            onHover={setHoveredService}
          />
        ))}
      </div>
    </section>
  );
};