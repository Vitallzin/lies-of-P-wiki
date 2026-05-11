// src/data/waponsData.ts
import bgarmas from '../assets/img/weapons/bgArmas.webp';
import bglegiao from '../assets/img/weapons/bgLegiao.webp';
import armas from '../assets/img/weapons/armas.webp';
import legiao from '../assets/img/weapons/legiao.webp';


export const weaponsCategories = [
  {
    id: 'armas',
    name: 'Armas',
    description: 'Lâminas e cabos forjados para enfrentar os horrores de Krat.',
    image: bgarmas,
    bgImage: armas
  },
  {
    id: 'legioes',
    name: 'Braços da Legião',
    description: 'Próteses mecânicas com tecnologias únicas de combate.',
    image: legiao,
    bgImage: bglegiao
  }
];


// Import de imagens de armas
import boosterGlavie from '../assets/img/WeaponsDetails/booster-glaive-weapon.webp';
import acidicCrystal from '../assets/img/WeaponsDetails/acidic-crystal-spear-weapon.webp';
import laVendetta from '../assets/img/WeaponsDetails/la_vendetta-weapon.webp';
import frozenFeast from '../assets/img/WeaponsDetails/frozen-feast-weapon-special.webp';
import royalHornBow from '../assets/img/WeaponsDetails/royal_horn_bow-weapon-special.webp';

export interface equipments {
  id: string;
  category: 'armas' | 'legioes'; // Define a categoria
  isDLC?: boolean; // Indica se é do DLC
  isSpecial?: boolean; // Indica se é um item especial
  name: string;
  type: string;
  weight: string;
  slash?: string;
  stab?: string;
  attack: string;
  Motivity: string;
  Technique: string;
  Advanced: string;
  durability: string;
  description: string;
  Location: string; 
  image: string;
}
export const weaponsData: equipments[] = [
  {
    id: 'Booster_Glaive',
    category: 'armas',
    name: "Booster Glaive",
    type: "Espada Grande",
    weight: "x",
    slash: "-",
    stab: "-",
    attack: "x",
    Motivity: "D",
    Technique: "B",
    Advanced: "-",
    durability: "x/x",
    description: `Booster Glaive é uma arma em Lies of P. Booster Glaive é um conjunto de armas que consiste nas seguintes peças: Booster Glaive Blade e Booster Glaive Handle. 
    Em Lies of P, as armas são encontradas como um único equipamento, como sabres, espadas, facas e até mesmo armas pesadas e contundentes. Cada arma que você descobre consiste 
    em uma lâmina e um cabo que podem ser desmontados e combinados com outras peças para forjar uma arma única de sua preferência`,
    
    Location:`Pode ser encontrado em um baú. Depois de interromper o fluxo de água corrompida do Canal da União da Oficina, volte para o Observador de Estrelas da Entrada da 
    União da Oficina e siga para a esquerda, afastando-se das escadas. Siga o caminho passando por alguns inimigos marionetes e desça a escada até onde a Marionete do Futuro 
    ronda. O baú pode ser encontrado no final deste caminho, atrás dela.`,
    image: boosterGlavie
  },
   {
    id: 'Acidic_Crystal',
    category: 'armas',
    name: "Acidic Crystal",
    type: "Punhal",
    weight: "9.0",
    slash: "█░░",
    stab: "██░",
    attack: "49",
    Motivity: "D",
    Technique: "D",
    Advanced: "A",
    durability: "100",
    description: `A Lança de Cristal Ácido é uma arma em Lies of P. A Lança de Cristal Ácido é um conjunto de armas que consiste nas seguintes peças: Lâmina da Lança de 
    Cristal Ácido e Cabo da Lança de Cristal Ácido. Em Lies of P, as armas são encontradas como um único equipamento, como sabres, espadas, facas e até mesmo armas pesadas 
    e contundentes. Cada arma que você descobre consiste em uma lâmina e um cabo que podem ser desmontados e combinados com outras peças para forjar uma arma única de sua 
    preferência.`,
    
    Location:`Pode ser encontrado em um baú. Depois de interromper o fluxo de água corrompida do Canal da União da Oficina, volte para o Observador de Estrelas da Entrada da 
    União da Oficina e siga para a esquerda, afastando-se das escadas. Siga o caminho passando por alguns inimigos marionetes e desça a escada até onde a Marionete do Futuro 
    ronda. O baú pode ser encontrado no final deste caminho, atrás dela.`,
    image: acidicCrystal
  },
  {
    id: 'La_Vendetta',
    category: 'armas',
    name: "La Vendetta",
    isDLC: true,
    type: "Contundente",
    weight: "17.9",
    slash: "███",
    stab: "█░░",
    attack: "132",
    Motivity: "B",
    Technique: "C",
    Advanced: "-",
    durability: "117",
    description: `La Vendetta é uma arma em Lies of P. La Vendetta é um conjunto de armas que consiste nas seguintes peças: La Vendetta Head e La Vendetta Handle. Em Lies of P, 
    as armas são encontradas como um único equipamento, como sabres, espadas, facas e até mesmo armas pesadas e contundentes. Cada arma que você descobre consiste em uma lâmina 
    e um cabo que podem ser desmontados e combinados com outras peças para forjar uma arma única de sua preferência.`,
    
    Location:`A La Vendetta pode ser encontrada nas instalações subterrâneas Zelator. Esta arma é exclusiva do DLC Overture.
    Você precisará completar a Sala de Controle de Refrigeração antes de procurar por esta arma.
    Do Stargazer, desça a escada e siga pelo túnel à direita. Continue pelo caminho através do próximo túnel e desça até uma sala. Siga em frente pela despensa e desça as escadas. 
    Derrote o inimigo Elite Rolling Carcass aqui e siga pelo arco para encontrar um baú contendo a La Vendetta.`,
    image: laVendetta
  },
   {
    id: 'Frozen_Feast',
    category: 'armas',
    name: "Frozen Feast",
    isSpecial: true,
    type: "Espada grande",
    weight: "31.1",
    slash: "██░",
    stab: "█░░",
    attack: "167",
    Motivity: "B",
    Technique: "C",
    Advanced: "-",
    durability: "84",
    description: `Frozen Feast é uma arma especial (arma de chefe) em Lies of P. A Frozen Feast pode ser obtida ao dar o Ergo do Campeão Renascido a Alidoro no Hotel
    Krat em troca dela. O Frozen Feast é uma espada longa que possui um bônus que aumenta a velocidade de ataque de Pinóquio a cada ataque bem-sucedido, até um máximo 
    de 4 acumulações — semelhante à mecânica do Amuleto Arm of God.`,
    
    Location:`O Banquete Congelado pode ser adquirido trocando 1 Ergo do Campeão Renascido com Alidoro.
    O Ergo do Campeão Renascido pode ser obtido derrotando o Campeão Victor.`,
    image: frozenFeast
  },
   {
    id: 'Royal_Horn_Bow',
    category: 'armas',
    name: "Royal Horn Bow",
    isDLC: true,
    isSpecial: true,
    type: "Arco",
    weight: "31.1",
    slash: "████",
    stab: "███",
    attack: "75",
    Motivity: "D",
    Technique: "B",
    Advanced: "-",
    durability: "84",
    description: `O Royal Horn Bow é uma arma especial (arma de chefe) em Lies of P. O Royal Horn Bow é uma arma de longo alcance adicionada com o DLC Overture que 
    não pode ser desmontada. Armas de chefe ou armas especiais são armas derivadas dos chefes únicos encontrados em Lies of P. Elas são adquiridas ao fornecer itens 
    Ergo do tipo chefe a um comerciante especial, Alidoro.`,
    
    Location:`O Royal Horn Bow pode ser encontrado no Hall of Adventure. Esta área é exclusiva do DLC Overture.
    Pode ser encontrado em um baú no segundo nível da sala de exposição Zebra.`,
    image: royalHornBow
  },
  // Adicione mais armas aqui seguindo o mesmo formato

  //Falta por as armas da categoria "Braços da Legião"

];