import scrappedWatchman from '../assets/img/boss/scrapped-watchman.webp';
import championVictor from '../assets/img/boss/championVictor.webp';
import paradeMaster from '../assets/img/boss/paredeMaster.webp';
import kingsFlameFuoco from '../assets/img/boss/kingsFlameFuoco.webp';
import fallenArchbishopAndreus from '../assets/img/boss/fallenArchbishopAndreus.webp';

export interface Boss {
  id: string;
  name: string;
  biography: string;
  health: {
    normal: number;
    NGplus: number;
    NGplus2: number;
  };
  BossCategory: 'Chefe Principal' | 'Chefe Opcional' | 'Chefe de DLC'; // Categoria do chefe
  location: string;
  isOptional: boolean;
  isSpecterSommer: boolean;
  isDLC: boolean;
  type: string;
  isbreakableWeapons: boolean; // Lista de armas que podem quebrar partes do chefe
  poise: {
    NGplus: number;
    NGplus2: number;
  }; // Valor de poise do chefe
  ergoDrops:{
    normal: number;
    NGplus: number;
    NGplus2: number;
  }; // Lista de ergos que o chefe pode dropar
  damage: {
    fase1: string;
    fase2?: string;
    fase3?: string;
  } // Dano do chefe
  inflictsStatus?: string[]; // Lista de status que o chefe pode infligir no jogador
  // Organizado por tipos específicos para o design
  absorptions: {
    slash: number;
    strike: number;
    pierce: number;
    fire: number;
    electric: number;
    acid: number;
  };
  resistances: {
    overheat: number;
    shock: number;
    decay: number;
  };
  drops: string[];
  image?: string;
}

export const bossesData: Boss[] = [
   {
    id: 'parade-master',
    name: "Parade Master",
    location: "Praça da Estação Central de Krat (Beco Cerasani)",
    biography: "O Parade Master é o primeiro chefe encontrado em Lies of P e está localizado na Praça da Estação Central de Krat, bloqueando o Hotel Krat. O Parade Master usa ataques físicos básicos e de investida durante a luta, usando sua cabeça e chapéu como armas improvisadas. O Parade Master joga o Ergo do Líder do Desfile após ser derrotado. Embora todo o público tenha desaparecido em uma piscina de sangue, o Parade Master estava alegre. Enquanto houver um rei, o show deve continuar.",
    isOptional: false,
    isSpecterSommer: false,
    isDLC: false,
    type: "Marionete",
    BossCategory: "Chefe Principal",
    health: { normal: 4400, NGplus: 19727, NGplus2: 26166 },
    isbreakableWeapons: false,
    damage: { fase1: "Contundente", fase2: "Contundente" },
    poise: { NGplus: 614, NGplus2: 670 },
    ergoDrops: { normal: 1852, NGplus: 6482, NGplus2: 8621 },
    absorptions: { slash: 10, strike: -10, pierce: 10, fire: 25, electric: -30, acid: -15 },
    resistances: { overheat: 274, shock: 48, decay: 186 },
    drops: ["Ergo do Líder do Desfile", "Quartzo"],
    image: paradeMaster
  },
  {
    id: 'scrapped-watchman',
    name: "Scrapped Watchman",
    location: "Caminho para o Hotel Krat",
    biography: " O Guarda Sucateado é um chefe em Lies of P. O Guarda da Prefeitura de Krat é encontrado guardando o pátio. Seu diálogo sugere que ele está ali para vingar seus amigos mortos, e seu nome é, na verdade, Murphy. Ele possui habilidades de emissão de choques elétricos provenientes de sua bateria de armazenamento sobrecarregada. Essas habilidades podem ser aproveitadas pelo jogador ao obter a peça necessária dele. Derrotar chefes geralmente faz com que eles deixem cair Ergo raro. O Ergo que você obtém ao derrotar um chefe é extremamente valioso. Os jogadores poderão eventualmente usá-lo para trocar por armas e amuletos especiais. Derrote-o para ganhar a conquista “Guarda Sucateado”.",
    isOptional: false,
    isSpecterSommer: true,
    isDLC: false,
    type: "Marionete",
    BossCategory: "Chefe Principal",
    health: { normal: 8710, NGplus: 30088, NGplus2: 39446 },
    isbreakableWeapons: false,
    damage: { fase1: "Condudente",fase2: "Condudente, Descarga Elétrica",},
    inflictsStatus: ["Descarga Elétrica (fase 2)"],
    poise: { NGplus: 638, NGplus2: 820 },
    ergoDrops: { normal: 5040, NGplus: 17640, NGplus2: 23452 },
    absorptions: { slash: 10, strike: -10, pierce: 10, fire: 25, electric: 50, acid: -15 },
    resistances: { overheat: 435, shock: 174000, decay: 296 },
    drops: ["Bateria de armazenamento sobrecarregada", "Ergo do Herói quebrado", "Núcleo", "Quartzo", "Pequeno boneco de oficial de madeira"],
    image: scrappedWatchman
  },
  {
    id: 'kings-flame-fuoco',
    name: "King's Flame, Fuoco",
    location: "Centro de Obras Venigni",
    biography: "Como o próprio nome sugere, o King's Flame tem um conjunto de habilidades que podem causar dano de fogo e Superaquecimento nos jogadores com seu Amplificador de Chamas de alta potência. Ele é encontrado na sala da fornalha no Centro de Obras Venigni. Ao longo de seu encontro, ele expressa sua necessidade de chamas maiores e sua lealdade ao Rei das Marionetes, Romeo, durante toda a luta. Derrote-o para obter a conquista do King's Flame. Para Fuoco, a marionete comum, proteger o fogo da fábrica era um dever sagrado. Assim que soube do Rei das Marionetes, ele se curvou diante de um novo deus.",
    isOptional: false,
    isSpecterSommer: true,
    isDLC: false,
    type: "Marionete",
    BossCategory: "Chefe Principal",
    health: { normal: 8639, NGplus: 25736, NGplus2: 33850 },
    isbreakableWeapons: false,
    damage: { fase1: "Fogo, Contundente", fase2: "Fogo, Contundente" },
    inflictsStatus: ["Superaquecimento"],
    poise: { NGplus: 751, NGplus2: 820 },
    ergoDrops: { normal: 6438, NGplus: 22533, NGplus2: 29970 },
    absorptions: { slash: 10, strike: -10, pierce: 10, fire: 50, electric: -15, acid: -15 },
    resistances: { overheat: 203500, shock: 346, decay: 346 },
    drops: ["Amplificador de Chamas de alta potência", "Ergo da Chama do Rei", "Pedra de Amolar de Chama"],
    image: kingsFlameFuoco
  },
  {
    id: 'fallen-archbishop-andreus',
    name: "Fallen Archbishop Andreus",
    location: "Altar do Arcebispo",
    biography: "O Fallen Archbishop Andreus é um chefe em Lies of P. O Caído Arcebispo é o Bispo corrompido da Catedral de São Frangelico, onde todos foram afligidos ou morreram com a doença. Ele cedeu à sua ganância e mudou de forma, e agora vive com a ilusão de que é o anjo escolhido por Deus. O ouro fez até mesmo o santo devoto desmoronar pouco a pouco. Incapaz de reconhecer o quão corrupto havia se tornado, ele escapou para uma ilusão de que havia sido escolhido pelo anjo.",
    isOptional: false,
    isSpecterSommer: true,
    isDLC: false,
    type: "Carcaça",
    BossCategory: "Chefe Principal",
    health: { normal: 7927, NGplus: 16201, NGplus2: 21136 },
    isbreakableWeapons: true,
    damage: { fase1: "Ácido, Contundente", fase2: "Ácido, Contundente, Perfurante" },
    inflictsStatus: ["Decomposição"],
    poise: { NGplus: 750, NGplus2: 818 },
    ergoDrops: { normal: 7980, NGplus: 27930, NGplus2: 37148 },
    absorptions: { slash: 0, strike: 10, pierce: -10, fire: -15, electric: 0, acid: 25 },
    resistances: { overheat: 398, shock: 468, decay: 585 },
    drops: ["Ergo do Anjo Retorcido"],
    image: fallenArchbishopAndreus
  },
  {
    id: 'champion-victor',
    name: "Champion Victor",
    location: "Galeria da Grande Exposição",
    biography: "O Campeão Victor é um campeão dos Alquimistas, liderado parcialmente por Simon Manus. Victor já foi elogiado por estar no ápice de todos os seres vivos. Quando recuperou sua força enfraquecida, ele jurou fidelidade absoluta aos Alquimistas.",
    isOptional: false,
    isSpecterSommer: true,
    isDLC: false,
    type: "Humano",
    BossCategory: "Chefe Principal",
    health: { normal: 23310, NGplus: 38694, NGplus2: 48951 },
    isbreakableWeapons: false,
    damage: { fase1: "Contundente", fase2: "Contundente" },
    poise: { NGplus: 823, NGplus2: 898 },
    ergoDrops: { normal: 11684, NGplus: 40894, NGplus2: 54390 },
    absorptions: { slash: 0, strike: 0, pierce: 0, fire: 0, electric: 25, acid: -15 },
    resistances: { overheat: 625, shock: 781, decay: 531 },
    drops: ["Ergo do Campeão Renascido"],
    image: championVictor
  },
  
];