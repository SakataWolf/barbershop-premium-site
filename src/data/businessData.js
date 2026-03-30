export const PHONE = "5511999999999";

export const business = {
  name: "Barbearia Elite",
  address: "Av. Exemplo, 123 - Centro, Itanhaém - SP",
  phone: "(11) 99999-9999",
  phoneClean: PHONE,
  instagram: "@barbeariaelite",
  instagramUrl: "https://instagram.com/barbeariaelite",
  hours: "Segunda a sábado • 09:00 às 19:00",
  email: "contato@barbeariaelite.com.br",
  city: "Itanhaém",
  state: "SP",
  mapUrl: "https://www.google.com/maps?q=itanhaem&output=embed"
};

export const siteTitle = `${business.name} - Barbearia em ${business.city}`;
export const siteDescription = `Agende seu horário na melhor barbearia de ${business.city}. Corte, barba e atendimento premium com profissionais especializados. Agende pelo WhatsApp!`;

export const services = [
  {
    title: "Corte Premium",
    desc: "Atendimento personalizado com acabamento preciso, técnicas modernas e foco total na sua experiência.",
    price: "R$ 35",
    duration: "45 min",
    popular: true,
    icon: "Scissors",
    features: ["Tesoura e máquina", "Acabamento premium", "Produtos de qualidade"]
  },
  {
    title: "Barba Completa",
    desc: "Desenho, alinhamento, hidratação e finalização para manter sua aparência sempre impecável.",
    price: "R$ 25",
    duration: "30 min",
    popular: false,
    icon: "Star",
    features: ["Toalha quente", "Hidratação", "Acabamento preciso"]
  },
  {
    title: "Combo Completo",
    desc: "Corte + barba + finalização premium para quem quer praticidade e presença no mesmo atendimento.",
    price: "R$ 55",
    duration: "1h 15min",
    popular: true,
    icon: "Award",
    features: ["Economia de R$ 15", "Prioridade no agendamento", "Finalização exclusiva"]
  },
];

export const testimonials = [
  {
    name: "Carlos Henrique",
    role: "Cliente há 8 meses",
    text: "Atendimento rápido, ambiente top e resultado melhor do que eu esperava. Já indiquei para vários amigos!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Rafael Souza",
    role: "Cliente há 3 meses",
    text: "Agendei pelo WhatsApp e fui atendido no horário certinho. Profissionalismo e qualidade impecáveis.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Mateus Lima",
    role: "Cliente há 1 ano",
    text: "Virou meu lugar fixo. Qualidade, preço justo e ótimo atendimento. Ambiente muito agradável também.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
];

export const stats = [
  { value: "+300", label: "Clientes atendidos", icon: "Users" },
  { value: "4.9/5", label: "Avaliação média", icon: "ThumbsUp" },
  { value: "Seg-Sáb", label: "Horário flexível", icon: "Clock" }
];

export const differentials = [
  "Ambiente climatizado e confortável",
  "Profissionais experientes e especializados",
  "Produtos de primeira linha",
  "Atendimento personalizado e agendado",
  "Estacionamento conveniado"
];