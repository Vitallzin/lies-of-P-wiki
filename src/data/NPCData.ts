//imports das imagens dos npcs
import geppetto from '../assets/img/NPC/Geppeto.webp';

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
}

export const NPCData: NPC[] = [
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
    isMerchant: false,
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
    isMerchant: false,
    image: "https://placehold.co/600x400/1a1a1e/c2995b?text=Sophia"
  }
];