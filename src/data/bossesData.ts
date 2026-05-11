import scrappedWatchman from '../assets/img/boss/scrapped-watchman.webp';

export interface Boss {
  id: string;
  name: string;
  biography: string;
  health: {
    normal: number;
    NGplus: number;
    NGplus2: number;
  };
  BossCategory: string;
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
  image: string;
}

export const bossesData: Boss[] = [
  {
    id: 'parade-master',
    name: "Parade Master",
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
  }
];