


//imports das imagens sobreo os npcs no geral
import aboutNPCsImage from '../assets/img/NPC/abooutNPCs.webp';
import stargarazersImage from '../assets/img/NPC/stargazers.webp';
import stargarazersImage2 from '../assets/img/NPC/stargazers2.webp';
import increasingMerchantImage from '../assets/img/NPC/increasingMerchant.webp';
import increasingMerchantImage2 from '../assets/img/NPC/increasingMerchant2.webp';

export const aboutNPCs = {
  title: "NPCs em Lies of P",
  description: "Os NPCs em Lies of P são personagens não jogáveis que os jogadores encontram e com os quais podem interagir ao longo do jogo. Os NPCs desempenham um papel essencial, pois frequentemente fornecem informações e recursos úteis para ajudar o jogador em sua jornada. Os NPCs podem compartilhar detalhes da história para ajudar a compreender melhor o universo do jogo, podem oferecer missões secundárias, enquanto outros são classificados como comerciantes ou ferreiros, com quem você pode negociar ou solicitar determinados serviços. Esta página abordará todos os NPCs em destaque disponíveis em Lies of P, incluindo detalhes individuais sobre sua localização, informações sobre o universo do jogo e outras informações relevantes.",
  image: aboutNPCsImage
}
export const stargarazers = {
  title:"Observadores das estrelas em Lies of P",
  description:"Os Observadores das Estrelas são o equivalente às Fogueiras nos jogos da série Souls. Ao usar um Observador das Estrelas, o personagem do jogador recupera totalmente sua Saúde e Resistência, além de recarregar suas Células de Pulso. Eles também funcionam como um ponto de ressurreição sempre que o jogador morre. Ao interagir com um Observador das Estrelas, qualquer inimigo derrotado anteriormente será ressuscitado.",
  description2:'Após ativar um Stargazer, os jogadores podem se teletransportar livremente entre cada Stargazer ativado, o que lhes permite viajar rapidamente entre os locais do jogo. Quaisquer eventos ou NPCs presentes no local de um Stargazer serão indicados ao passar o cursor sobre ele no menu de teletransporte.',
  image: stargarazersImage,
  image2: stargarazersImage2
}
export const increasingMerchant ={
  titles:"Aumento da oferta de comerciantes em Lies of P",
  description:"As caixas de suprimentos de Krat são itens produzidos pela Prefeitura de Krat para fins de assistência humanitária. Você poderá encontrar vários tipos dessas caixas enquanto explora a cidade. Leve-as até Polendina, no hotel, e ele lhe oferecerá mais itens à venda, dependendo do tipo de caixa que você levar.",
  description2:"Assim como as Caixas de Suprimentos de Krat, as Caixas da Coleção Vengini podem ser encontradas ao explorar Lies of P. Essas caixas devem ser entregues a Pulcinella no hotel para ampliar seu inventário.",
  image: increasingMerchantImage,
  image2: increasingMerchantImage2
}
//imports das imagens dos npcs
import geppettoImage from '../assets/img/NPC/Geppeto.webp';
import pulcinellaImage from '../assets/img/NPC/Pulcinella.webp';
export interface MerchantItem {
  name: string;
  type: 'Consumable' | 'Material' | 'Liner' | 'Amulet' | 'Grindstone' | 'Weapon';
  cost: number | 'special'; // 'special' ou um número específico quando indicado com "?" nas imagens
  requiredCollection: 0 | 1 | 2 | 3; // Quantidade de caixas necessárias para liberar
  isNGPlus?: boolean; // Para os itens marcados como New Game +
}

export interface NPC {
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
  isMerchant: boolean;
  merchantInventory?: MerchantItem[]; // Nova propriedade para armazenar os itens expostos nas imagens
}

export const NPCData: NPC[] = [
  {
    id: 'pulcinella',
    name: 'Pulcinella',
    location: 'Hotel Krat',
    whereFind: 'Pode ser encontrado inicialmente desativado/quebrado ao lado do Stargazer do Centro de Obras de Venigni (Center of Venigni Works). Após ajudar Venigni, ele é totalmente restaurado e consertado, movendo-se para o Hotel Krat, onde fica localizado em uma alcova à direita de Sophia e em frente à oficina de Eugénie.',
    quests: [
      'Recuperar o Mordomo de Venigni',
      'Expandir o Estoque de Pulcinella (Coleta de Caixas de Coleção Venigni)'
    ],
    descriptionQuests: 'Ao relatar a Venigni que seu mordomo foi encontrado na fábrica, Pulcinella é consertado e passa a atuar como mercante no Hotel Krat. Seu estoque pode ser expandido até 3 vezes ao entregar caixas de Coleção Venigni escondidas pelo mundo:\n1. Incredible Venigni Collection (Área 6 - Entrada da Casa de Ópera Estella)\n2. Fancy Venigni Collection (Área 8 - Stargazer do Pântano Estéril)\n3. Great Venigni Collection (Área 10 - Stargazer do Campo de Batalha das Relíquias de Trismegistus).',
    trivia: [
      'Pulcinella é uma criação de Lorenzini Venigni e atua orgulhosamente como seu mordomo pessoal ("majordomo").',
      'Entregar as coleções para Pulcinella também permite que o jogador interaja com Venigni atrás dele para obter a Ferramenta de Modificação do Rebolo (Grindstone Modification Tool) e atualizar os Braços Legionários.'
    ],
    description: '"Buon giorno, and welcome to the house of Venigni. I am Master Venigni\'s majordomo. Pulcinella, at your service, sir." \n\nUm fantoche mordomo de alta classe e extrema educação, fiel ao seu criador Venigni. Ele gerencia o comércio de peças essenciais para alteração de cabos de armas, rebolos especiais e revestimentos de defesa no Hotel Krat.',
    image: pulcinellaImage,
    isDLC: false,
    isMerchant: true,
    merchantInventory: [
      // Base / 0 Collections Required
      { name: 'Advance Crank', type: 'Material', cost: 800, requiredCollection: 0 },
      { name: 'Balance Crank', type: 'Material', cost: 800, requiredCollection: 0 },
      { name: 'Electric Blitz Grindstone', type: 'Grindstone', cost: 1000, requiredCollection: 0 },
      { name: 'Motivity Crank', type: 'Material', cost: 800, requiredCollection: 0 },
      { name: 'Technique Crank', type: 'Material', cost: 800, requiredCollection: 0 },
      { name: 'Workshop Union Fiber-Reinforced Liner', type: 'Liner', cost: 500, requiredCollection: 0 },
      { name: 'Workshop Union Fiber-Reinforced Liner +1', type: 'Liner', cost: specialCost(), requiredCollection: 0, isNGPlus: true },
      { name: 'Workshop Union Multi-Layer Liner', type: 'Liner', cost: 500, requiredCollection: 0 },
      { name: 'Workshop Union Multi-Layer Liner +1', type: 'Liner', cost: specialCost(), requiredCollection: 0, isNGPlus: true },
      { name: 'Workshop Union Spaced Armor Liner', type: 'Liner', cost: 500, requiredCollection: 0 },
      { name: 'Workshop Union Spaced Armor Liner +1', type: 'Liner', cost: specialCost(), requiredCollection: 0, isNGPlus: true },

      // 1 Venigni Collection Required (Incredible Venigni Collection)
      { name: 'Acid Grindstone', type: 'Consumable', cost: 1280, requiredCollection: 1 },
      { name: 'Balance Crank x2', type: 'Material', cost: 1000, requiredCollection: 1 },
      { name: 'Belford Fiber-Reinforced Liner', type: 'Liner', cost: 1000, requiredCollection: 1 },
      { name: 'Belford Fiber-Reinforced Liner +1', type: 'Liner', cost: 3000, requiredCollection: 1, isNGPlus: true },
      { name: 'Belford Multi-Layer Liner', type: 'Liner', cost: 1000, requiredCollection: 1 },
      { name: 'Belford Multi-Layer Liner +1', type: 'Liner', cost: 3000, requiredCollection: 1, isNGPlus: true },
      { name: 'Belford Spaced Armor Liner', type: 'Liner', cost: 1000, requiredCollection: 1 },
      { name: 'Belford Spaced Armor Liner +1', type: 'Liner', cost: 3000, requiredCollection: 1, isNGPlus: true },
      { name: 'Carcass Butcher\'s Amulet', type: 'Amulet', cost: 1300, requiredCollection: 1 },
      { name: 'Indomitable Grindstone', type: 'Grindstone', cost: 1000, requiredCollection: 1 },
      { name: 'Motivity Crank x2', type: 'Material', cost: 1000, requiredCollection: 1 },
      { name: 'Technique Crank x2', type: 'Material', cost: 1000, requiredCollection: 1 },
      { name: 'Tyrant Murderer\'s Dagger', type: 'Weapon', cost: 2000, requiredCollection: 1 },

      // 2 Venigni Collections Required (Fancy Venigni Collection)
      { name: 'Advance Crank x2', type: 'Material', cost: 1500, requiredCollection: 2 },
      { name: 'Arch Fiber-Reinforced Liner', type: 'Liner', cost: 1700, requiredCollection: 2 },
      { name: 'Arch Fiber-Reinforced Liner +1', type: 'Liner', cost: specialCost(), requiredCollection: 2, isNGPlus: true },
      { name: 'Arch Multi-Layer Liner', type: 'Liner', cost: 1700, requiredCollection: 2 },
      { name: 'Arch Multi-Layer Liner +1', type: 'Liner', cost: specialCost(), requiredCollection: 2, isNGPlus: true },
      { name: 'Arch Spaced Armor Liner', type: 'Liner', cost: 1700, requiredCollection: 2 },
      { name: 'Arch Spaced Armor Liner +1', type: 'Liner', cost: specialCost(), requiredCollection: 2, isNGPlus: true },
      { name: 'Blue Guardianship Amulet', type: 'Amulet', cost: 1750, requiredCollection: 2 },
      { name: 'Destruction Grindstone', type: 'Grindstone', cost: 1000, requiredCollection: 2 },
      { name: 'Pistol Rock Drill', type: 'Weapon', cost: 3000, requiredCollection: 2 },
      { name: 'Satisfaction Grindstone', type: 'Grindstone', cost: 1000, requiredCollection: 2 },
      { name: 'Transformation Amulet', type: 'Amulet', cost: 1750, requiredCollection: 2 },

      // 3 Venigni Collections Required (Great Venigni Collection)
      { name: 'Advance Crank x2', type: 'Material', cost: 1900, requiredCollection: 3 },
      { name: 'Balance Crank x2', type: 'Material', cost: 1900, requiredCollection: 3 },
      { name: 'Durability Grindstone', type: 'Grindstone', cost: 1000, requiredCollection: 3 },
      { name: 'LADA Fiber-Reinforced Liner', type: 'Liner', cost: 2300, requiredCollection: 3 },
      { name: 'LADA Fiber-Reinforced Liner +1', type: 'Liner', cost: 6900, requiredCollection: 3, isNGPlus: true },
      { name: 'LADA Multi-Layer Liner', type: 'Liner', cost: 2300, requiredCollection: 3 },
      { name: 'LADA Multi-Layer Liner +1', type: 'Liner', cost: 6900, requiredCollection: 3, isNGPlus: true },
      { name: 'LADA Spaced Armor Liner', type: 'Liner', cost: 2300, requiredCollection: 3 },
      { name: 'LADA Spaced Armor Liner +1', type: 'Liner', cost: 6900, requiredCollection: 3, isNGPlus: true },
      { name: 'Motivity Crank x2', type: 'Material', cost: 1900, requiredCollection: 3 },
      { name: 'Perfection Grindstone', type: 'Grindstone', cost: 1000, requiredCollection: 3 },
      { name: 'Technique Crank x2', type: 'Material', cost: 1900, requiredCollection: 3 }
    ]
  },
  {
    id: 'geppetto',
    name: 'Giuseppe Geppetto',
    location: 'Alchemist Bridge, Krat City Hall', // Localização inicial extraída do painel lateral da imagem_1e5582.jpg
    whereFind: 'Pode ser encontrado logo após derrotar o chefe Burro Louco (Mad Donkey) na Ponte dos Alquimistas (Alchemist Bridge), perto do Stargazer da Prefeitura de Krat. Após o encontro, ele passa a residir em seu escritório no segundo andar do Hotel Krat. Ele também aparece fora do palco da Casa de Ópera Estella após derrotar o Rei dos Fantoches (King of Puppets), e mais tarde em Arche Abbey e Under the Abyss.', // Mapeado do histórico de localizações da imagem_1e5582.jpg
    quests: [
      'The Story of One Father (Troféu/Conquista)'
    ],
    descriptionQuests: 'Para desbloquear a conquista relacionada ao Geppetto, o jogador precisa alcançar o final do jogo e escolher a opção "Entregar o seu Coração" (Give your Heart). Após os créditos, selecione "Cancelar" para não iniciar o Novo Jogo+ (NG+) imediatamente. Você reaparecerá no Hotel Krat, onde poderá pegar e ler uma carta deixada na mesa do escritório de Geppetto.', // Detalhado conforme as instruções de desbloqueio da imagem_1e5582.jpg
    trivia: [
      'Giuseppe Geppetto é um engenheiro membro dos Alquimistas e seu trabalho inovador como o pai dos Fantoches lançou a cidade de Krat em uma era de ouro.', // Retirado do texto introdutório da imagem_1e5582.jpg
      'A partir do Patch 1.2.0.0, foi corrigido um bug onde o rosto de Geppetto piscava na cena cortada após derrotar o Fantoche Sem Nome (Nameless Puppet) ao usar predefinições de qualidade gráfica Baixa.' // Notas de patch contidas na imagem_1e5582.jpg
    ],
    description: '"Finally, We meet, son." \n\nO criador e pai de Pinóquio. Um engenheiro genial cujo conhecimento técnico moldou a era de ouro de Krat através da criação das marionetes, atuando como uma figura central que cruza o caminho de P durante toda a história.', // Baseado nas citações e lore da imagem_1e5582.jpg
    image: geppettoImage,
    isDLC: false,
    isMerchant: false
  }
];

// Função auxiliar apenas para representar os valores "?" contidos nos prints originais
function specialCost(): 'special' {
  return 'special';
}
