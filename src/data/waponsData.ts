// src/data/weaponsData.ts
import bgarmas from '../assets/img/weapons/bgArmas.jpg';
import bglegiao from '../assets/img/weapons/bgLegiao.png';
import armas from '../assets/img/weapons/armas.jpg';
import legiao from '../assets/img/weapons/legiao.png';


export interface Weapon {
  id: string;
  name: string;
  type: string;
  weight: string;
  attack: string;
  durability: string;
  description: string;
  image: string;
}

export const weaponsCategories = [
  {
    id: 'armas',
    name: 'Armas de Ataque',
    description: 'Lâminas e cabos forjados para enfrentar os horrores de Krat.',
    image: bgarmas,
    bgImage: armas // Adicione seus caminhos aqui
  },
  {
    id: 'legioes',
    name: 'Braços da Legião',
    description: 'Próteses mecânicas com tecnologias únicas de combate.',
    image: legiao,
    bgImage: bglegiao // Adicione seus caminhos aqui
  },
  {
    id: 'amuletos e partes defensivas',
    name: 'Itens de Suporte',
    description: 'Itens que oferecem proteção e vantagens estratégicas em combate.',
    image: '/assets/img/home/feature5.png',
    bgImage: '/assets/img/weapons/bg-skills.jpg'
  }
];

export const weaponsData: Weapon[] = [
  {
    id: '1',
    name: "Puppet's Saber",
    type: "Espada Leve",
    weight: "10.2",
    attack: "90 + 20",
    durability: "100/100",
    description: "Uma espada padrão usada pelos guardas de Krat. Equilibrada e confiável para qualquer situação contra marionetes descontroladas.",
    image: "https://placehold.co/600x600/1a1a1e/c2995b?text=Puppets+Saber"
  },
  {
    id: '2',
    name: "Holy Sword of the Ark",
    type: "Espada Grande",
    weight: "21.3",
    attack: "140 + 58",
    durability: "100/100",
    description: "Uma espada sagrada encontrada na Arca. Sua lâmina pode ser estendida para aumentar o alcance em troca de velocidade.",
    image: "https://placehold.co/600x600/1a1a1e/c2995b?text=Holy+Sword"
  },
  {
    id: '3',
    name: "Seven-Coiled Spring Sword",
    type: "Espada Pesada",
    weight: "18.5",
    attack: "125 + 45",
    durability: "100/100",
    description: "Uma arma mecânica que utiliza molas para desferir golpes devastadores. Um triunfo da engenharia de Krat.",
    image: "https://placehold.co/600x600/1a1a1e/c2995b?text=Spring+Sword"
  },
  {
    id: '4',
    name: "Etiquette",
    type: "Adaga",
    weight: "7.1",
    attack: "80 + 15",
    durability: "80/80",
    description: "Um guarda-chuva que esconde uma lâmina afiada. Elegância e letalidade caminham juntas nesta arma de precisão.",
    image: "https://placehold.co/600x600/1a1a1e/c2995b?text=Etiquette"
  },
  // Você pode adicionar as outras 16 armas aqui seguindo o mesmo padrão...
];