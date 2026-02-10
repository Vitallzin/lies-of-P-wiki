export interface Boss {
  id: string;
  name: string;
  location: string;
  difficulty: string;
  description: string;
  drops: string[];
  image: string;
}

export const bossesData: Boss[] = [
  {
    id: '1',
    name: "Parade Master",
    location: "Caminho para o Hotel Krat",
    difficulty: "Fácil",
    description: "A primeira marionete a perder o controle. Ele guarda a entrada da cidade, punindo aqueles que tentam entrar sem convite.",
    drops: ["Ergo de Líder do Desfile", "Cristal de Quartzo"],
    image: "https://placehold.co/600x400/1a1a1e/4a6fa5?text=Parade+Master"
  },
  {
    id: '2',
    name: "Scrapped Watchman",
    location: "Prefeitura de Krat",
    difficulty: "Média",
    description: "Uma marionete policial descartada que agora assombra o pátio da prefeitura, movida por uma voltagem instável e fúria.",
    drops: ["Núcleo", "Ergo de Sentinela Quebrado"],
    image: "https://placehold.co/600x400/1a1a1e/4a6fa5?text=Scrapped+Watchman"
  }
];