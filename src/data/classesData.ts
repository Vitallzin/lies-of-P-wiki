export interface GameClass {
  id: string;
  name: string;
  description: string;
  stats: { [key: string]: number };
  bestWeapons: string[]; // IDs ou Nomes das armas recomendadas
  buildTips: string[];
  image: string;
}

export const classesData: GameClass[] = [
  {
    id: '1',
    name: "Caminho do Grilo (Equilíbrio)",
    description: "O caminho ideal para quem busca versatilidade. Permite adaptar-se a qualquer situação em Krat.",
    stats: { Vitalidade: 11, Vigor: 12, Capacidade: 11, Motricidade: 9, Técnica: 9, Avanço: 7 },
    bestWeapons: ["Puppet's Saber", "Trident of the Covenant", "Seven-Coiled Spring Sword"],
    buildTips: [
      "Foque em elevar Vitalidade e Vigor inicialmente.",
      "Aproveite que seus atributos de Motricidade e Técnica são iguais para testar diferentes montagens de armas.",
      "Use braços mecânicos que complementem sua falta de especialização inicial."
    ],
    image: "https://placehold.co/600x800/0a0a0c/c2995b?text=Path+of+the+Cricket"
  },
  {
    id: '2',
    name: "Caminho do Bastardo (Agilidade)",
    description: "Foco total em velocidade, estamina e ataques críticos rápidos.",
    stats: { Vitalidade: 8, Vigor: 15, Capacidade: 9, Motricidade: 5, Técnica: 11, Advance: 6 },
    bestWeapons: ["Wintry Rapier", "Etiquette", "Two-Dragons Sword"],
    buildTips: [
      "Aprenda o tempo do Perfect Guard, pois sua vida inicial é baixa.",
      "Invista pesado em Técnica para escalar o dano das suas armas rápidas.",
      "Mantenha o peso do equipamento abaixo de 60% para maximizar a regeneração de estamina."
    ],
    image: "https://placehold.co/600x800/0a0a0c/c2995b?text=Path+of+the+Bastard"
  },
  {
    id: '3',
    name: "Caminho da Varredura (Força)",
    description: "Esmague a resistência das marionetes com golpes pesados e alta defesa.",
    stats: { Vitalidade: 13, Vigor: 7, Capacidade: 12, Motricidade: 11, Técnica: 5, Advance: 6 },
    bestWeapons: ["Greatsword of Fate", "Holy Sword of the Ark", "Noblesse Oblige"],
    buildTips: [
      "Utilize ataques carregados para quebrar a postura dos inimigos rapidamente.",
      "Aumente a Capacidade para conseguir usar peças de defesa pesadas sem ficar lento.",
      "Sempre recupere vida através do sistema de 'Guard Regain' após bloquear ataques."
    ],
    image: "https://placehold.co/600x800/0a0a0c/c2995b?text=Path+of+the+Sweeper"
  }
];