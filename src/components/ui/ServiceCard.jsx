import { useState } from 'react';
import { CheckCircle, Scissors, Star, Award } from '../icons';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { business } from '../../data/businessData';

// Mapeamento de ícones disponíveis
const iconMap = {
  Scissors,
  Star,
  Award,
};

// Ícone padrão (tesoura) para fallback
const DEFAULT_ICON = Scissors;

export const ServiceCard = ({ service, index, hoveredService, onHover }) => {
  const { handleWhatsAppClick } = useWhatsApp(business.name);
  
  // Seleciona o ícone correspondente ou usa o padrão
  const IconComponent = iconMap[service.icon] || DEFAULT_ICON;

  // Aviso em desenvolvimento caso o ícone não seja encontrado
  if (process.env.NODE_ENV === 'development' && !iconMap[service.icon]) {
    console.warn(`⚠️ Ícone não encontrado: "${service.icon}" para o serviço "${service.title}". Usando ícone padrão.`);
  }

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className={`relative group rounded-2xl border transition-all duration-500 ${
        hoveredService === index
          ? 'border-amber-500/50 shadow-2xl shadow-amber-500/10 scale-105'
          : 'border-white/10 bg-white/5'
      } backdrop-blur-sm p-6 hover:bg-white/10`}
    >
      {service.popular && (
        <div className="absolute -top-3 left-6">
          <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-bold px-3 py-1 rounded-full">
            MAIS PROCURADO
          </span>
        </div>
      )}

      <div className="mb-4">
        <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
          <IconComponent className="w-6 h-6 text-amber-400" />
        </div>
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
      </div>

      <div className="space-y-3 my-6">
        {service.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
            <CheckCircle className="w-4 h-4 text-amber-400" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-4 mt-4">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-amber-400">{service.price}</p>
            <p className="text-xs text-zinc-500 mt-1">Duração: {service.duration}</p>
          </div>
        </div>
        <button
          onClick={() => handleWhatsAppClick(service.title)}
          className="w-full py-3 rounded-xl bg-white/10 hover:bg-amber-500 hover:text-black transition-all duration-300 font-medium"
        >
          Agendar agora
        </button>
      </div>
    </div>
  );
};