export interface Character {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  description: string;
  image: string;
}

export const charactersData: Character[] = [
  {
    id: '1',
    name: "Geppetto",
    role: "Criador",
    affiliation: "Oficina de Krat",
    description: "O pai de P e o criador das marionetes. Um homem envolto em mistérios que busca salvar a cidade de sua própria criação.",
    image: "https://placehold.co/600x400/1a1a1e/c2995b?text=Geppetto"
  },
  {
    id: '2',
    name: "Sophia",
    role: "Guia",
    affiliation: "Hotel Krat",
    description: "Uma ouvinte do Ergo que auxilia P em sua jornada, permitindo que ele canalize Ergo para se tornar mais humano.",
    image: "https://placehold.co/600x400/1a1a1e/c2995b?text=Sophia"
  }
];