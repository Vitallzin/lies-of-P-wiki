import geppetto from '../assets/img/characters/Geppeto.webp';

export interface Character {
  id: string;
  name: string;
  location: string;
  whereFind: string;
  quests: string[];
  descriptionQuests: string;
  trivia: string[];
  description: string;
  image: string;
  isDLC: boolean;
}

export const charactersData: Character[] = [
  {
    id: 'geppeto',
    name: "Geppetto",
    location: "Oficina de Krat",
    whereFind: "Encontrado na Oficina de Krat, onde ele trabalha.",
    quests: ["Aventura 1", "Aventura 2"],
    descriptionQuests: "Geppetto tem duas missões principais que ele pode ajudar P a completar.",
    trivia: ["Geppetto é o pai de P.", "Ele criou as marionetes."],
    description: "O pai de P e o criador das marionetes. Um homem envolto em mistérios que busca salvar a cidade de sua própria criação.",
    isDLC: false,
    image: geppetto
  },
  {
    id: '2',
    name: "Sophia",
    location: "Hotel Krat",
    whereFind: "Encontrada no Hotel Krat, onde ela trabalha.",
    quests: ["Aventura 3"],
    descriptionQuests: "Sophia tem uma missão principal que ela pode ajudar P a completar.",
    trivia: ["Sophia é uma ouvinte do Ergo.", "Ela auxilia P em sua jornada."],
    description: "Uma ouvinte do Ergo que auxilia P em sua jornada, permitindo que ele canalize Ergo para se tornar mais humano.",
    isDLC: false,
    image: "https://placehold.co/600x400/1a1a1e/c2995b?text=Sophia"
  }
];