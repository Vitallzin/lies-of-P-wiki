


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
import rosauraImage from '../assets/img/NPC/rosaura.webp';
import goddardImage from '../assets/img/NPC/goddard.webp';
import crusherPuppetImage from '../assets/img/NPC/crusherPuppe.webp';
import salaoTheOldFishermanImage from '../assets/img/NPC/salaoTheOldFisherman.webp';
import bloodiedManImage from '../assets/img/NPC/bloodiedMan.webp';
import lumacchioImage from '../assets/img/NPC/lumacchio.webp';
import forsakenArchePuppetImage from '../assets/img/NPC/forsakenArchePuppet.webp';
import sweeperSurvivorImage from '../assets/img/NPC/sweeperSurvivor.webp';
import theTrackerImage from '../assets/img/NPC/theTracker.webp';
import leaImage from '../assets/img/NPC/lea.webp';
import klausImage from '../assets/img/NPC/klaus.webp';
import wanderingMerchantImage from '../assets/img/NPC/wanderingMerchant.webp';
import adelinaImage from '../assets/img/NPC/adelina.webp';
import antoniaImage from '../assets/img/NPC/antonia.webp';
import arlecchinoImage from '../assets/img/NPC/arlecchino.webp';
import belleImage from '../assets/img/NPC/belle.webp';
import blackCatImage from '../assets/img/NPC/blackCat.webp';
import cecileImage from '../assets/img/NPC/cecile.webp';
import eugenieImage from '../assets/img/NPC/eugenie.webp';
import geminiImage from '../assets/img/NPC/gemini.webp';
import infectedManImage from '../assets/img/NPC/infectedMan.webp';
import julianTheGentlemanImage from '../assets/img/NPC/julianTheGentleman.webp';
import oldLadyAtTheWindowImage from '../assets/img/NPC/oldLadyAtTheWindow.webp';
import redFoxImage from '../assets/img/NPC/redFox.webp';
import simonManusImage from '../assets/img/NPC/simonManus.webp';
import sophiaImage from '../assets/img/NPC/sophia.webp';
import springImage from '../assets/img/NPC/spring.webp';
import theAtonedImage from '../assets/img/NPC/theAtoned.webp';
import tomaImage from '../assets/img/NPC/toma.webp';
import venigniImage from '../assets/img/NPC/venigni.webp';
import whiteLadyImage from '../assets/img/NPC/whiteLady.webp';
import weepingWomanImage from '../assets/img/NPC/weepingWwoman.webp';
import brokenPuppetImage from '../assets/img/NPC/brokenPuppet.webp';
import polendinaImage from '../assets/img/NPC/polendina.webp';
import alidoroImage from '../assets/img/NPC/alidoro.webp';
import giangioImage from '../assets/img/NPC/giangio.webp';
import rookieExplorerHugoImage from '../assets/img/NPC/rookieExplorerHugo.webp';
import testSubject826Image from '../assets/img/NPC/testSubject826.webp';

export interface QuestEntry {
  name: string;
  description?: string;
}
export interface MerchantItem {
  name: string;
  type: string;
  cost: number | 'special'; // 'special' ou um número específico quando indicado com "?" nas imagens
  requiredCollection: 0 | 1 | 2 | 3; // Quantidade de caixas necessárias para liberar
  isNGPlus?: boolean; // Para os itens marcados como New Game +
  isDLC?: boolean;
}

export interface ShopInventoryItem {
  itemName: string;
  itemType: string;
  cost: number | string;
  required: string;
  isDLC?: boolean;
}

export interface RareErgoInventoryItem {
  name: string;
  type: string;
  price: string;
  isDLC?: boolean;
}

export interface AncientDiskInventoryItem {
  name: string;
  type: string;
  amount: number | string;
  price: number | string;
  required: string;
  isDLC?: boolean;
}

export interface WanderingMerchantItem {
  name: string;
  type: string;
  amount: number | string;
  price: string;
  required?: string;
  isDLC?: boolean;
}

export interface WanderingMerchantInventory {
  shopLocation: string;
  items: WanderingMerchantItem[];
  note?: string;
}

export interface WanderingMerchantLocation {
  chapter: string;
  name: string;
  detail: string;
}

export interface WanderingMerchantSection {
  locations: WanderingMerchantLocation[];
  quests?: QuestEntry[];
  info: string[];
  inventories: WanderingMerchantInventory[];
}

export interface NPC {
  id: string;
  name: string;
  location: string;
  whereFind: string;
  quests: Array<string | QuestEntry>;
  descriptionQuests: string;
  trivia: string[];
  speak?: string; // Nova propriedade para armazenar a fala do NPC, se disponível
  description: string;
  image: string;
  isDLC: boolean;
  isMerchant: boolean;
  merchantInventory?: MerchantItem[]; // Nova propriedade para armazenar os itens expostos nas imagens
  shopInventory?: ShopInventoryItem[];
  inventoryRareErgo?: RareErgoInventoryItem[];
  inventoryAncientDisks?: AncientDiskInventoryItem[];
  isMixedContent?: boolean;
  baseGame?: WanderingMerchantSection;
  dlc?: WanderingMerchantSection;
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
    speak: '"Buon giorno, and welcome to the house of Venigni. I am Master Venigni\'s majordomo. Pulcinella, at your service, sir."',
    description: 'Um fantoche mordomo de alta classe e extrema educação, fiel ao seu criador Venigni. Ele gerencia o comércio de peças essenciais para alteração de cabos de armas, rebolos especiais e revestimentos de defesa no Hotel Krat.',
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
    speak: '"Finally, We meet, son."',
    description: 'O criador e pai de Pinóquio. Um engenheiro genial cujo conhecimento técnico moldou a era de ouro de Krat através da criação das marionetes, atuando como uma figura central que cruza o caminho de P durante toda a história.', // Baseado nas citações e lore da imagem_1e5582.jpg
    image: geppettoImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'rosaura',
    name: 'Rosaura',
    location: 'Carnival Garden', // Extraído do painel lateral da imagem_dd246a.jpg
    whereFind: 'Encontrada inicialmente no Jardim do Carnaval (Carnival Garden), sentada em um baú de madeira diretamente a nordeste do Stargazer perto do Carnaval. Posteriormente, ela pode ser encontrada novamente no Local de Escavação de Ergo (Ergo Excavation Site), no Farol de Krat (Krat Lighthouse) e, após concluir a DLC, no Pátio da Prefeitura de Krat (Krat City Hall Courtyard).',
    quests: [
      "Rosaura's Red Shoes" // Extraído da seção de missões relacionadas da imagem_dd246a.jpg
    ],
    descriptionQuests: 'Falar com ela inicia a missão "Rosaura\'s Red Shoes", onde ela pede ajuda para encontrar seus sapatos para que possa ser "livre". Ao entregar os Rose Shoes, você recebe "Rosaura\'s Treasure: Piece of a Drawing" e Lisrim. No segundo encontro, ela pede Ergo (qualquer consumível serve) e te recompensa com um Heart, "Rosaura\'s Treasure: Ruins Secret Gathering Invitation" e "Rosaura\'s Treasure: Second Piece of a Drawing". No terceiro encontro (Krat Lighthouse), ela entrega "Rosaura\'s Treasure: Photo of the Tree of Friendship" e a terceira parte do desenho. Por fim, no pátio da prefeitura após a DLC, ela derruba a última parte do desenho, combinando-os no "Drawing of a Family".',
    trivia: [
      'Rosaura é uma NPC exclusiva da expansão Overture, mas que passa a aparecer no jogo base assim que sua respectiva linha de missões é totalmente concluída.',
      'Ela reage de forma interativa caso o jogador execute os gestos Greet, Tap Dance ou Heart na frente dela.'
    ],
    speak:'"Hello. Rosaura wants to be your friend. Will you be my friend?"',
    description: '"Hello. Rosaura wants to be your friend. Will you be my friend?" \n\nUma misteriosa NPC exclusiva da expansão Overture que busca desesperadamente por amizade e liberdade. Ela guia o jogador por uma caça ao tesouro em várias etapas, distribuindo pedaços de um desenho que reconstrói memórias de sua família.',
    image: rosauraImage,
    isDLC: true, // Marcado como true pois é exclusiva da DLC Overture
    isMerchant: false
  },
  {
    id: 'goddard_the_blind_painter',
    name: 'Goddard, the Blind Painter',
    location: 'Zoo Tram Station',
    whereFind: 'Pode ser encontrada na Estação de Bondinho do Zoológico (Zoo Tram Station).',
    speak: "Hello? Is someone there?",
    quests: [
      'A Blank Canvas'
    ],
    descriptionQuests: 'Ao interagir com ela, se ela perguntar o que você vê ao olhar para sua pintura, escolha a opção "Incredible! It is a brilliant work of art." para não ser bloqueado de sua linha de missões. Seus suprimentos de arte (Goddard\'s Art Supplies) podem ser encontrados em uma mesa na Zona de Pesquisa do Elixir (Elixir Research Zone); devolva-os para receber um Dim Ergo Chunk. No final da DLC Overture, visite-a novamente na estação para coletar os itens "Painter\'s Sky" e "To the One Within the Darkness", que recompensam você com "The Clear Blue Sky" para interagir com a pintura no Hotel Krat atacado. Se avançar para o final sem entregar os suprimentos, ela não estará na cadeira e a missão ficará incompleta.',
    trivia: [
      'Ela já foi uma Alquimista de alto escalão com o propósito de dedicar sua vida à evolução humana, mas um acidente de laboratório danificou severamente seus olhos.',
      'O acidente acabou sendo uma bênção disfarçada, pois enquanto tropeçava na escuridão, ela encontrou uma pintura que lhe revelou o Caminho da Verdade através da arte.'
    ],
    description: 'Uma NPC e pintora cega exclusiva da expansão Overture, que não aparece no jogo base. Antiga membra dedicada dos Alquimistas que encontrou um novo propósito espiritual e artístico após perder a visão em um trágico acidente.',
    image: goddardImage,
    isDLC: true,
    isMerchant: false
  },{
    id: 'crusher_puppet',
    name: 'Crusher Puppet',
    location: 'Excavation Site',
    whereFind: 'Encontrado inicialmente no Local de Escavação (Excavation Site), onde você cruzará o caminho dele três vezes. Mais tarde, ele pode ser encontrado novamente no Porto Pistris (Pistris Harbor), controlando o Cérebro em uma Cuba (Brain in a Vat).',
    speak: "If you can hear me, please! I need your help. Follow my voice!",
    quests: [
      'Trapped Body'
    ],
    descriptionQuests: 'Ao encontrá-lo no Excavation Site, ele revela que está controlando o fantoche de longe e pede ajuda para achar seu corpo real preso nas ruínas. No terceiro encontro nas ruínas, perguntar sobre sua identidade faz ele revelar que seu nome real é Alexander e que era um Alquimista encarregado de um experimento crucial. Ele explica que, após um encontro conturbado com a filha de um Alquimista influente cujo pai não aprovava, uma confusão começou e alguém colocou um saco em sua cabeça, acordando preso em um lugar escuro. Mais tarde, em Pistris Harbor, ao interagir com ele como um Cérebro em uma Cuba, você pode revelar a verdade sobre o que ele se tornou. Ele negará no início, mas aceitará e dirá que não há esperança, pedindo para você desligar a máquina. Se escolher ajudar desligando o aparelho, ele agradece, revela seu nome completo (Alexander Goodman, inventor e primeiro espécime de sucesso da Máquina Mindkeeper) e você recebe o disco Nightmare.',
    trivia: [
      'Alexander Goodman foi o inventor e também o primeiríssimo sujeito de teste bem-sucedido do projeto da Máquina Mindkeeper.',
      'Antes de toda a situação sair de controle na cidade, ele era o Alquimista de alto escalão responsável por supervisionar um experimento de extrema importância.'
    ],
    description: 'Um NPC exclusivo da expansão Overture que não aparece no jogo base. Trata-se de um cientista preso que se comunica de forma remota através de um fantoche esmagador com mau funcionamento, guiando o jogador pelas ruínas em busca de seu corpo verdadeiro enquanto revela segredos trágicos sobre seu passado como Alquimista.',
    image: crusherPuppetImage,
    isDLC: true,
    isMerchant: false
  },{
    id: 'salao_the_old_fisherman',
    name: 'Salao, the Old Fisherman',
    location: 'Shipwreck Exterior',
    whereFind: 'Pode ser encontrado inicialmente na área externa do naufrágio (Shipwreck Exterior).',
    speak: "O Fish! I have won. I caught you!",
    quests: [
      "Salao's Last Request"
    ],
    descriptionQuests: 'Ao interagir com Salao no Shipwreck Exterior, ele conta que todos duvidavam dele e diz ser o último pescador de Krat. Ele afirma ter lutado contra um peixe monstro por três dias e três noites sem comida ou sono, capturando-o com as próprias mãos. Ao perguntar se precisa de ajuda, ele pede para você ir até a vila encontrar Manolin para avisar sobre a captura e coletar uma cerveja. A Garrafa de Cerveja Velha (Old Bottle of Beer) pode ser encontrada no Farol de Krat (Krat Lighthouse). Após obtê-la, retorne a Salao, que perguntará se você elogiou sua captura para os moradores e para Manolin. Escolha a opção "Everyone was impressed with your catch" (a outra opção diz que todos na vila estão mortos) para fazê-lo dizer que pegou o peixe para dar uma lição de vida a Manolin. Após a conversa, Salao falece e você recebe a Chave Desgastada do Pescador (Fisherman\'s Weathered Key), que serve para abrir a porta da frente da casa dele perto do Farol de Krat, onde está a Carta do Velho Pescador (Old Fisherman\'s Letter) em cima da cama.',
    trivia: [
      'Salao orgulhosamente se autointitula o último pescador da cidade de Krat.',
      'Apesar do ceticismo de todos os moradores que diziam que ele nunca pegaria um único peixe, ele insistia que nem mesmo a maior das criaturas marinhas seria capaz de derrotá-lo.'
    ],
    description: 'Um NPC idoso exclusivo da expansão Overture que não aparece no jogo base. Um pescador obstinado localizado nos arredores de um naufrágio que, movido pelo desejo de provar seu valor e deixar um legado para Manolin, passa seus últimos momentos celebrando uma exaustiva vitória contra um monstro marinho.',
    image: salaoTheOldFishermanImage,
    isDLC: true,
    isMerchant: false
  },{
    id: 'bloodied_man',
    name: 'Bloodied Man',
    location: 'Hall of Adventure',
    whereFind: 'Pode ser encontrado no canto da varanda no Salão da Aventura (Hall of Adventure).',
    speak: "Madam Stalker... Is it you...? You've come back?",
    quests: [], // Indicado como N/A na imagem
    descriptionQuests: 'Ao subir para o segundo andar, o jogador ouve alguém pedindo ajuda. Ao interagir com o Bloodied Man, ele inicialmente confunde o jogador com uma Stalker de cabelos vermelhos ("Madam Stalker"), acreditando que ela voltou para salvá-lo. Ele reflete sobre seu destino trágico, admitindo que foi cegado pela ganância e ambição antes de receber seu ferimento mortal. Antes de morrer, ele revela uma pista localizada no Centro de Experiência Savanna (Savanna Experience Center) e implora para que você vá até lá. Como último pedido, ele pede que, caso encontre a Stalker de cabelos vermelhos, agradeça a ela e diga que nada disso foi culpa dela. Após ele falecer, você recebe o colecionável "MISSING: Romeo".',
    trivia: [
      'O Bloodied Man foi resgatado e levado para a segurança no passado por uma Stalker de cabelos vermelhos, a quem ele se refere carinhosamente como Madam Stalker.',
      'Sua ganância e ambição por uma recompensa financeira foram o que diretamente o guiaram até o seu trágico fim e ferimento mortal.'
    ],
    description: 'Um NPC agonizante exclusivo da expansão Overture que não aparece no jogo base. Encontrado gravemente ferido em uma varanda, ele confunde o protagonista com sua antiga salvadora e usa seus últimos suspiros para compartilhar uma pista crucial sobre o Savanna Experience Center e expressar seu arrependimento profundamente doloroso.',
    image: bloodiedManImage,
    isDLC: true,
    isMerchant: false
  },{
    id: 'lumacchio',
    name: 'Lumacchio',
    location: 'Eventide Hotel Krat, Ancient Ruins Excavation Site',
    whereFind: 'Pode ser encontrado inicialmente ao lado do balcão de recepção no Eventide Hotel Krat e, posteriormente, perto do Stargazer do Local de Escavação das Ruínas Antigas (Ancient Ruins Excavation Site).',
    speak: "Well, if it isn't the lad who stalks the Legendary Stalker! I didn't see you there.",
    quests: [], // Indicado como N/A na imagem
    descriptionQuests: 'Ao encontrá-lo no Eventide Hotel Krat, falar com ele garante uma Cápsula de Revestimento de Rebolo (Grindstone Coating Capsule). Quando localizado no Ancient Ruins Excavation Site, ele pergunta se você está ferido e reflete sobre a tragédia na Instalação Subterrânea Zelator (Zelator Underground Facility), lamentando o terrível destino de Veronique. Ele questiona se ela disse algo antes de morrer, abrindo duas opções de diálogo: "She said nothing." ou "She said follow Lea". Escolhendo a primeira, Lumacchio lamenta ouvir isso. Perguntar a ele sobre como chegar à Propriedade Rose (Rose Estate) fará com que ele te entregue a Chave das Ruínas Secretas (Secret Ruins Key).',
    trivia: [
      'Lumacchio reage de forma interativa caso o jogador execute o gesto Promessa do Espreitador (Stalker\'s Promise) na frente dele.',
      'Ele também é conhecido pelo título ou associação de Líder dos Bastardos (Leader of the Bastards).'
    ],
    description: 'Um NPC exclusivo da expansão Overture que não aparece no jogo base. Usando uma máscara dourada ornamentada, ele serve como um elo de informações para o protagonista, oferecendo chaves de acesso a novas áreas e reagindo a eventos trágicos envolvendo outros personagens da trama de expansão.',
    image: lumacchioImage,
    isDLC: true,
    isMerchant: false
  },{
    id: 'forsaken_arche_puppet',
    name: 'Forsaken Arche Puppet',
    location: 'Greenhouse Outdoor Garden',
    whereFind: 'Pode ser encontrado caído no chão em um corredor estreito, perto do Stargazer que fica próximo ao Jardim Externo da Estufa (Greenhouse Outdoor Garden).',
    speak: "M-my... eternal master... rules this zoo...",
    quests: [],
    descriptionQuests: 'Ao interagir com o Forsaken Arche Puppet, sua voz apresenta falhas e gagueiras enquanto ele tenta impedir a passagem do jogador, apesar de seu estado totalmente quebrado. Ele consegue dizer que a entrada no zoológico é proibida sem a permissão de seu mestre, Markiona, que é quem governa e dita as regras sobre o zoológico.',
    trivia: [
      'O fantoche serve e obedece cegamente a uma entidade ou mestre chamado Markiona.',
      'Mesmo estando severamente danificado e caído em um corredor, seus protocolos de programação originais continuam ativos, forçando-o a tentar barrar intrusos verbalmente.'
    ],
    description: 'Um NPC danificado exclusivo da expansão Overture que não aparece no jogo base. Trata-se de um fantoche caído e em ruínas localizado nos arredores da estufa que, mesmo à beira da desativação completa, tenta proteger a entrada do zoológico em nome de seu mestre eterno.',
    image: forsakenArchePuppetImage,
    isDLC: true,
    isMerchant: false
  },
  {
    id: 'sweeper_survivor',
    name: 'Sweeper Survivor',
    location: 'Zelator Underground Facility',
    whereFind: 'Pode ser encontrado em um quarto trancado perto do Stargazer da Instalação Subterrânea Zelator (Zelator Underground Facility).',
    speak: "No! Mercy... Please, don't kill me! Please!",
    quests: [],
    descriptionQuests: 'Ao interagir com o Sweeper Survivor em um quarto trancado, ele revela que já fez parte da vanguarda de Veronique. Ele conta que seu grupo sofreu uma emboscada por Alquimistas e que foram drogados à força. Ele fala com muito medo sobre a Espreitadora Lendária (Legendary Stalker), alegando que ela o abandonou para ir mais fundo na instalação. Ele admite ter tentado matá-la duas vezes no passado, mas agora se arrepende profundamente disso e se autodenomina um tolo. Perturbado pelas substâncias injetadas nele, ele acredita que está lentamente se transformando em um monstro. Se você descansar em um Stargazer e retornar ao local do Sweeper Survivor, descobrirá que ele faleceu.',
    trivia: [
      'Ele fez parte do grupo de vanguarda liderado por Veronique antes de sofrerem uma emboscada.',
      'Por conta de perturbações mentais decorrentes de drogas injetadas à força pelos Alquimistas, ele tentou assassinar a Espreitadora Lendária em duas oportunidades.'
    ],
    description: 'Um NPC traumatizado exclusivo da expansão Overture que não aparece no jogo base. Encontrado trancado e à beira da morte em um complexo subterrâneo, ele expressa profundo pânico e arrependimento por traições passadas causadas pela paranoia e pelos efeitos colaterais de substâncias químicas forçadas nele pelos Alquimistas.',
    image: sweeperSurvivorImage,
    isDLC: true,
    isMerchant: false
  },{
    id: 'the_tracker',
    name: 'The Tracker',
    location: 'Elixir Research Zone',
    whereFind: 'Encontrado inicialmente perto do Stargazer da Zona de Pesquisa do Elixir (Elixir Research Zone). Ele eventualmente se muda para o Eventide Hotel Krat após o jogador derrotar o chefe Supervisor de Duas Faces (Two-Face Overseer).',
    speak: "I suppose I should expect to meet strange people in such a strange place...",
    quests: [],
    descriptionQuests: 'No primeiro encontro, ele explica que está rastreando uma relíquia perigosa desenterrada pelos Alquimistas e te entrega a "Daylight - Wreathed Horn" para invocá-lo como um Espectro contra o Two-Faced Overseer. Após derrotar o chefe, ele se muda para o Eventide Hotel Krat e pode decifrar Cipher Machines coletadas pelo mundo:\n\n' +
      '1. Bloody Cipher Machine: Obtida após o Two-Faced Overseer. Leve a decodificação ao segundo andar do Hall of Adventure para abrir a boca da exibição do crocodilo, pegando o relatório "Confession: Crocodile Necropsy Report". Recompensa: Whirlwind Amulet.\n' +
      '2. Corroded Cipher Machine: Obtida de um inimigo elite no Ergo Mining Site. A decodificação revela uma parede quebrável com explosivos na 3ª localização do Crusher Puppet, escondendo o diário "The Misfit\'s Diary". Recompensa: Ancient Disk.\n' +
      '3. Frosted Cipher Machine: Obtida em um cofre no Archon Fleet Shipwreck (após derrotar Lumacchio). Compre o Giant\'s Amulet no Mercante Errante para pisar em um painel de peso no Farol de Krat (Krat Lighthouse), revelando o "Lighthouse Keeper\'s Journal". Recompensa: Famed Detective\'s Coat e Famed Detective\'s Hat.\n\n' +
      'Ao resolver todas, escolha a opção de diálogo "They will be, and Krat will be saved" para receber o disco Survivor e o troféu "Tracker of Dark Secrets".',
    trivia: [
      'The Tracker atua como uma invocação de Espectro (Specter) na luta contra o Two-Faced Overseer se o jogador usar a corneta dada por ele, podendo ser curado e bufado com Wishstones.',
      'Se você falar com ele empunhando a arma Two Dragons Sword, ele fará um comentário especial e te presenteará com uma Dark Moon Moonstone of the Covenant.',
      'Ele reage de forma interativa caso o jogador execute o gesto Shiver, ou se estiver equipando os trajes Treasure Hunter\'s Mask e Treasure Hunter\'s Hunting Apparel.'
    ],
    description: 'Um NPC caçador com aparência canina exclusivo da expansão Overture que não aparece no jogo base. Ele assume o papel de decifrador de segredos antigos para o jogador no Hotel Krat, ajudando a revelar conspirações profundas dos Alquimistas através de dispositivos criptografados.',
    image: theTrackerImage,
    isDLC: true,
    isMerchant: false
  },
  {
    id: 'lea_the_legendary_stalker',
    name: 'Lea',
    location: 'Pleroma Forest Cave',
    whereFind: 'Pode ser encontrada dentro de uma pequena casa na Caverna da Floresta Pleroma (Pleroma Forest Cave). A partir do Farol de Krat (Krat Lighthouse), desça as escadas e siga o caminho que leva à Propriedade Rose (Rose Estate) até aparecer "Pleroma Forest" na tela; continue pelo caminho principal até avistar a casa à esquerda.',
    speak: "I swear I won't be late. Not again. Not like I was with Carlo...",
    quests: [],
    descriptionQuests: 'No primeiro encontro, esgote todos os diálogos para receber o Cartaz Danificado (Damaged Poster) e pegue o Testamento de Lea (Lea\'s Will) em cima da mesa. Ao chegar à Casa de Caridade Monad (Monad Charity House), os braços de Romeo aparecerão pendurados no teto em uma cena; após a cena, recolha a Carta de Romeo (Romeo\'s Letter) e a Foto Salpicada de Sangue (Blood-Splattered Photo) no chão ao lado de Lea. Na área de chefe contra Arlecchino, o Artista de Sangue (Arlecchino, the Blood Artist), Lea se junta a você como aliada. Derrotando-o, você ganha a Chave do Quarto Secreto (Secret Room Key), Máscara do Líder (Leader\'s Mask), Traje de Batalha do Líder (Leader\'s Battle Apparel) e a Espada de Rose de Monad (Monad\'s Rose Sword). Após concluir a DLC Overture, vá ao Eventide Hotel Krat, siga as borboletas até o jardim, use a chave para abrir o portão e entre no quarto dela para encontrar a Recordação de Lea (Lea\'s Recollection) e Memórias de Dias Calmos (Memory of Halcyon Days); ouça a Recordação para receber o disco Survivor (Red).',
    trivia: [
      'Seu nome completo é Lea Florence Monad, e ela é amplamente conhecida pelo título de Espreitadora Lendária (Legendary Stalker).',
      'Ela foi a dona anterior do Gemini e aceitou no passado dois aprendizes muito conhecidos na lore do jogo: Carlo e Romeo.',
      'A dubladora oficial responsável por dar a voz à personagem é Alix Wilton Regan.'
    ],
    description: 'Uma figura central e lendária exclusiva da expansão Overture que não aparece no jogo base. Antiga mentora de Carlo e Romeo, ela carrega traumas profundos do passado e se une diretamente ao protagonista como aliada de combate na conclusão de sua jornada trágica contra Arlecchino.',
    image: leaImage,
    isDLC: true,
    isMerchant: false
  },{
    id: 'klaus_the_merchant',
    name: 'Klaus',
    location: 'Eventide Hotel Krat',
    whereFind: 'Pode ser encontrado estacionado no Eventide Hotel Krat.',
    speak: "Well, if it isn't the lad who stalks the Legendary Stalker! I didn't see you there.", // Nota: Apesar de o texto descritivo na imagem mostrar a fala "Well met, Master Stalker! Are you well?", a legenda oficial em vermelho cita a fala acima.
    quests: [], // Indicado como N/A na imagem
    descriptionQuests: 'Klaus atua como o comerciante de Ergo Raro e Discos Antigos (Ancient Disks) na DLC. Você pode expandir sua loja entregando dois itens: a Bolsa de Luxo de Klaus (Klaus\'s Luxury Bag), localizada na Elixir Research Zone (recompensa: x1 Gemini\'s Enhanced Detection), e a Bolsa de Luxo Premium de Klaus (Klaus\'s Premium Luxury Bag), localizada no Shipwreck Exterior (recompensa: x1 Miraculous Enhancement Ampoule). A ordem de entrega não importa, mas ambas devem ser devolvidas antes de derrotar o chefe final da DLC para expandir totalmente o estoque. Atenção: Não existem Discos Antigos suficientes para comprar todo o inventário em uma única jogada, então escolha com sabedoria!',
    trivia: [
      'Ele compartilha a mesma função mecânica de troca de Ergo Raro que o NPC Alidoro possui no jogo base.',
      'Executar os gestos Promessa do Espreitador (Stalker\'s Promise) ou Dúvida (Doubt) na frente dele gera reações únicas e exclusivas.'
    ],
    description: 'Um comerciante misterioso que usa uma máscara felina ornamentada, exclusivo da expansão Overture. Ele vende armas especiais, amuletos poderosos, materiais raros de melhoria e itens cosméticos em troca de tesouros encontrados na DLC.',
    image: klausImage,
    isDLC: true,
    isMerchant: true,
    inventoryRareErgo: [
      { name: 'Seven-Coil Spring Sword', type: 'Weapons', price: "Parade Leader's Ergo" },
      { name: "Morbid Ambition's Amulet", type: 'Amulets', price: "Macabre Puppeteer's Ergo" },
      { name: 'Impregnable Fortress Amulet', type: 'Amulets', price: "Sad Zealot's Ergo" },
      { name: 'Triumvirate Amulet', type: 'Amulets', price: "Burnt-White King's Ergo" },
      { name: 'Arm of God Amulet', type: 'Amulets', price: "Reborn Champion's Ergo" },
      { name: 'Ghost Walk Amulet', type: 'Amulets', price: "Puppet-Devouring Green Hunter's Ergo" },
      { name: "Dancing One's Amulet", type: 'Amulets', price: "Parade Leader's Ergo" },
      { name: "Nameless One's Amulet", type: 'Amulets', price: "Twisted Angel's Ergo" },
      { name: 'Piercing Hatred Amulet', type: 'Amulets', price: "Nameless Puppet's Ergo" },
      { name: 'Trident of the Covenant', type: 'Weapons', price: "Twisted Angel's Ergo" },
      { name: 'Two Dragons Sword', type: 'Weapons', price: "Puppet-Devouring Green Hunter's Ergo" },
      { name: 'Proof of Humanity', type: 'Weapons', price: "Nameless Puppet's Ergo" },
      { name: "Nightmare's Amulet", type: 'Amulets', price: "Tortured Guardian's Ergo" },
      { name: "Awakened God's Amulet", type: 'Amulets', price: "Fallen One's Ergo" },
      { name: 'Conquering Amulet', type: 'Amulets', price: "King's Flame Ergo" },
      { name: 'Pale Knight', type: 'Weapons', price: "Tortured Guardian's Ergo" },
      { name: "Death's Talons", type: 'Weapons', price: "Macabre Puppeteer's Ergo" }
    ], // Mapeado diretamente da Captura de tela 2026-06-17 153632.jpg
    inventoryAncientDisks: [
      { name: 'Resplendent Ergo Crystal', type: 'Ergo', amount: 3, price: 1, required: '-' },
      { name: 'Ergo Crystal of the Eternal', type: 'Ergo', amount: 3, price: 1, required: 'NG+ only' },
      { name: 'Legion Caliber', type: 'Materials', amount: 1, price: 1, required: '-' },
      { name: 'Legion Caliber', type: 'Materials', amount: 2, price: 1, required: '1 Luxury Bag' },
      { name: 'Legion Caliber', type: 'Materials', amount: 2, price: 1, required: '2 Luxury Bags' },
      { name: 'Quartz', type: 'Materials', amount: 1, price: 1, required: '-' },
      { name: 'Quartz', type: 'Materials', amount: 1, price: 1, required: '1 Luxury Bag' },
      { name: 'Quartz', type: 'Materials', amount: 1, price: 1, required: '2 Luxury Bags' },
      { name: 'Full Moonstone', type: 'Materials', amount: 1, price: 1, required: '1 Luxury Bag' },
      { name: 'Full Moonstone of the Covenant', type: 'Materials', amount: 1, price: 1, required: '2 Luxury Bags' },
      { name: 'Plundering Amulet', type: 'Amulets', amount: 1, price: 1, required: '1 Luxury Bag' },
      { name: "Famous Detective's Mustache", type: 'Costume', amount: 1, price: 1, required: '2 Luxury Bags' },
      { name: 'Great Adventure Mask', type: 'Costume', amount: 1, price: 1, required: '1 Luxury Bag' },
      { name: "Veteran's Eyepatch", type: 'Costume', amount: 1, price: 1, required: '1 Luxury Bag' },
      { name: 'Bell Collar', type: 'Recollections', amount: 1, price: 1, required: '-' },
      { name: 'Nightmare (Gold)', type: 'Records', amount: 1, price: 1, required: 'NG+ only / 1 Luxury Bag' }
    ] // Mapeado diretamente da Captura de tela 2026-06-17 154139.jpg
  },
  {
    id: 'wandering_merchant',
    name: 'Wandering Merchant',
    speak: "Hello there! Welcome to Krat, Visitor!",
    location: 'Krat e Overture',
    whereFind: 'Aparece em diversos pontos do jogo base, como Krat Central Station Plaza, Elysion Boulevard, Malum District, Lorenzini Arcade, Abandoned Apartment e Collapsed Street. Na expansao Overture, tambem aparece em Carnival Garden e Sea Cliffs.',
    quests: [
      { name: 'Mechanical Cryptic Vessel', description: 'Relacionado ao encontro em Collapsed Street sob certas condicoes.' }
    ],
    descriptionQuests: 'O Wandering Merchant atua como um mercante itinerante com lojas diferentes por area. No jogo base, ele vende suprimentos, armas, amuletos, conversores e discos raros. Na expansao Overture, ele tambem vende itens exclusivos da DLC em Carnival Garden e Sea Cliffs.',
    trivia: [
      'Ele muda seu inventario conforme a localizacao em que e encontrado.',
      'No Malum District, ele pode exigir suborno, Smiling Bunny Mark ou progresso no chefe da area para liberar comercio.',
      'Seu conteudo mistura jogo base e DLC; por isso, os itens da expansao sao destacados em azul no site.'
    ],
    isDLC: false,
    isMixedContent: true, // Flag personalizada para seu site identificar que ele usa as duas cores
    isMerchant: true,
    image: wanderingMerchantImage,
    
    // ==========================================
    // CONTEÚDO DO JOGO BASE (Cor Padrão do Site)
    // ==========================================
    baseGame: {
      locations: [
        { chapter: 'Chapter I', name: 'Krat Central Station Plaza', detail: 'Cerasani Alley - em frente à arena de chefe.' },
        { chapter: 'Chapter II', name: 'Inside the House on Elysion Boulevard', detail: 'Na sala à esquerda do Stargazer da área.' },
        { chapter: 'Chapter V', name: 'Malum District', detail: 'No 2º andar da Red Lobster Inn, ao lado do Stargazer.' },
        { chapter: 'Chapter VII', name: 'Lorenzini Arcade', detail: 'Próximo a uma fonte, em uma área que serve de atalho entre o Stargazer e um longo corredor ocupado por dois Hulking Carcasses.' },
        { chapter: 'Chapter IX', name: 'Abandoned Apartment', detail: 'No 2º andar da casa onde fica o Stargazer.' },
        { chapter: 'Chapter IX', name: 'Collapsed Street', detail: 'Em um pequeno beco ocupado por um grupo de Lurking Carcasses (Nota: Aqui ele atua como NPC de quest, não como mercante).' }
      ],
      quests: [
        { name: 'Mechanical Cryptic Vessel', description: 'Relacionado ao encontro em Collapsed Street sob certas condições.' }
      ],
      info: [
        'Todos os mercantes reduzem seus preços em 10% para cada melhoria de P-Organ adquirida ("Reduce Item Prices 1" e/ou "Reduce Item Prices 2").',
        'O Wandering Merchant encontrado na Krat Central Station Plaza vai embora permanentemente após o jogador alcançar um determinado capítulo, enquanto os outros nunca se movem.',
        'No Malum District, ele é conhecido como Malum District Black Market Trader e recusará comércio até que você o suborne com um consumível de Ergo, mostre o Smiling Bunny Mark ou vença o chefe da área.'
      ],
      inventories: [
        {
          shopLocation: 'Krat Central Station Plaza (Cerasani Alley)',
          items: [
            { name: 'Fable Catalyst', type: 'Consumables', amount: '*', price: '400 Ergo' },
            { name: 'Throwing Cell', type: 'Throwing Objects', amount: '*', price: '200 Ergo' },
            { name: 'Electric Blitz Abrasive', type: 'Consumable', amount: '*', price: '250 Ergo' },
            { name: "Puppet's Saber", type: 'Weapons', amount: '1', price: '300 Ergo' },
            { name: 'Wintry Rapier', type: 'Weapons', amount: '1', price: '300 Ergo' },
            { name: 'Greatsword of Fate', type: 'Weapons', amount: '1', price: '300 Ergo' },
            { name: 'Proposal, Flower, Wolf Part 1 (Golden)', type: 'Records', amount: 'New Game +', price: '6000 Ergo' }
          ],
          note: 'O estoque de consumíveis depende de quantos você possui na bolsa. Eles saem de estoque permanentemente após derrotar o Parade Master.'
        },
        {
          shopLocation: 'Inside the House on Elysion Boulevard',
          items: [
            { name: 'Attribute Resistance Ampoule', type: 'Consumable', amount: 'Infinite', price: '180 Ergo' },
            { name: 'Legion Magazine', type: 'Consumables', amount: 'Infinite', price: '180 Ergo' },
            { name: 'Throwing Cell', type: 'Throwing Objects', amount: '3', price: '280 Ergo' },
            { name: 'Electric Blitz Canister', type: 'Throwing Objects', amount: '3', price: '390 Ergo' },
            { name: 'Electric Blitz Abrasive', type: 'Consumables', amount: '5', price: '440 Ergo' },
            { name: "Gemini's Iron Protection", type: 'Consumables', amount: '2', price: '390 Ergo' },
            { name: "Gemini's Emergency Protection", type: 'Consumables', amount: '2', price: '390 Ergo' },
            { name: 'Electric Coil Stick', type: 'Weapon', amount: '1', price: '1200 Ergo' },
            { name: 'Quixotic (Golden)', type: 'Records', amount: 'New Game +', price: '10,000 Ergo' }
          ]
        },
        {
          shopLocation: 'Malum District',
          items: [
            { name: 'Sawtoothed Wheel', type: 'Throwing Objects', amount: 'Infinite', price: '90 Ergo' },
            { name: 'Saw Blade', type: 'Throwing Objects', amount: 'Infinite', price: '470 Ergo' },
            { name: 'Sharp Pipe', type: 'Throwing Objects', amount: 'Infinite', price: '470 Ergo' },
            { name: 'Cluster Grenade', type: 'Throwing Objects', amount: 'Infinite', price: '470 Ergo' },
            { name: 'Shot Put', type: 'Throwing Objects', amount: 'Infinite', price: '470 Ergo' },
            { name: 'Thermite', type: 'Throwing Objects', amount: 'Infinite', price: '400 Ergo' },
            { name: 'Throwing Cell', type: 'Throwing Objects', amount: 'Infinite', price: '400 Ergo' },
            { name: 'Carcass Body Fluid Bottle', type: 'Throwing Objects', amount: 'Infinite', price: '400 Ergo' },
            { name: 'Fire Canister', type: 'Throwing Objects', amount: 'Infinite', price: '550 Ergo' },
            { name: 'Electric Blitz Canister', type: 'Throwing Objects', amount: 'Infinite', price: '550 Ergo' },
            { name: 'Acid Canister', type: 'Throwing Objects', amount: 'Infinite', price: '550 Ergo' },
            { name: 'Fire Abrasive', type: 'Consumables', amount: 'Infinite', price: '620 Ergo' },
            { name: 'Electric Blitz Abrasive', type: 'Consumable', amount: 'Infinite', price: '620 Ergo' },
            { name: 'Acid Abrasive', type: 'Consumables', amount: 'Infinite', price: '620 Ergo' },
            { name: 'Bramble Curved Sword', type: 'Weapon', amount: '1', price: '2,000 Ergo' },
            { name: 'Arch Shock Cartridge', type: 'Cartridge', amount: '1', price: '1,400 Ergo' },
            { name: 'Arch Shock Cartridge +1', type: 'Cartridge', amount: 'New Game +', price: '4,200 Ergo' },
            { name: 'Someday', type: 'Records', amount: '1', price: '3,800 Ergo' }
          ]
        },
        {
          shopLocation: 'Lorenzini Arcade',
          items: [
            { name: 'Attribute Purification Ampoule', type: 'Consumables', amount: 'Infinite', price: '260 Ergo' },
            { name: 'Special Purification Ampoule', type: 'Consumables', amount: 'Infinite', price: '200 Ergo' },
            { name: 'Thermite', type: 'Throwing Objects', amount: '3', price: '280 Ergo' },
            { name: 'Fire Canister', type: 'Throwing Objects', amount: '3', price: '390 Ergo' },
            { name: 'Fire Abrasive', type: 'Consumables', amount: '5', price: '440 Ergo' },
            { name: 'Circular Electric Chainsaw', type: 'Weapons', amount: '1', price: '3,200 Ergo' },
            { name: 'Indomitable Amulet', type: 'Amulets', amount: '1', price: '2,400 Ergo' },
            { name: 'Shadow Flower (Golden)', type: 'Records', amount: 'New Game +', price: '10,000 Ergo' }
          ]
        },
        {
          shopLocation: 'Abandoned Apartment',
          items: [
            { name: 'Cluster Grenade', type: 'Throwing Objects', amount: '3', price: '330 Ergo' },
            { name: 'Shot Put', type: 'Throwing Objects', amount: '3', price: '330 Ergo' },
            { name: 'Carcass Body Fluid Bottle', type: 'Throwing Objects', amount: '3', price: '280 Ergo' },
            { name: 'Acid Canister', type: 'Throwing Objects', amount: '3', price: '390 Ergo' },
            { name: 'Acid Abrasive', type: 'Throwing Objects', amount: '5', price: '440 Ergo' },
            { name: 'Stabilized Alchemical Booster', type: 'Materials', amount: '1', price: '1,600 Ergo' },
            { name: 'Legion Caliber', type: 'Materials', amount: '1', price: '4,000 Ergo' },
            { name: 'Military Shovel', type: 'Weapons', amount: '1', price: '3,500 Ergo' },
            { name: 'LADA Large Capacity Corrosion Resistance Converter', type: 'Converter', amount: '1', price: '2,200 Ergo' },
            { name: 'LADA Large Capacity Corrosion Resistance Converter +1', type: 'Converter', amount: 'New Game +', price: '6,600 Ergo' },
            { name: 'LADA Large Capacity Insulation Converter', type: 'Converter', amount: '1', price: '2,200 Ergo' },
            { name: 'LADA Large Capacity Insulation Converter +1', type: 'Converter', amount: 'New Game +', price: '6,600 Ergo' },
            { name: 'LADA Large Capacity Radiation Converter', type: 'Converter', amount: '1', price: '2,200 Ergo' },
            { name: 'LADA Large Capacity Radiation Converter +1', type: 'Converter', amount: 'New Game +', price: '6,600 Ergo' },
            { name: 'Memory of Beach (Golden)', type: 'Records', amount: 'New Game +', price: '10,000 Ergo' }
          ]
        }
      ]
    },

    // ==========================================
    // CONTEÚDO DA EXPANSÃO OVERTURE DLC (Cor Azul)
    // ==========================================
    dlc: {
      locations: [
        { chapter: 'Chapter I', name: 'Carnival Garden', detail: 'Pode ser encontrado perto de uma fonte próxima ao carrossel da área.' },
        { chapter: 'Chapter IV', name: 'Sea Cliffs (Archon Fleet Shipwrecks)', detail: 'Pode ser encontrado em um acampamento perto do Stargazer.' }
      ],
      info: [
        'No Carnival Garden, o Wandering Merchant comprará o item Royal Flower Tea Set por uma grande soma de Ergo e compartilhará uma pista em troca.'
      ],
      inventories: [
        {
          shopLocation: 'Carnival Garden',
          items: [
            { name: 'Sawtoothed Wheel', type: 'Throwing Objects', amount: '30', price: '100 Ergo' },
            { name: 'Anti-freeze Ampoule', type: 'Consumable', amount: '5', price: '450 Ergo' },
            { name: 'Grindstone Coating Capsule', type: 'Consumable', amount: '1', price: '7,400 Ergo' },
            { name: 'Miraculous Enhancement Ampoule', type: 'Consumable', amount: '1', price: '6,900 Ergo' },
            { name: 'Miraculous Recovery Ampoule', type: 'Consumable', amount: '1', price: '8,200 Ergo' },
            { name: "Gemini's Enhanced Detection", type: 'Consumable', amount: '1', price: '8,500 Ergo' },
            { name: 'Survival Amulet', type: 'Amulets', amount: '1', price: '2,000 Ergo' },
            { name: 'Black Rabbit Hole Key', type: 'Keys', amount: '1', price: '1,500 Ergo' },
            { name: 'The Clear Blue Sky (Gold)', type: 'Records', amount: 'New Game +', price: '10,000 Ergo' }
          ]
        },
        {
          shopLocation: 'Sea Cliffs (Archon Fleet Shipwrecks)',
          items: [
            { name: 'Anti-freeze Ampoule', type: 'Consumable', amount: '5', price: '450 Ergo' },
            { name: 'Grindstone Coating Capsule', type: 'Consumable', amount: 'Infinite', price: '9,700 Ergo' },
            { name: 'Miraculous Enhancement Ampoule', type: 'Consumable', amount: 'Infinite', price: '8,900 Ergo' },
            { name: 'Miraculous Recovery Ampoule', type: 'Consumable', amount: 'Infinite', price: '10,500 Ergo' },
            { name: "Gemini's Enhanced Detection", type: 'Consumable', amount: 'Infinite', price: '11,200 Ergo' },
            { name: "Duelist's Amulet", type: 'Amulets', amount: '1', price: '3,000 Ergo' },
            { name: "Giant's Amulet", type: 'Amulets', amount: '1', price: '120 Ergo' },
            { name: 'Lisrim (Gold)', type: 'Records', amount: 'New Game +', price: '10,000 Ergo' }
          ]
        }
      ]
    },
    
    // Descrição unificada para o topo do perfil do personagem
    description: 'Um mercante enigmático e altamente móvel que aparece em locais estratégicos ao longo de Krat e suas redondezas, vendendo suprimentos vitais, equipamentos e discos raros tanto na jornada principal quanto nas zonas da expansão Overture.'
  },{
    id: 'adelina',
    name: 'Adelina',
    location: 'Estella Opera House',
    whereFind: 'Pode ser encontrada no segundo andar da Casa de Ópera Estella (Estella Opera House). Após entrar na Ópera, suba as escadas da direita e vá para o segundo andar. Elimine o Spider Puppet; atrás dele, haverá uma varanda com vista para o salão com o lustre em chamas. O camarim onde Adelina se esconde fica do lado esquerdo.',
    speak: "Who are you? You're not a puppet... Are you here to listen to my music?",
    quests: [
      { name: 'The Actress in the Opera House', description: 'Leve a Maçã Vermelha Brilhante (Bright Red Apple) para ela antes de derrotar o chefe da área.' }
    ],
    descriptionQuests: 'Ao interagir com ela, Adelina revela que não consegue mais cantar devido à Doença da Petrificação e menciona estar com muita sede, desejando uma fruta. O jogador deve entregar a ela uma Maçã Vermelha Brilhante (Bright Red Apple). Após comer a fruta, ela confessa que sabotou propositalmente a voz de sua irmã mais nova, Patricia, por inveja e medo de ser superada. Depois de derrotar Romeo, o Rei dos Bonecos (Romeo, King of Puppets), retorne ao camarim. Você a encontrará morta; se a quest foi concluída corretamente, você poderá coletar o Medalhão da Atriz Vermelha (Red Actress\'s Locket) e o disco Fascination de seu corpo. Caso contrário, apenas o medalhão estará disponível.',
    trivia: [
      'Ela é irmã de Patricia Corday. Enquanto Adelina se tornou a artista mais famosa de Krat, conhecida como a "Atriz Vermelha", Patricia perdeu a voz no "acidente" causado por Adelina e se tornou uma Stalker.',
      'Adelina teve um relacionamento com o Doutor Coruja (Owl Doctor). Ele tentou enviar uma carta a ela através de um Recipiente Criptografado Feito à Mão (Crafted Cryptic Vessel), mas o mensageiro nunca chegou.',
      'Ela foi atraída e enganada por Arlecchino, que a fez acreditar que a Casa de Ópera Estella seria um refúgio seguro para sobreviventes.',
      'Diferente de sua irmã Stalker, Adelina não percebe que P é um fantoche, assumindo que ele é apenas um fã de sua música.'
    ],
    description: 'Uma famosa cantora de ópera acometida pela Doença da Petrificação. Escondida em um camarim isolado, ela carrega o remorso de ter arruinado o futuro da própria irmã por puro ciúme profissional antes do colapso da cidade.',
    image: adelinaImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'antonia',
    name: 'Antonia',
    location: 'Hotel Krat',
    whereFind: 'Pode ser encontrada na entrada da ala oeste (Westwing doorway) do Hotel Krat, sentada em uma cadeira de rodas.',
    speak: "Unexpected guests are welcome. We don't insist on reservation. I am Antonia, and this is my hotel. Welcome.",
    quests: [
      { name: "The Story Of The Refined Old Lady", description: 'Passos necessários para obter a cura de sua doença e desbloquear o troféu de sua história.' }
    ],
    descriptionQuests: 'No primeiro encontro no Hotel Krat, ela te entrega o traje "Someone\'s Memory" e você obtém o gesto "Show Off Clothes". Vestir o traje, equipar o gesto e usá-lo na frente dela te recompensará com x1 Fragmento de Ergo Vívido (Vivid Ergo Fragment).\n\n' +
      'Para desbloquear o troféu "The Story Of The Refined Old Lady":\n' +
      '1. Após derrotar o Campeão Victor (Champion Victor) na Sala de Conferências da Grande Exposição, retorne ao hotel e entregue uma moeda de fruto de ouro (gold coin) para Giangio para conseguir uma cura para Antonia.\n' +
      '2. Após comprar a cura, converse com Polendina e selecione a opção "Use the Cure".\n' +
      '3. Algum tempo depois, especificamente após derrotar Laxasia a Completa (Laxasia the Complete) na Sala de Oração da Abadia Arche, fale com Polendina novamente para receber o troféu/conquista.',
    trivia: [
      'Ela é a proprietária do Hotel Krat e está lidando ativamente com os efeitos avançados da Doença da Petrificação.',
      'Mesmo em sua situação difícil, ela é descrita como alguém que se mantém fiel a si mesma, guardando uma mente forte, clara e um senso de compreensão afiado comparado ao de uma coruja sábia.'
    ],
    description: 'A elegante e resiliente dona do Hotel Krat. Apesar de estar confinada a uma cadeira de rodas devido ao estágio avançado da Doença da Petrificação, ela serve como o pilar de acolhimento e sabedoria para P e os demais sobreviventes refugiados em seu estabelecimento.',
    image: antoniaImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'arlecchino',
    name: 'Arlecchino',
    location: 'Workshop Union Entrance', // Localização inicial do primeiro contato por telefone
    whereFind: 'O primeiro contato ocorre por meio de cabines telefônicas espalhadas pelo mapa nos seguintes locais: Entrada da União da Oficina (Workshop Union Entrance), Distrito de Malum (Malum District), Galeria da Grande Exposição (Grand Exhibition Gallery), Rua da Estação Central de Krat (Krat Central Station Street) e Relíquia de Trismegistus (Relic of Trismegistus). Presencialmente, ele pode ser encontrado na Parede Externa da Abadia Arche (Arche Abbey Outer Wall), dentro do Santuário da Trindade da Abadia, sendo necessária a Chave da Trindade do Escolhido (The Chosen One\'s Trinity Key) para abrir o local.',
    speak: "Congratulations! You've been selected from this cast of...a little For an exclusive, obtrusive, intrusive...transmittal. From me, Arlecchino, the King of All Riddles!",
    quests: [
      { name: "Venigni's Trophy Story", description: 'Passos necessários para descobrir a verdade sobre o incidente de Venigni e obter o troféu relacionado.' }
    ],
    descriptionQuests: 'Ao interagir presencialmente com Arlecchino na Abadia Arche, você obtém x1 Quartzo (Quartz) e a Capa do Alquimista (Alchemist\'s Cape).\n\n' +
      'Para obter o troféu/conquista de Venigni:\n' +
      '1. Colete a nota "Scandal! V, The Tragedy Behind the Flamboyance!" localizada na Arcada Lorenzini (Lorenzini Arcade).\n' +
      '2. Converse com Arlecchino no santuário e esgote os diálogos até conseguir a linha de conversa "The Truth Behind the Venigni Incident".\n' +
      '3. Arlecchino entregará a P o item "Moon World Warrior Toy". Leve e mostre este brinquedo para Venigni para desbloquear a conquista.\n\n' +
      'Nota: Após esgotar todos os seus diálogos e receber o brinquedo, ele se torna um alvo hostil selecionável. Se o jogador optar por matá-lo, ele derruba x1 Cristal de Ergo Radiante (Radiant Ergo Crystal).',
    trivia: [
      'Ele é amplamente conhecido pelo título de "Rei das Charadas" (King of all Riddles) e costuma recompensar generosamente o jogador caso suas perguntas sejam respondidas corretamente.',
      'Existe uma página/versão separada dedicada para sua contraparte de combate na expansão, listada como "Arlecchino, the Blood Artist".'
    ],
    description: 'Um autômato enigmático e perturbador autointitulado o Rei das Charadas. Ele interage com P inicialmente à distância através de telefones públicos propondo enigmas e, mais tarde, revela sua presença física e os segredos sombrios por trás do passado de Krat e de figuras importantes da cidade.',
    image: arlecchinoImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'belle',
    name: 'Belle',
    location: 'Grand Exhibition Gallery',
    whereFind: 'Pode ser avistada a partir do Stargazer da Galeria da Grande Exposição (Grand Exhibition Gallery). Olhando para a esquerda, há uma grande caixa de madeira coberta por cordas; ela está no segundo nível, logo acima da caixa e atrás de umas cortinas. Para chegar lá, progrida na fase, destranque o atalho externo, suba duas escadas de mão externas, volte para o interior do prédio e desça uma terceira escada de mão. Atenção: Você deve falar com ela ANTES de derrotar o Campeão Victor, caso contrário ela morrerá na galeria.',
    speak: "D-don't come any closer! Oh... you're not one of them. Are you here to save me?",
    quests: [
      { name: 'Find My Partner', description: 'Fica disponível se você falar com Belle na galeria antes de derrotar o Campeão Victor. Ela pedirá para procurar seu parceiro Atkinson na Plataforma da Estação Central de Krat.' }
    ],
    descriptionQuests: 'P recebe uma dica sobre sua existência através de uma ligação de Venigni na Arcada Lorenzini. Escondida dos bonecos enfurecidos e Alquimistas mutantes, ela pede que P derrote o Campeão Victor para que ela possa fugir para o Hotel Krat. Após a derrota do Monstro Verde do Pântano, ela pede para buscar seu parceiro Atkinson na Plataforma da Estação Central de Krat, pois não pode ir devido à falta de equipamentos contra a Doença da Petrificação.\n\n' +
      'Seus desfechos dependem das ações do jogador:\n' +
      '* Se disser a verdade ("He became a monster"): Belle fica histérica, te recompensa com x1 Abrasivo de Blitz Elétrica (Electric Blitz Abrasive), recusa-se a falar e tenta fugir de Krat. Seu corpo morto será encontrado no mesmo trem onde o Homem Infectado estava.\n' +
      '* Se matar o Homem Infectado sem pegar a carta e mentir ("I think he ran away"): Belle fica revoltada, acusa P de mentiroso, a linha de missão falha sem recompensas e o corpo dela será encontrado logo depois perto de onde o parceiro estava.\n' +
      '* Se obtiver a Carta de Atkinson (Atkinson\'s Letter) e mentir ("He was killed in action fighting a puppet"): Ela recompensa P com x1 Vasilame de Blitz Elétrica (Electric Blitz Canister), o disco de música "Why" e pontos de Humanidade. Ela permanece viva no Hotel Krat até o fim do jogo.',
    trivia: [
      'Ela era uma soldada vinda de fora da cidade. Alguns momentos antes dos eventos do jogo, ela conheceu Atkinson; eles começaram como colegas de trabalho e eventualmente se tornaram amantes.',
      'No final "Real Boy: They All Lived Happily Ever After", Belle desaparece de seu local no hotel, sugerindo que ela fugiu do massacre ou que Geppetto decidiu não transformá-la em marionete.',
      'Nos demais finais do jogo, ela permanece em seu posto no hotel, porém recusa-se a tomar banho e trocar de roupa.'
    ],
    description: 'Uma soldada estrangeira que acabou encurralada nos labirintos da Galeria da Grande Exposição. Traumatizada pelos horrores que testemunhou e preocupada com o paradeiro de seu companheiro, seu destino e sua sanidade dependem diretamente das verdades ou mentiras que P decide compartilhar.',
    image: belleImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'black_cat',
    name: 'Black Cat',
    location: 'Workshop Union Culvert',
    whereFind: 'Pode ser encontrado inicialmente perto do Stargazer do Canal da União da Oficina (Workshop Union Culvert). Após passar pelas armadilhas de bolas de fogo rolantes, vire à direita através de uma parede quebrada e saia pela porta logo à frente; ele estará de pé ao lado de Red Fox. Posteriormente, aparece no Stargazer do Distrito de Malum (Malum District), na Galeria da Grande Exposição (Grand Exhibition Gallery) após derrotar o Campeão Victor, e por último na Parede Externa da Abadia Arche (Arche Abbey Outer Wall).',
    speak: "You made it all the way here unbothered by ruffians. You've got talent! I've never see you before, but who cares?",
    quests: [
      { name: 'Befriending the Black Cat', description: 'Garante conquistas importantes, gestos e itens ao manter uma relação amigável entregando Moedas de Fruto de Ouro.' }
    ],
    descriptionQuests: 'Há duas conquistas associadas a ele, disponíveis após a batalha contra o Campeão Victor. No caminho para o bonde, ele e Red Fox pedirão 1 Moeda de Fruto de Ouro (Gold Coin Fruit) para ajudar a tratar a cegueira dele. Recusar fará o jogador perder a conquista; aceitar recompensará P com um gesto (necessário para "Learning all Emotions") e um disco de música (necessário para "Gold Melody").\n\n' +
      'No capítulo final, na Abadia Arche, ele pode ser enfrentado como um chefe opcional. No entanto, se você manteve uma boa relação anteriormente, a luta pode ser evitada oferecendo outra Moeda de Fruto de Ouro para poupá-lo e manter a amizade. A Máscara do Gato Preto (Black Cat\'s Mask) é obtida ao final de sua linha de história, seja derrotando-o em combate ou tornando-se seu amigo.',
    trivia: [
      'Seu nome verdadeiro é Lucio Volfe, um detalhe mencionado apenas se Red Fox derrotar o jogador em combate. O jornal local da Filial dos Varredores (Sweepers), contudo, lista seu nome como desconhecido e aponta que ele é considerado o filho bastardo da família Volfe.',
      'Antes da Frenesi dos Bonecos, ele atuava como um Rastreador (Stalker) aprendiz nos Varredores, mas foi reportado várias vezes por ignorar patentes e negligenciar seus deveres. Havia suspeitas de que ele seria interrogado como um potencial espião dos Bastardos.',
      'Ele sofre da Doença da Petrificação, e os sintomas estão concentrados agressivamente em seus olhos, causando sua perda de visão progressiva. Ele também menciona no Distrito de Malum que lutar o deixa exausto e que precisa de pausas constantes.',
      'No primeiro encontro com o jogador, ele vende informações de lore.',
      'É altamente recomendável ter Moedas de Fruto de Ouro no inventário durante o terceiro e o quarto encontro para conseguir progredir pacificamente em sua história.'
    ],
    description: 'O irmão mais novo de Red Fox, conhecido por possuir uma natureza consideravelmente mais amigável e receptiva que a de sua irmã. Escondendo sua identidade e sua vulnerabilidade por trás de uma máscara felina, ele luta secretamente contra os estágios avançados da Doença da Petrificação que ameaça deixá-lo completamente cego.',
    image: blackCatImage,
    isDLC: false,
    isMerchant: false // Embora venda lore no primeiro encontro, ele é categorizado estruturalmente como NPC de Quest/Chefe.
  },
  {
    id: 'cecile',
    name: 'Cecile',
    location: 'St. Frangelico Cathedral Library', //
    whereFind: 'Pode ser encontrada perto de uma janela barricada na Biblioteca da Catedral de São Frangelico (St. Frangelico Cathedral Library).', //
    speak: "I'm surprised to see who's, well... alive.", //
    quests: [
      { name: "Return the Archbishop's Holy Mark", description: 'Entregue o Símbolo Sagrado do Arcebispo para Cecile antes de derrotar o chefe da área.' } //
    ],
    descriptionQuests: 'Ao encontrar P, Cecile implora para que ele traga o Símbolo Sagrado do Arcebispo (Archbishop\'s Holy Mark).\n\n' +
      '* Se o jogador cumprir o pedido antes de derrotar o chefe da área: Cecile agradece a P e desaparece depois, deixando para trás a Confissão por Escrito de Cecile (Cecile\'s Written Confession). Ler a carta na íntegra desbloqueia o gesto Rezar (Pray) e o disco de música Divine Service. Como ela já está infectada, é altamente provável que Cecile cometa suicídio fora da tela para evitar se transformar em um monstro.\n' +
      '* Se o jogador falhar em entregar o símbolo antes de derrotar o chefe: Cecile sucumbe à sua compulsão por sangue, transformando-se em uma Carcaça Explosiva (Exploding Carcass) feroz que perseguirá P pela biblioteca rindo e desejando provar o gosto de sua carne.', //
    trivia: [
      'Ela é a única sobrevivente restante do surto misterioso na Biblioteca da Catedral de São Frangelico, embora já esteja infectada (a parte visível do dedo mindinho em sua mão esquerda enfaixada já está mutada).', //
      'O Diário do Arcebispo (Archbishop\'s Diary) descreve Cecile como uma seguidora devota, mas também revela que ela sofria de "compulsão por sangue" e tinha tendências suicidas no passado.', //
      'A descrição do Símbolo Sagrado sugere que Cecile foi uma assassina obsessiva no passado, mas foi salva pelo Arcebispo Andreus. Apesar de o Arcebispo ter sucumbido à ganância e condenado a Catedral, ela ainda o considerava um santo por tudo o que ele fez por ela.', //
      'Em sua carta de confissão, ela agradece a P por dar a ela forças para viver e morrer como uma humana, em vez de um monstro.' //
    ],
    description: 'A serva do Arcebispo e a última sobrevivente humana a resistir aos horrores na Biblioteca da Catedral de São Frangelico. Lutando secretamente contra uma infecção avançada e um passado sombrio de violência, sua última linha de sanidade depende de um símbolo religioso de redenção.', //
    image: cecileImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'eugenie',
    name: 'Eugénie',
    location: 'Hotel Krat',
    whereFind: 'Pode ser encontrada no Hotel Krat, localizada logo à direita do Stargazer em sua pequena oficina mecânica.',
    speak: "I heard about you from Geppetto, but to see you in person... Wow!",
    quests: [
      { name: "The Story Of A Stranger Girl", description: 'Passos e diálogos necessários com Alidoro e Venigni para desvendar o passado dela e conquistar o troféu.' }
    ],
    descriptionQuests: 'Para desbloquear o troféu "The Story Of A Stranger Girl":\n\n' +
      '1. Certifique-se de falar com Alidoro na Catedral de São Frangelico (caso tenha mentido para ele lá, fale com ele em Venigni Works). Falhar em falar com Alidoro antes de derrotar o Mais Velho da Irmandade do Coelho Preto (The Eldest of the Black Rabbit Brotherhood) impossibilitará o início desta missão, bloqueando a conquista nesta campanha.\n' +
      '2. Encontre Alidoro no Campo de Combate das Relíquias de Trismegistus (Relic of Trismegistus Combat Field) e selecione a opção "Attack Alidoro" duas vezes para matá-lo. Colete o item Recipiente Criptografado de Alidoro (Alidoro\'s Cryptic Vessel) e leve-o para Venigni decifrar. ISTO DEVE SER FEITO ANTES DE EMBARCAR NO SUBMARINO.\n' +
      '3. Após a decodificação feita por Venigni, leia o conteúdo do Recipiente Criptografado antes de falar com ela.\n' +
      '4. Converse com Eugénie no Hotel Krat e selecione a opção de diálogo "Ele era o irmão mais velho de Eugénie" ("He was Eugénie\'s Older Brother").\n' +
      '5. Por fim, descanse em um Stargazer e fale com ela mais uma vez para obter o disco de música Far East Princess, pontos de Humanidade e o troféu.',
    trivia: [
      'Ela é uma estrangeira vinda de um país distante localizado ao Leste de Krat.',
      'Ela é uma especialista altamente qualificada em armamentos e forja de equipamentos.',
      'Interagir com mercantes e especialistas como ela ajuda o jogador a obter itens por meio de trocas ou solicitando serviços essenciais para a progressão do personagem e de suas armas.'
    ],
    description: 'Uma jovem e brilhante engenheira de armas vinda do distante Oriente. Instalada na ala principal do Hotel Krat, ela atua como a armeira de P, sendo a responsável por modificar, evoluir e aprimorar o arsenal mecânico do protagonista ao longo da crise na cidade.',
    image: eugenieImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'gemini',
    name: 'Gemini',
    location: 'Krat Central Station',
    whereFind: 'Pode ser encontrado caído no chão logo no primeiríssimo início do jogo, na Estação Central de Krat (Krat Central Station), bem na sua frente. Você avistará uma lanterna verde brilhante.',
    speak: "Gemini will restart soon.",
    quests: [],
    descriptionQuests: 'Não existem missões ou linhas de quests específicas associadas a este NPC. Gemini atua como seu companheiro de jornada constante, fornecendo dicas úteis, avisos sobre perigos e percepções sobre os acontecimentos conforme você explora o mundo de Krat.',
    trivia: [
      'Ele é um grilo mecânico (cricket) que reside e fala de dentro de uma lanterna portátil iluminada.',
      'Gemini serve como o guia oficial do Pinóquio ao longo de toda a sua trajetória.'
    ],
    description: 'Um grilo enigmático alojado em uma lanterna verde luminescente. Encontrado nos momentos iniciais do despertar de P, ele atua como a voz da consciência, guia e companheiro inseparável do protagonista pelas ruas perigosas de Krat.',
    image: geminiImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'infected_man',
    name: 'Infected Man (Atkinson)',
    location: 'Krat Central Station Platform',
    whereFind: 'Pode ser encontrado no Capítulo IX, escondido em um canto de um trem na Plataforma da Estação Central de Krat (Krat Central Station Platform).',
    speak: "Don't kill me! I'm a human...just a soldier...",
    quests: [
      { name: 'Find my Partner', description: 'Parte essencial da linha de missões de Belle, onde P deve decidir o destino de Atkinson e o que contar a ela.' }
    ],
    descriptionQuests: 'Quando P o encontra, Atkinson está se contorcendo de dor, no meio de uma transformação em Carcaça. Ele implora para não ser morto, compartilha brevemente suas descobertas e pede para P entregar a Carta de Atkinson (Atkinson\'s Letter) para Belle, implorando para dizer a ela que ele morreu como um soldado.\n\n' +
      'Seu destino como Carcaça depende das ações do jogador:\n' +
      '* Ele pode ser atacado e morto imediatamente (antes ou depois de conversar). Ao se tornar hostil, ele age como uma Carcaça Morta-Viva (Undead Carcass) comum, concedendo 93 Ergo ao morrer, mas NÃO derruba a carta. Isso altera o diálogo com Belle, removendo a opção de mentir dizendo que ele morreu lutando contra um boneco.\n' +
      '* Se o jogador obtém a carta e mente para Belle, Atkinson simplesmente desaparece de seu local, indicando que sua transformação em Carcaça foi concluída.\n' +
      '* Se o jogador obtém a carta e conta a verdade para Belle, na próxima visita ao trem, o corpo dela estará morto lá. Se Atkinson não foi morto antes por P, ele estará de pé sobre o corpo dela como uma Carcaça hostil.',
    trivia: [
      'Seu nome real é Atkinson e ele era um membro da milícia de Krat.',
      'Algum tempo antes dos eventos do jogo, ele conheceu Belle; os dois começaram como colegas de trabalho e eventualmente se tornaram amantes.',
      'Após a queda de Krat, ele viajou para a Estação Central na esperança de encontrar uma rota de fuga da cidade, mas descobriu que os subúrbios estavam fechados e as comunicações cortadas.',
      'Ele conseguiu enviar um sinal de socorro que alcançou Belle. Como ela não possuía equipamentos para se proteger da Doença da Petrificação, ela pediu a ajuda de P para encontrá-lo.'
    ],
    description: 'Um soldado da milícia de Krat e o parceiro desaparecido de Belle. Encurralado em um vagão abandonado na Estação Central, ele trava uma batalha agonizante e perdida contra a infecção, restando-lhe apenas o desejo de que sua amada o recorde com honra.',
    image: infectedManImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'julian_the_gentleman',
    name: 'Julian the Gentleman',
    location: 'Rosa Isabelle Street Culvert',
    whereFind: 'Pode ser encontrado perto de um Stargazer no Canal da Rua Rosa Isabelle (Rosa Isabelle Street Culvert). O Stargazer está localizado logo após derrotar a White Lady.',
    speak: "You're walking about in a place like this? You must be a Stalker. Can I ask you for a favor?",
    quests: [
      { name: "Find My Wife's Belongings", description: 'Recupere os pertences e o anel de casamento da falecida esposa de Julian na Rua Rosa Isabelle.' }
    ],
    descriptionQuests: 'Ao encontrar P, Julian assume que ele é um Stalker e pede um favor: recuperar os pertences de sua esposa, que faleceu em um incêndio em algum lugar da Rua Rosa Isabelle. Ao encontrar o corpo, P descobre que ela não era humana, mas sim uma marionete.\n\n' +
      'Após trazer o Anel de Casamento (Wedding Ring) de volta, Julian fala sobre seu relacionamento com Melody e expressa sua crença de que ela tinha uma alma e o amava de volta. O jogador deve decidir se mente ou conta a verdade:\n' +
      '* Se P mentir (dizendo que viu a mensagem de Melody dizendo que o ama): Julian fica extremamente feliz e recompensa P com o gesto "Sad" e o Anel de Casamento (Wedding Ring), pedindo para que o amor que eles compartilharam seja lembrado.\n' +
      '* Se P contar a verdade: Julian fica terrivelmente deprimido e, mais tarde, comete suicídio. O Anel de Casamento Sangrento (Bloody Wedding Ring) poderá ser coletado diretamente de seu corpo morto.',
    trivia: [
      'Julian é, na verdade, o misterioso "Mr. J" mencionado na última edição do jornal "Have you seen this eccentric?!" — um homem que se apaixonou por uma marionete e tentou se casar com ela em segredo.',
      'O casamento secreto de Julian e Melody foi arruinado por sua própria família enfurecida, que danificou gravemente a marionete.',
      'Sua falecida esposa marionete chamava-se Melody.',
      'A escolha de diálogo nesta quest afeta diretamente os pontos de Humanidade de P e determina se Julian sobreviverá ao final da linha de missão.'
    ],
    description: 'Um homem aristocrático e melancólico que carrega o fardo de um amor proibido em Krat. Julgado por sua família e pela sociedade por ter se apaixonado e casado secretamente com uma marionete, ele busca desesperadamente um sinal de que os sentimentos de sua falecida esposa eram reais.',
    image: julianTheGentlemanImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'old_lady_at_the_window',
    name: 'Old Lady at the Window',
    location: 'Rosa Isabelle Street Entrance',
    whereFind: 'Pode ser localizada atrás de uma janela iluminada perto do Stargazer da Entrada da Rua Rosa Isabelle (Rosa Isabelle Street Entrance). Para chegar até ela, desça as escadas a partir do Stargazer e derrote as duas marionetes. Em seguida, pegue as escadas à esquerda e continue contornando o prédio até avistar a silhueta da mulher na janela.',
    speak: "Who are...? Ah, my Stalker friend. I was worried the puppets had come back.",
    quests: [
      { name: 'The Bottle of La Bleiwies', description: 'Encontre e entregue a garrafa do raro vinho La Bleiwies para a senhora na janela.' }
    ],
    descriptionQuests: 'Ao conversar com ela pela primeira vez, ela iniciará sua missão pedindo que você recupere uma garrafa de vinho chamada La Bleiwies. Progrida normalmente na história até alcançar a Arcada Lorenzini (Lorenzini Arcade).\n\n' +
      'Lá dentro, você eventualmente passará por uma adega não inundada (unflooded wine cellar), onde poderá coletar a garrafa de vinho necessária. Leve a garrafa de volta para a idosa na janela e, em troca, você receberá a Moeda Comemorativa de Venigni (Venigni Commemorative Coin). Essa moeda pode ser levada para Pulcinella no Hotel Krat para uma avaliação, recompensando o jogador com uma Pedra da Meia Lua (Half Moonstone), um material de melhoria de lâminas.',
    trivia: [
      'Ela é uma senhora idosa de Krat que possui um desejo profundo e ardente por um vinho específico chamado La Bleiwies.',
      'Assim como outros cidadãos sobreviventes isolados, ela interage com P estritamente através das frestas de sua janela, reconhecendo-o inicialmente como um Stalker aliado.'
    ],
    description: 'Uma senhora idosa e isolada que se refugia nos arredores da outrora charmosa Rua Rosa Isabelle. Aliviada ao ver que P não é uma das marionetes assassinas da cidade, ela busca o conforto melancólico de uma última garrafa do lendário vinho La Bleiwies em meio ao caos reinante.',
    image: oldLadyAtTheWindowImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'red_fox',
    name: 'Red Fox',
    location: 'Workshop Union Culvert',
    whereFind: 'Pode ser encontrada inicialmente perto do Stargazer do Canal da União da Oficina (Workshop Union Culvert). Após passar pelas armadilhas de bolas de fogo rolantes, vire à direita através de uma parede quebrada e saia pela porta logo à frente; ela estará de pé ao lado de Black Cat. Posteriormente, aparece no Stargazer do Distrito de Malum (Malum District), na Sala de Conferências da Galeria da Grande Exposição (Grand Exhibition Conference Room) após derrotar o Campeão Victor, e por último na Abadia Arche (Arche Abbey).',
    speak: "Pleased to see you, my Stalker friend.",
    quests: [],
    descriptionQuests: 'Não existem missões ou linhas de quests específicas listadas diretamente para esta NPC. No entanto, ela acompanha intimamente as interações de seu irmão, Black Cat. O jogador interage com a dupla em múltiplos cenários, culminando em uma escolha crucial na Abadia Arche, onde ela pode ser enfrentada como uma chefe opcional dependendo de como você tratou as condições e pedidos anteriores deles.',
    trivia: [
      'Seu nome verdadeiro é Claudia.',
      'Ela é uma Stalker e a irmã mais velha de Black Cat.',
      'Ela é uma das primeiras NPCs que você encontra no jogo que reconhece e presume que o protagonista P também seja um Stalker.',
      'No Distrito de Malum, ela e seu irmão oferecem uma parceria temporária para derrotar a Irmandade do Coelho Preto (Black Rabbit Brotherhood), embora eles abandonem a ajuda cedo quando Black Cat alega precisar de uma pausa.',
      'Na Galeria da Grande Exposição, ela intercede pelo irmão, pedindo uma Moeda de Fruto de Ouro (Gold Coin Fruit) para ajudar a tratar a cegueira progressiva dele.'
    ],
    description: 'Uma caçadora astuta e protetora que atende pelo codinome de Red Fox. Agindo nas sombras de Krat ao lado de seu irmão mais novo, ela equilibra uma postura inicialmente amigável com um forte instinto de sobrevivência, disposta a fazer o que for necessário para garantir a segurança de sua família.',
    image: redFoxImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'simon_manus',
    name: 'Simon Manus',
    location: 'Grand Exhibition Conference Room', //
    whereFind: 'Você encontrará Simon Manus pela primeira vez logo após derrotar o Campeão Victor (Champion Victor) na Galeria da Grande Exposição, dentro da Sala de Conferências da Grande Exposição (Grand Exhibition Conference Room).', //
    speak: "I'm surprised you defeated Victor. Geppetto's creations are truly marvelous.", //
    quests: [], //
    descriptionQuests: 'Não existem missões ou linhas de quests específicas para este NPC.', //
    trivia: [
      'De acordo com Sophia, ele é considerado o homem mais perigoso de Krat.', //
      'Ele espalha o caos e a morte pela cidade devido à sua crença cega na "Evolução".', //
      'Seu nome do meio é revelado como \'Pistris\' no item colecionável "Confissão de Simon Manus" (Simon Manus\'s Confession), que se traduz como \'Peixe\' ou \'Monstro marinho\'.', //
      'O nome Pistris faz alusão ao Terrível Tubarão (The Terrible Dogfish), o antagonista final do conto original de As Aventuras de Pinóquio, descrito como um monstro marinho massivo.', //
      'Ambos os personagens (Simon Manus e o Tubarão) capturam Geppetto para que o protagonista precise salvá-lo.', //
      'Assim como Pinóquio deve ser engolido pelo Tubarão para alcançar Geppetto, o personagem do jogador deve descer em um abismo após derrotar a sua forma final.', //
      'Ele possui um guia de chefe separado dedicado à sua contraparte de combate final sob o nome de "Simon Manus, Awakened God".' //
    ],
    description: 'O líder implacável dos Alquimistas e a mente por trás de grande parte dos experimentos sombrios que assolam Krat. Movido por uma visão distorcida de evolução e transcendência humana, ele assume o papel de principal antagonista político e ideológico na jornada de P.', //
    image: simonManusImage,
    isDLC: false, //
    isMerchant: false //
  },
  {
    id: 'simon_manus',
    name: 'Simon Manus',
    location: 'Grand Exhibition Conference Room', //
    whereFind: 'Você encontrará Simon Manus pela primeira vez logo após derrotar o Campeão Victor (Champion Victor) na Galeria da Grande Exposição, dentro da Sala de Conferências da Grande Exposição (Grand Exhibition Conference Room).', //
    speak: "I'm surprised you defeated Victor. Geppetto's creations are truly marvelous.", //
    quests: [], //
    descriptionQuests: 'Não existem missões ou linhas de quests específicas para este NPC.', //
    trivia: [
      'De acordo com Sophia, ele é considerado o homem mais perigoso de Krat.', //
      'Ele espalha o caos e a morte pela cidade devido à sua crença cega na "Evolução".', //
      'Seu nome do meio é revelado como \'Pistris\' no item colecionável "Confissão de Simon Manus" (Simon Manus\'s Confession), que se traduz como \'Peixe\' ou \'Monstro marinho\'.', //
      'O nome Pistris faz alusão ao Terrível Tubarão (The Terrible Dogfish), o antagonista final do conto original de As Aventuras de Pinóquio, descrito como um monstro marinho massivo.', //
      'Ambos os personagens (Simon Manus e o Tubarão) capturam Geppetto para que o protagonista precise salvá-lo.', //
      'Assim como Pinóquio deve ser engolido pelo Tubarão para alcançar Geppetto, o personagem do jogador deve descer em um abismo após derrotar a sua forma final.', //
      'Ele possui um guia de chefe separado dedicado à sua contraparte de combate final sob o nome de "Simon Manus, Awakened God".' //
    ],
    description: 'O líder implacável dos Alquimistas e a mente por trás de grande parte dos experimentos sombrios que assolam Krat. Movido por uma visão distorcida de evolução e transcendência humana, ele assume o papel de principal antagonista político e ideológico na jornada de P.', //
    image: simonManusImage,
    isDLC: false, //
    isMerchant: false //
  },
  {
    id: 'sophia',
    name: 'Sophia',
    location: 'Hotel Krat',
    whereFind: 'Sophia fala com você através da sua mente logo no início do jogo na Estação Central de Krat (Krat Central Station). Você pode encontrá-se pessoalmente com ela no Hotel Krat (Hotel Krat).',
    speak: "I will use my power to help you...",
    quests: [
      { name: "The Story Of The Blue Butterfly", description: 'Escolhas de enredo e passos necessários no final do jogo para desvendar a história dela e obter o troféu correspondente.' }
    ],
    descriptionQuests: 'Para desbloquear o troféu "The Story Of The Blue Butterfly":\n\n' +
      '1. Após derrotar Laxasia a Completa (Laxasia The Complete), converse com Sophia e escolha a opção "Dar paz a ela" ("Give her Peace"). Depois disso, você precisará fazer com que a cor do seu cabelo mude, o que exige que você possua alta humanidade no momento em que fizer essa escolha.\n' +
      '2. Posteriormente, selecione a opção de "Recusar" ("Refuse") entregá-lo para Geppetto no final do jogo.\n' +
      '3. Após os créditos, não entre no NG+ e pressione cancelar. Assim que renascer no Hotel Krat, vá até o andar superior e leia o bilhete que está em cima da mesa de Geppetto para receber o troféu.',
    trivia: [
      'Sophia concede ao jogador o acesso para utilizar Ergo para subir de nível livremente a qualquer momento, visto que subir de nível nos Stargazers só é permitido algumas poucas vezes no início.',
      'Ela pode ser interagida assim que o jogo começa e atua como uma guia para P ao longo de toda a jornada.',
      'Mais tarde no jogo, ela aparece junto à Estátua da Santa da Misericórdia (Saintess of Mercy Statue) para explicar a habilidade da estátua em ajudar P a resetar/mudar seus atributos (stats).',
      'Sophia é uma referência direta à Fada Azul (The Blue Fairy) do livro original de As Aventuras de Pinóquio, embora ela funcione apenas como uma inspiração base e não como uma adaptação direta da personagem.'
    ],
    description: 'A misteriosa e acolhedora sintonizadora de Ergo que serve como o porto seguro e o guia espiritual de P na devastada Krat. Capaz de se comunicar mentalmente e projetar sua presença, ela segura as chaves do crescimento do protagonista enquanto esconde um fardo trágico ligado ao próprio Ergo que move a cidade.',
    image: sophiaImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'spring',
    name: 'Spring',
    location: 'Hotel Krat', //
    whereFind: 'Quando você chega inicialmente ao Hotel Krat, Spring pode ser encontrado se limpando em cima de seu arranhador, bem ao lado das estatuetas de animais cuidadosamente organizadas da Eugénie na oficina de armas. Como um típico felino, no entanto, ele se move por vontade própria ao longo do jogo, realocando-se aleatoriamente para um dos seguintes locais:\n' +
      '* Em seu arranhador;\n' +
      '* No topo do armário de chaves atrás de Polendina;\n' +
      '* Em um sofá na ala oeste do hotel;\n' +
      '* No topo de uma pilha de malas no andar superior;\n' +
      '* Na mesa de centro dentro do escritório de Geppetto (Spring deixará de entrar nesta área após um determinado ponto da história).',
    speak: "Meow.", //
    quests: [], //
    descriptionQuests: 'Atualmente não existem missões secundárias associadas a Spring. No entanto, ele serve como um excelente indicador visual do nível de Humanidade atual do jogador. Conforme Pinóquio acumula pontos humanos, a reação do felino muda drasticamente através de quatro estágios distintos de proximidade.',
    trivia: [
      'Spring é um NPC felino em Lies of P e, presumivelmente, o caçador de ratos oficial do Hotel Krat.',
      'Julgando pelo seu comportamento pacífico e ambiente de convivência, ele é visivelmente muito amado e bem cuidado por todos no local.',
      'As interações únicas e progressivas dependem do limiar mais alto de cada nível de Humanidade alcançado pelo jogador:\n\n' +
      '1. Nível "Your springs are reacting": Spring rosna/bufa quando Pinóquio tenta acariciá-lo ou foge caso esteja no topo do armário de chaves.\n' +
      '2. Nível "The Ergo is whispering": Spring esfrega a cabeça afetuosamente na mão de Pinóquio, ou foge temporariamente do armário de chaves mas retorna logo em seguida.\n' +
      '3. Nível "You feel warmth": Pinóquio consegue pegar Spring no colo e o balança gentilmente expressando curiosidade, ou o gato olha em volta e mia para Pinóquio a partir do armário.\n' +
      '4. Nível "Your heart is pounding": Pinóquio pega Spring no colo, dá um abraço carinhoso e o acaricia; Spring retribui esfregando a cabeça confortavelmente no pescoço do protagonista. Se estiver no armário, ele se inclina para frente, cheira e encara Pinóquio fixamente.'
    ],
    description: 'O adorável gato de pelagem alaranjada que vaga livremente pelas dependências seguras do Hotel Krat. Dono de uma personalidade tipicamente independente, ele é o único ser vivo na cidade capaz de farejar e reagir fisicamente à pureza do Ergo e ao desenvolvimento da verdadeira alma e calor humano dentro de P.',
    image: springImage,
    isDLC: false, //
    isMerchant: false //
  },
  {
    id: 'the_atoned',
    name: 'The Atoned',
    location: 'Moonlight Town',
    whereFind: 'Pode ser encontrada do lado de fora da entrada do trem, perto do Stargazer de Cidade do Luar (Moonlight Town). Ela se torna uma minibandeira/minichefe obrigatória caso você decida tentar chegar à Catedral e não possua (ou escolha não usar) o gesto "Stalker\'s Promise" na primeira vez que falar com ela.',
    speak: "Do you want to go up, child?",
    quests: [],
    descriptionQuests: 'Não existem missões secundárias ativas listadas diretamente para esta NPC. Sua interação principal envolve uma checagem de identidade para liberar o acesso ao elevador/bonde:\n\n' +
      '* Se P não puder provar sua identidade como um Stalker: Ela se torna um minichefe obrigatório de mesmo nome e deve ser derrotada para a obtenção da Chave do Teleférico (Cable Railway Key). Ao morrer, ela também derruba a Máscara da Expiada (The Atoned\'s Mask).\n' +
      '* Se P usar o gesto "Stalker\'s Promise": É possível enganá-la para que entregue a chave pacificamente sem uma luta. No entanto, se você retornar até ela após derrotar o Arcebispo Andreus Caído (Fallen Archbishop Andreus), ela se culpará amargamente por ter caído no truque de uma marionete e se tornará hostil, permitindo que o jogador a mate para obter a Máscara da Expiada.',
    trivia: [
      'Seu nome verdadeiro é Melamfo e ela costumava ser uma Stalker.',
      'Após a queda de Krat, Melamfo recebeu a tarefa de proteger civis. Ela direcionou inúmeros sobreviventes a buscarem refúgio na Catedral de São Frangelico, antes de se dar conta de que, na verdade, havia enviado todos eles direto para a morte.',
      'Para expiar seus pecados (atone), ela permanece de guarda em frente ao teleférico entre a Cidade do Luar (Moonlight Town) e o Caminho da Miséria (Path of Misery), jurando não deixar ninguém passar, exceto seus companheiros Stalkers.',
      'O gesto "Stalker\'s Promise", necessário para passar por ela pacificamente, é obtido ao derrotar o chefe opcional Survivor anteriormente.'
    ],
    description: 'Uma Stalker respeitosa e profundamente atormentada pelo remorso que atende pelo codinome de The Atoned. Assumindo a guarda solitária do teleférico de Krat, ela esconde sua identidade sob uma máscara canina e jura bloquear o acesso à Catedral, tentando desesperadamente impedir que mais inocentes marchem rumo ao terrível destino que ela mesma ajudou a causar.',
    image: theAtonedImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'toma',
    name: 'Toma',
    location: 'Inside the House on Elysion Boulevard',
    whereFind: 'Pode ser encontrado conversando através de uma janela iluminada nas ruas logo após o Stargazer "Dentro da Casa no Boulevard Elysion" (Inside the House on Elysion Boulevard). A partir do Stargazer, caminhe pelos telhados, procure pela escada à sua direita e, ao chegar ao nível do chão, procure por uma janela acesa sem silhueta de onde se pode ouvir alguém tossindo.',
    speak: "Who... is it? Is that you, Murphy?",
    quests: [
      { name: "Toma's Request", description: 'Inicie o diálogo com o garoto doente e encontre o apito de seu amigo Murphy para confortá-lo.' }
    ],
    descriptionQuests: 'ATENÇÃO PARA NÃO PERDER A QUEST: Para progredir nesta missão, certifique-se de falar com Toma e aceitar a quest antes de derrotar o chefe Vigia Descartado (Scrapped Watchman). Derrotar o chefe antes de falar com ele fará com que o item Apito Desbotado (Faded Whistle) não apareça no local correto.\n\n' +
      'Após derrotar o Vigia Descartado na arena principal, pegue o Apito Desbotado (Faded Whistle) que está em cima de um banco aceso com velas. Use o teletransporte para voltar ao Stargazer mais próximo da casa de Toma, retorne até a janela dele e use/toque o Apito Desbotado de frente para a janela. Ele reconhecerá o som dizendo "Eu conheço esse apito... deve ser o Murphy!", completando a missão.',
    trivia: [
      'Toma é um garoto infectado que anseia e sente muita falta de seu grande amigo Murphy.',
      'Diferente de outras janelas de sobreviventes, a dele não exibe nenhuma silhueta visível por quem passa.',
      'Após completar a sua missão e se afastar da janela, o jogador pode ouvir o som do apito sendo soprado consecutivamente uma última vez, sumindo aos poucos; isso representa, muito provavelmente, o momento em que a petrificação total toma o corpo do garoto e ele falece.'
    ],
    description: 'Um garoto febril e infectado que passa seus últimos momentos isolado atrás de uma das janelas do Boulevard Elysion. Enfraquecido pela Doença da Petrificação, sua única linha de conforto em meio à dor é a esperança nostálgica de reencontrar Murphy, o guarda marionete que costumava brincar com as crianças locais.',
    image: tomaImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'venigni',
    name: 'Lorenzini Venigni',
    location: 'Venigni Works Control Room',
    whereFind: 'Pode ser encontrado inicialmente na Sala de Controle das Obras de Venigni (Venigni Works Control Room), perto dos grandes tubos vermelhos no bueiro do sindicato da oficina (Workshop Union Culvert). Após consertar Pulcinella, ambos podem ser encontrados residindo no Hotel Krat.',
    speak: "Easy now! No need to kill me. Surely we can discuss this like reasonable... people?",
    quests: [
      { name: "Venigni's Request: The Missing Butler", description: 'Ajude o inventor a encontrar e restaurar o seu mordomo marionete desaparecido, Pulcinella.' }
    ],
    descriptionQuests: 'Para desbloquear o troféu "The Story Of The Prince":\n\n' +
      '1. Fale com Venigni assim que encontrá-lo na Sala de Controle das Obras de Venigni (Venigni Works Control Room).\n' +
      '2. Assim que chegar à Arcada Lorenzini (Lorenzini Arcade), pegue a nota "Scandal! V, The Tragedy Behind the Flamboyance!".\n' +
      '3. Quando alcançar a Parede Externa da Abadia Arche (Arche Abbey Outer Wall), vá até a última porta da Trindade e converse com o Rei das Charadas, Arlecchino.\n' +
      '4. Leia o livro "Scandal" novamente, fale com Arlecchino e selecione a opção de diálogo "The Truth behind the Venigni Incident".\n' +
      '5. Receba o item de balão de brinquedo (toy balloon) de Arlecchino e mostre esse item para Venigni no Hotel Krat.\n' +
      '6. Depois disso, esgote os diálogos com Venigni para receber o troféu.\n\n' +
      'Missão Secundária do Decodificador de Comprimento de Onda Ergo (Ergo Wavelength Decoder):\n' +
      '* É uma missão passiva que se desenvolve ao longo do jogo. Venigni dará a P o "Ergo Wavelength Decoder" (que permanece no inventário).\n' +
      '* Após derrotar a Irmandade do Coelho Preto (Black Rabbit Brotherhood) na Relíquia de Trismegistus (Relic of Trismegistus), fale com Venigni no hotel para ativar um diálogo especial onde você deve escolher entre esconder a verdade (mentir) ou revelar a verdade sobre a causa do Frenesi das Marionetes (Puppet Frenzy). Revelar a verdade não dá recompensa especial, enquanto mentir concede pontos de humanidade.\n' +
      '* Após essa conversa, descanse em um Stargazer e Venigni lhe entregará o item "King of Puppets\' Message", que pode ser ouvido no Stargazer do Hotel Krat para obter pontos de humanidade adicionais.',
    trivia: [
      'Venigni é amplamente conhecido em Krat como o Gênio da Tecnologia (Genius of Technology).',
      'Ele é o criador original de Pulcinella, seu fiel mordomo robótico.',
      'No início do New Game + (NG+), o jogador recebe o item "Completed Ergo Wavelength Decoder", que permite traduzir e compreender perfeitamente a linguagem dos chefes marionetes durante as batalhas.'
    ],
    description: 'O excêntrico, genial e bilionário inventor responsável por grande parte dos avanços tecnológicos e automações que ergueram a cidade de Krat. Embora use uma fachada extravagante e confiante, Venigni carrega traumas profundos do passado e se torna um aliado científico vital para P no Hotel Krat, traduzindo mensagens encriptadas e decodificando os mistérios por trás do Ergo.',
    image: venigniImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'white_lady',
    name: 'White Lady',
    location: 'Rosa Isabelle Street Entrance',
    whereFind: 'Pode ser localizada em uma área aberta que se assemelha a um pátio cheio de corpos empalados, situada perto do Stargazer da Entrada da Rua Rosa Isabelle (Rosa Isabelle Street Entrance).',
    speak: "What a beautiful puppet you are!",
    quests: [],
    descriptionQuests: 'Não existem missões secundárias ativas listadas diretamente para esta NPC. Sua interação principal é um confronto direto e obrigatório:\n\n' +
      '* Ao avistar P, ela percebe imediatamente que ele é uma marionete, alegando que consegue ouvir as suas engrenagens/molas ("springs"). Ela faz um elogio sarcástico e o ataca em seguida, tornando-se uma minichefe obrigatória (mandatory mini-boss) que deve ser derrotada para progredir na história.\n' +
      '* Quando derrotada, ela derruba como recompensa o Medalhão da Dama de Branco (The White Lady\'s Locket) e a Máscara da Dama de Branco (The White Lady\'s Mask).',
    trivia: [
      'Seu nome verdadeiro é Patricia Corday, e ela era a irmã mais nova da Atriz de Vermelho (Red Actress), Adelina Corday.',
      'Ambas as irmãs sonhavam em se tornar cantoras de ópera um dia, mas o sonho da jovem Patricia foi interrompido por um incidente trágico: ela acidentalmente se envenenou, arruinando permanentemente sua garganta.',
      'Devido a essa tragédia, ela foi forçada a se tornar uma Stalker, enquanto sua irmã mais velha continuou a conquistar os palcos, eventualmente tornando-se a atriz e cantora de ópera mais conhecida de Krat.',
      'Após a queda de Krat, a White Lady passou a patrulhar a Rua Rosa Isabelle, caçando marionetes impiedosamente para vingar a suposta morte de sua irmã.',
      'Revelação Sombria: Se o jogador completar a missão secundária "The Actress in the Opera House", descobre-se que o envenenamento de Patricia não foi um acidente; Adelina a envenenou deliberadamente por puro ciúme e medo de ser superada.'
    ],
    description: 'Uma Stalker formidável e mentalmente instável que patrulha os pátios ensanguentados da Rua Rosa Isabelle sob uma elegante máscara alva. Consumida pelo luto e pelo desejo furioso de vingar sua irmã, ela caça qualquer marionete que cruze seu caminho, sem imaginar a terrível e cruel traição familiar que moldou o seu trágico destino.',
    image: whiteLadyImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'weeping_woman',
    name: 'Weeping Woman',
    location: 'Inside the House on Elysion Boulevard',
    whereFind: 'No topo da área, você pode interagir com uma janela aberta que exibe uma silhueta para falar com a Weeping Woman. O Stargazer mais próximo para esta localização é "Dentro da Casa no Boulevard Elysion" (Inside the House on Elysion Boulevard).',
    speak: "Oh... It must be your first time in the Petrification Disease quarantine zone.",
    quests: [
      { name: "Find My Baby", description: 'Procure e recupere o bebê perdido de uma mãe infectada na zona de quarentena.' }
    ],
    descriptionQuests: 'Após falar com ela na janela, você deve procurar pelo item Boneco de Bebê Quebrado (Broken Baby Puppet) em uma área central da Prefeitura de Krat (Krat City Hall), localizado perto de uma árvore com a inscrição "Will you be my friend?".\n\n' +
      'Retorne até a Weeping Woman e interaja com sua janela. Ela dirá que o boneco em sua posse é o seu bebê, Elena, ativando um cenário do Sistema de Mentiras (Lie System). Ela perguntará se você acha que o bebê dela é fofo. Você terá a opção de dizer a verdade (que é um boneco) ou mentir (dizendo que o bebê é fofo):\n' +
      '* Se você Mentir (Lie): Ela ficará feliz, agradecerá e recompensará P com o Disco de Música "Feel" (Feel Record) e um Fragmento de Ergo Vívido (Vivid Ergo Fragment).\n' +
      '* Mentir para ela contribuirá diretamente para o ganho de Humanidade de Pinóquio. Se o seu objetivo no jogo for coletar discos (Records), é altamente recomendado que você escolha mentir.',
    trivia: [
      'A Weeping Woman é uma cidadã de Krat gravemente infectada pela Doença da Petrificação e isolada na zona de quarentena.',
      'A ilusão mental causada pela doença faz com que ela enxergue um boneco mecânico destruído como se fosse sua verdadeira filha desaparecida.',
      'O disco de música "Feel" obtido em sua missão é um dos itens necessários para aumentar a humanidade e buscar um dos finais do jogo.'
    ],
    description: 'Uma mãe devastada pelo luto e pela Doença da Petrificação que chora desesperadamente atrás de uma silhueta iluminada no Boulevard Elysion. Consumida pelo estágio avançado da infecção, sua mente se apega à trágica ilusão de reencontrar sua pequena filha Elena, testando a capacidade de P de demonstrar compaixão e misericórdia através de uma mentira reconfortante.',
    image: weepingWomanImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'broken_puppet',
    name: 'Broken Puppet',
    location: 'Barren Swamp',
    whereFind: 'Pode ser encontrado localizado na área do Pântano Estéril (Barren Swamp).',
    speak: "Hello, my only friend! What have you come to tell me?",
    quests: [
      { name: 'The Broken Puppet', description: 'Ensine diferentes emoções humanas ao boneco através do uso de gestos específicos.' }
    ],
    descriptionQuests: 'Para completar a missão principal associada ao Broken Puppet no jogo base, você precisará adquirir e utilizar quatro gestos específicos diante dele: bater palmas (Clap), tristeza (Sad), raiva (Anger) e felicidade (Happy). Após demonstrar com sucesso essas emoções e completar a linha de missão, fale com ele novamente para receber um Quartzo (Quartz) como recompensa.\n\n' +
      'Além disso, o boneco possui interações extras exclusivas com gestos obtidos na DLC Overture:\n' +
      '* Gesto "Play Dead": Ao adquiri-lo na DLC Overture e ensiná-lo ao Broken Puppet no Pântano Estéril, ele recompensará P com o item Pó de Gato (Cat Dust).\n' +
      '* Gesto "Cheer": Ao adquiri-lo na DLC Overture e ensiná-lo ao boneco, ele recompensará P com um Fragmento de Ergo Resplandecente (Resplendent Ergo Fragment).\n' +
      '* Gesto "Heart": Ao adquiri-lo na DLC Overture e ensiná-lo ao boneco, ele recompensará P com uma Ampola de Recuperação Milagrosa (Miraculous Recovery Ampoule).',
    trivia: [
      'O Broken Puppet é uma marionete única movida por um desejo profundo de compreender as complexas emoções humanas.',
      'Ele considera P como o seu único amigo e serve como um excelente ponto de interação para recompensas valiosas tanto no jogo base quanto na expansão.'
    ],
    description: 'Uma marionete singular e danificada que repousa na vastidão desolada do Pântano Estéril. Diferente de seus semelhantes hostis, ela demonstra uma tocante semente de senciência, buscando desesperadamente aprender e imitar os sentimentos humanos através dos movimentos de P para compreender o mundo ao seu redor.',
    image: brokenPuppetImage,
    isDLC: false,
    isMerchant: false
  },
  {
    id: 'polendina',
    name: 'Polendina',
    location: 'Hotel Krat',
    whereFind: 'Localizado no balcão principal de recepção do Hotel Krat, posicionado exatamente à esquerda de Sophia.',
    speak: "At Hotel Krat, comfort and calm walk hand in hand.",
    quests: [],
    descriptionQuests: 'Como um dos principais comerciantes do jogo, o inventário de Polendina é expandido progressivamente ao encontrar e entregar a ele 3 itens funcionais chamados Caixas de Suprimentos de Krat (Krat Supply Boxes):\n\n' +
      '* Krat Supply Box: Encontrada no topo da Torre de Madeira na Capela da Catedral de São Frangelico (St. Frangelico Cathedral Chapel). Após derrotar o inimigo de Decomposição (Decay Enemy), entre na sala à direita para encontrar um baú em uma das celas.\n' +
      '* Sturdy Krat Supply Box: Encontrada na Área 7, no Grande Salão de Exposições (Grand Exhibition Hall). Fica bem ao lado da escada que cria um atalho para o Stargazer da área.\n' +
      '* Special Krat Supply Box: Encontrada na Área 9, perto do Stargazer da "Rua Colapsada" (Collapsed Street). Assim que desbloquear a escada de atalho, vá para a esquerda imediata em direção à borda externa e siga para a direita até encontrar outra escada que desce para um baú.',
    trivia: [
      'Polendina atua oficialmente como o recepcionista do Hotel Krat além de gerenciar sua própria loja de suprimentos.',
      'Ele é uma marionete de comportamento extremamente polido e formal, dedicado a manter a ordem e o conforto dos hóspedes do hotel.',
      'Sua loja é a principal fonte de materiais de progressão raros, como Quartzos e Pedras da Lua da Aliança, essenciais para o aprimoramento do personagem e equipamentos.'
    ],
    description: 'O fiel e sofisticado recepcionista mecânico do Hotel Krat. Operando atrás do balcão principal, Polendina oferece uma farta loja de suprimentos para P, comercializando desde consumíveis básicos de purificação até itens raros de progressão, cujo estoque se expande à medida que recupera caixas de suprimentos perdidas pela cidade.',
    image: polendinaImage,
    isDLC: false,
    isMerchant: true,
    shopInventory: [
      { itemName: 'Fable Catalyst', itemType: 'Consumable', cost: 400, required: '0 Supply Box' },
      { itemName: 'Legion Magazine', itemType: 'Consumable', cost: 250, required: '0 Supply Box' },
      { itemName: 'Quartz x2', itemType: 'Material', cost: 2800, required: '0 Supply Box' },
      { itemName: 'Sawtoothed Wheel', itemType: 'Throwing Object', cost: 100, required: '0 Supply Box' },
      { itemName: 'Attribute Purification Ampoule', itemType: 'Consumable', cost: 480, required: '1 Supply Box' },
      { itemName: 'Bright Red Apple', itemType: 'Recollection', cost: 1000, required: '1 Supply Box' },
      { itemName: 'Dark moon Moonstone of the Covenant x2', itemType: 'Material', cost: 1560, required: '1 Supply Box' },
      { itemName: 'Hidden Moonstone', itemType: 'Material', cost: 300, required: '1 Supply Box' },
      { itemName: "Venigni's Urgent Repair Tool", itemType: 'Consumable', cost: 250, required: '1 Supply Box' },
      { itemName: 'Alchemical Booster', itemType: 'Material', cost: 2000, required: '2 Supply Box' },
      { itemName: 'Crescent Moonstone', itemType: 'Material', cost: 1200, required: '2 Supply Box' },
      { itemName: 'Dark moon Moonstone of the Covenant x3', itemType: 'Material', cost: 1820, required: '2 Supply Box' },
      { itemName: 'Legion Calendar x1', itemType: 'Material', cost: 3000, required: '2 Supply Box' },
      { itemName: "Venigni's Urgent Repair Tool x3", itemType: 'Consumable', cost: 250, required: '2 Supply Box' },
      { itemName: 'Special Purification Ampoule', itemType: 'Consumable', cost: 420, required: '2 Supply Box' },
      { itemName: 'Quartz x1', itemType: 'Material', cost: 4000, required: '2 Supply Box' },
      { itemName: 'Acid Abrasive', itemType: 'Consumable', cost: 1280, required: '3 Supply Box' },
      { itemName: 'Attribute Resistance Ampoule', itemType: 'Consumable', cost: 400, required: '3 Supply Box' },
      { itemName: 'Dark moon Moonstone of the Covenant x4', itemType: 'Material', cost: 2080, required: '3 Supply Box' },
      { itemName: 'Electric Blitz Abrasive', itemType: 'Consumable', cost: 1280, required: '3 Supply Box' },
      { itemName: 'Fire Abrasive', itemType: 'Consumable', cost: 1280, required: '3 Supply Box' },
      { itemName: 'Full Moonstone of the Covenant x1', itemType: 'Material', cost: 6500, required: '3 Supply Box' },
      { itemName: 'Half Moonstone', itemType: 'Material', cost: 3000, required: '3 Supply Box' },
      { itemName: 'Legion Calendar x1', itemType: 'Material', cost: 3800, required: '3 Supply Box' },
      { itemName: 'Rusty Cryptic Vessel', itemType: 'Cryptic Vessel', cost: 1000, required: '3 Supply Box' },
      { itemName: 'Special Resistance Ampoule', itemType: 'Consumable', cost: 360, required: '3 Supply Box' },
      { itemName: 'Stabilized Alchemical Booster', itemType: 'Material', cost: 4000, required: '3 Supply Box' },
      { itemName: 'Quartz x1', itemType: 'Material', cost: 4400, required: '3 Supply Box' }
    ]
  },
  {
    id: 'alidoro',
    name: 'Alidoro',
    location: 'St. Frangelico Cathedral Library',
    whereFind: 'Inicia sua jornada na Biblioteca da Catedral de São Frangelico (St. Frangelico Cathedral Library). A partir do Stargazer, suba para os andares superiores, cruze o portão seguindo o caminho linear enfrentando carcaças até encontrar um elevador que leva a uma área aberta acima da catedral. Caso passe direto por ele nesta área, ele se moverá para a sala logo após o chefe Arcebispo Decaído Andreus (Fallen Archbishop Andreus) assim que derrotá-lo. Ao longo do jogo, ele se move para o Hotel Krat (ou Venigni Works caso você minta), para o Pântano Estéril (Barren Swamp) após a derrota do Campeão Victor, e finalmente para a Relíquia de Trismegistus.',
    speak: "Huh, that's odd. I thought I was the only one with a sound mind here.",
    quests: [],
    descriptionQuests: 'Alidoro é o comerciante central de Armas Especiais e Amuletos obtidos através do Ergo de Chefes. Sua presença dita passos fundamentais da história:\n\n' +
      '* ATENÇÃO: Se você decidir não falar com Alidoro em sua localização inicial (Catedral), as missões secundárias da Eugénie não poderão ser iniciadas ou concluídas, e ele não aparecerá em pontos posteriores como o Pântano Estéril.\n' +
      '* Dinâmica de Mentiras (Venigni Works): Ao encontrá-lo pela primeira vez, ele pede indicação de um refúgio seguro. Se escolher enviá-lo para as Obras de Venigni (Venigni Works), você o encontrará perto do Stargazer da entrada do Sindicato da Oficina. Ali ele te dá outra chance de falar a verdade (Hotel Krat) ou mentir novamente (Boulevard Elysion). Mesmo mentindo duas vezes, ele eventualmente acabará indo para o Hotel Krat, mas sua atitude mudará por saber que foi enganado.\n' +
      '* O Confronto na Relíquia de Trismegistus: Após o ataque ao Hotel Krat, ele foge para a Relíquia de Trismegistus, localizado logo após o Stargazer do Campo de Combate da Relíquia, perto de uma fogueira (exige derrotar a Irmandade do Coelho Preto pela segunda vez). Ao interagir com ele, você terá três opções: "Purchase" (Comprar), "Talk" (Conversar) e "Attack Alidoro" (Atacar Alidoro). É altamente recomendado selecionar "Talk" primeiro para ouvir sua confissão e descobrir sua verdadeira identidade.\n' +
      '* Decidindo o Destino: Se você poupar a vida dele, ele continuará agindo como seu comerciante. Se escolher "Attack Alidoro" e confirmar, ele se tornará alvo e morrerá instantaneamente com um único golpe.\n' +
      '* Consequências de Abatê-lo: Matá-lo NÃO bloqueia o comércio de armas de chefes, pois o NPC Rookie Explorer Hugo assumirá o mesmo canto do Hotel Krat para vender os produtos. Além disso, matá-lo é obrigatório para obter o Recipiente Criptográfico de Alidoro (Alidoro\'s Cryptic Vessel) e dois discos de música. Leve o recipiente para Venigni decifrar. Após ler a decodificação completa, fale com Eugénie; escolher "I think he was just a talented Stalker" dá humanidade e um Pedaço de Ergo Radiante; escolher "He Was Eugénie\'s Older Brother" concede o troféu "The Story of a Stranger Girl" e o disco Far East Princess após descansar e falar com ela de novo.',
    trivia: [
      'Alidoro usa uma marcante máscara de cachorro e se destaca por manter a mente sã em meio ao caos da cidade, embora suas motivações escondam segredos obscuros.',
      'Caso seja poupado, mesmo após a conclusão de qualquer um dos finais do jogo, ele permanece no mesmo local na Relíquia de Trismegistus, expressando surpresa ao ver P vivo e com uma aparência diferente.',
      'Abatê-lo concede o disco de música "Proposal, Flower, Wolf Part 1" de forma imediata de acordo com as atualizações mais recentes do jogo.'
    ],
    description: 'Um enigmático Stalker mascarado que atua como o único negociante capaz de extrair o verdadeiro poder contido no Ergo dos grandes chefes de Krat, transformando-os em armas singulares ou amuletos de alto poder. Sua trajetória ambígua e suas interações com Eugénie guardam uma das revelações de identidade mais profundas e trágicas do jogo, cabendo a P decidir o destino de sua vida.',
    image: alidoroImage,
    isDLC: false,
    isMerchant: true,
    shopInventory: [
      { itemName: 'Arm of God Amulet', itemType: 'Amulet', cost: 'x1 Reborn Champion\'s Ergo', required: 'Disponível' },
      { itemName: 'Awakened God\'s Amulet', itemType: 'Amulet', cost: 'x1 Fallen One\'s Ergo', required: 'Disponível' },
      { itemName: 'Conquering Amulet', itemType: 'Amulet', cost: 'x1 King\'s Flame Ergo', required: 'Disponível' },
      { itemName: 'Dancing One\'s Amulet', itemType: 'Amulet', cost: 'x1 Parade Leader\'s Ergo', required: 'Disponível' },
      { itemName: 'Etiquette', itemType: 'Special Weapon', cost: 'x1 Broken Hero\'s Ergo', required: 'Disponível' },
      { itemName: 'Extreme Modification Amulet', itemType: 'Amulet', cost: 'x1 Broken Hero\'s Ergo', required: 'Disponível' },
      { itemName: 'Frozen Feast', itemType: 'Special Weapon', cost: 'x1 Reborn Champion\'s Ergo', required: 'Disponível' },
      { itemName: 'Ghost Walk Amulet', itemType: 'Amulet', cost: 'x1 Puppet-Devouring Green Hunter\'s Ergo', required: 'Disponível' },
      { itemName: 'Holy Sword of the Ark', itemType: 'Special Weapon', cost: 'x1 King\'s Flame Ergo', required: 'Disponível' },
      { itemName: 'Impregnable Fortress Amulet', itemType: 'Amulet', cost: 'x1 Sad Zealot\'s Ergo', required: 'Disponível' },
      { itemName: 'Nameless One\'s Amulet', itemType: 'Amulet', cost: 'x1 Twisted Angel\'s Ergo', required: 'Disponível' },
      { itemName: 'Noblesse Oblige', itemType: 'Special Weapon', cost: 'x1 Fallen One\'s Ergo', required: 'Disponível' },
      { itemName: 'Piercing Hatred Amulet', itemType: 'Amulet', cost: 'x1 Nameless Puppet\'s Ergo', required: 'Disponível' },
      { itemName: 'Proof of Humanity', itemType: 'Special Weapon', cost: 'x1 Nameless Puppet\'s Ergo', required: 'Disponível' },
      { itemName: 'Puppet Ripper', itemType: 'Special Weapon', cost: 'x1 Burnt-White King\'s Ergo', required: 'Disponível' },
      { itemName: 'Seven-Coil Spring Sword', itemType: 'Special Weapon', cost: 'x1 Parade Leader\'s Ergo', required: 'Disponível' },
      { itemName: 'Trident of the Covenant', itemType: 'Special Weapon', cost: 'x1 Twisted Angel\'s Ergo', required: 'Disponível' },
      { itemName: 'Triumvirate Amulet', itemType: 'Amulet', cost: 'x1 Burnt-White King\'s Ergo', required: 'Disponível' },
      { itemName: 'Two Dragons Sword', itemType: 'Special Weapon', cost: 'x1 Puppet-Devouring Green Hunter\'s Ergo', required: 'Disponível' },
      { itemName: 'Uroboro\'s Eye', itemType: 'Special Weapon', cost: 'x1 Sad Zealot\'s Ergo', required: 'Disponível' }
    ]
  },
  {
    id: 'giangio',
    name: 'Giangio',
    location: 'Path of Misery',
    whereFind: 'Pode ser encontrado inicialmente no Caminho da Miséria (Path of Misery), fazendo o caminho inverso a partir da estátua do anjo de uma asa só na ponte que leva à Catedral de São Frangelico; vire à esquerda (à direita da estátua do anjo) e desça as escadas. Depois de um tempo e ao avançar na história, ele se moverá para o Stargazer da Capela da Catedral de São Frangelico (St. Frangelico Cathedral Chapel). Por fim, após derrotar o Mais Velho da Irmandade do Coelho Preto (Eldest of the Black Rabbit Brotherhood), você o encontrará subindo um elevador a partir do esconderijo da irmandade, perto do Stargazer da Prefeitura do Distrito de Malum (Malum District Town Hall), onde ele apontará a direção da Árvore de Moedas de Ouro (Gold Coin Tree).',
    speak: "Aagh! Mercy, I beg you! Don't kill me!",
    quests: [],
    descriptionQuests: 'Giangio introduz uma mecânica fundamental de suporte ao jogador através de suas interações:\n\n' +
      '* Ele entregará ao jogador o item Cubo (Cube).\n' +
      '* O jogador pode equipar Pedras de Desejo (Wishstones) no Cubo através de Giangio ou interagindo diretamente em qualquer Stargazer.\n' +
      '* Ele afirma ter encontrado a lendária Árvore de Moedas de Ouro, e seu comércio funciona exclusivamente trocando os frutos colhidos nela por itens consumíveis e pedras com propriedades especiais de melhoria de atributos e suporte para o Espectro.',
    trivia: [
      'Giangio usa capuz e mantém uma postura bastante assustada e defensiva quando P se aproxima dele pela primeira vez.',
      'Sua loja se torna a principal fonte para obter Star Fragments extras e uma enorme variedade de Wishstones que alteram os efeitos de cura, buffs e utilitários do Cubo.',
      'A Árvore de Moedas de Ouro para a qual ele guia o jogador passa a ser um ponto fixo de colheita temporal ao longo de toda a jornada.'
    ],
    description: 'Um boticário e comerciante viajante de aparência misteriosa que busca uma cura para as terríveis mazelas de Krat. Giangio introduz P ao poder místico do Cubo e das Pedras de Desejo, estabelecendo-se permanentemente junto à Árvore de Moedas de Ouro para gerenciar um comércio focado em itens de suporte tático para os confrontos mais brutais do jogo.',
    image: giangioImage,
    isDLC: false,
    isMerchant: true,
    shopInventory: [
      { itemName: 'Star Fragment', itemType: 'Material', cost: '3 Gold Coin Fruit', required: 'Disponível' },
      { itemName: 'Recovery Wishstone', itemType: 'Wishstone', cost: '3 Gold Coin Fruit', required: 'Disponível' },
      { itemName: 'Patience Wishstone', itemType: 'Wishstone', cost: '3 Gold Coin Fruit', required: 'Disponível' },
      { itemName: 'Friendship Wishstone', itemType: 'Wishstone', cost: '2 Gold Coin Fruit', required: 'Disponível' },
      { itemName: 'Courage Wishstone', itemType: 'Wishstone', cost: '3 Gold Coin Fruit', required: 'Disponível' },
      { itemName: 'Advance Wishstone', itemType: 'Wishstone', cost: '3 Gold Coin Fruit', required: 'Disponível' },
      { itemName: 'Explosive Wishstone', itemType: 'Wishstone', cost: '2 Gold Coin Fruit', required: 'Disponível' },
      { itemName: 'Protection Wishstone', itemType: 'Wishstone', cost: '2 Gold Coin Fruit', required: 'Disponível' },
      { itemName: 'Frenzy Wishstone', itemType: 'Wishstone', cost: '2 Gold Coin Fruit', required: 'Disponível' },
      { itemName: 'Lightning Wishstone', itemType: 'Wishstone', cost: '2 Gold Coin Fruit', required: 'Disponível' },
      { itemName: 'Flame Wishstone', itemType: 'Wishstone', cost: '2 Gold Coin Fruit', required: 'Disponível' },
      { itemName: 'Indomitable Wishstone', itemType: 'Wishstone', cost: '2 Gold Coin Fruit', required: 'Disponível' },
      { itemName: 'Poison Wishstone', itemType: 'Wishstone', cost: '2 Gold Coin Fruit', required: 'Disponível' },
      { itemName: 'Provocation Wishstone', itemType: 'Wishstone', cost: '2 Gold Coin Fruit', required: 'Disponível' }
    ]
  },
  {
    id: 'rookie_explorer_hugo',
    name: 'Rookie Explorer Hugo',
    location: 'Barren Swamp Bridge',
    whereFind: 'Encontrado inicialmente logo atrás do Stargazer da Ponte do Pântano Estéril (Barren Swamp Bridge), bem ao lado da entrada para a Caverna do Eremita (Hermit\'s Cave) na área do Pântano Estéril. Contudo, se você optar por matar Alidoro em sua jogada, Hugo mudará de lugar e passará a ser encontrado no exato local onde Alidoro costumava residir no Hotel Krat.',
    speak: "Life is short, and life in Krat is shorter. I reckon I should cherish what time i've got.",
    quests: [],
    descriptionQuests: 'Hugo introduz uma linha de diálogo que concede itens encriptados e atua como um sistema de segurança de comércio para o jogador:\n\n' +
      '* Ao encontrá-lo pela primeira vez, esgote todos os seus diálogos para obter o item Recipiente Criptográfico Antigo (Old Cryptic Vessel), que deve ser levado a Venigni para decifrar.\n' +
      '* Caso o jogador decida executar Alidoro na Relíquia de Trismegistus, Hugo assume o papel de comerciante substituto de Armas Especiais e Amuletos lendários, permitindo que o progresso e as trocas baseadas em Ergo de Chefes raros continuem sem prejuízos.',
    trivia: [
      'Hugo usa uma máscara artesanal de cachorro bastante semelhante à de Alidoro, demonstrando uma imensa fascinação pelo lendário Stalker caçador de tesouros.',
      'Sua localização inicial bloqueia ou indica a proximidade da entrada de uma área secreta, a Caverna do Eremita.',
      'Seu inventário de troca de armas e amuletos é idêntico ao de Alidoro, garantindo que o jogador tenha acesso total a equipamentos especiais até o fim do jogo.'
    ],
    description: 'Um jovem explorador entusiasmado e novato que idolatra as histórias de Alidoro. Hugo usa uma réplica de feltro de sua máscara e aguarda nos limites perigosos do Pântano Estéril, oferecendo pistas encriptadas valiosas. Ele assume um papel crucial no Hotel Krat caso o destino de seu ídolo seja selado de forma trágica.',
    image: rookieExplorerHugoImage,
    isDLC: false,
    isMerchant: true,
    shopInventory: [
      { itemName: 'Arm of God Amulet', itemType: 'Amulet', cost: 'x1 Reborn Champion\'s Ergo', required: 'Disponível' },
      { itemName: 'Awakened God\'s Amulet', itemType: 'Amulet', cost: 'x1 Fallen One\'s Ergo', required: 'Disponível' },
      { itemName: 'Conquering Amulet', itemType: 'Amulet', cost: 'x1 King\'s Flame Ergo', required: 'Disponível' },
      { itemName: 'Dancing One\'s Amulet', itemType: 'Amulet', cost: 'x1 Parade Leader\'s Ergo', required: 'Disponível' },
      { itemName: 'Etiquette', itemType: 'Special Weapon', cost: 'x1 Broken Hero\'s Ergo', required: 'Disponível' },
      { itemName: 'Extreme Modification Amulet', itemType: 'Amulet', cost: 'x1 Broken Hero\'s Ergo', required: 'Disponível' },
      { itemName: 'Frozen Feast', itemType: 'Special Weapon', cost: 'x1 Reborn Champion\'s Ergo', required: 'Disponível' },
      { itemName: 'Ghost Walk Amulet', itemType: 'Amulet', cost: 'x1 Puppet-Devouring Green Hunter\'s Ergo', required: 'Disponível' },
      { itemName: 'Holy Sword of the Ark', itemType: 'Special Weapon', cost: 'x1 King\'s Flame Ergo', required: 'Disponível' },
      { itemName: 'Impregnable Fortress Amulet', itemType: 'Amulet', cost: 'x1 Sad Zealot\'s Ergo', required: 'Disponível' },
      { itemName: 'Nameless One\'s Amulet', itemType: 'Amulet', cost: 'x1 Twisted Angel\'s Ergo', required: 'Disponível' },
      { itemName: 'Noblesse Oblige', itemType: 'Special Weapon', cost: 'x1 Fallen One\'s Ergo', required: 'Disponível' },
      { itemName: 'Piercing Hatred Amulet', itemType: 'Amulet', cost: 'x1 Nameless Puppet\'s Ergo', required: 'Disponível' },
      { itemName: 'Proof of Humanity', itemType: 'Special Weapon', cost: 'x1 Nameless Puppet\'s Ergo', required: 'Disponível' },
      { itemName: 'Puppet Ripper', itemType: 'Special Weapon', cost: 'x1 Burnt-White King\'s Ergo', required: 'Disponível' },
      { itemName: 'Seven-Coil Spring Sword', itemType: 'Special Weapon', cost: 'x1 Parade Leader\'s Ergo', required: 'Disponível' },
      { itemName: 'Trident of the Covenant', itemType: 'Special Weapon', cost: 'x1 Twisted Angel\'s Ergo', required: 'Disponível' },
      { itemName: 'Triumvirate Amulet', itemType: 'Amulet', cost: 'x1 Burnt-White King\'s Ergo', required: 'Disponível' },
      { itemName: 'Two Dragons Sword', itemType: 'Special Weapon', cost: 'x1 Puppet-Devouring Green Hunter\'s Ergo', required: 'Disponível' },
      { itemName: 'Uroboro\'s Eye', itemType: 'Special Weapon', cost: 'x1 Sad Zealot\'s Ergo', required: 'Disponível' }
    ]
  },
  {
    id: 'test_subject_826',
    name: 'Test Subject 826',
    location: 'Arche Abbey Outer Wall',
    whereFind: 'Pode ser encontrado inicialmente na Parede Externa da Abadia de Arche (Arche Abbey Outer Wall), em um grande corredor/atalho oculto que conecta o Stargazer local à área da Porta da Trindade (Trinity Door). Este corredor é revelado quando um Alquimista Juggernaut quebra a parede para atacar. Após falar com ele e derrotar Laxasia, a Completa (Laxasia The Complete), abra a porta ao final do corredor para que ele escape. Posteriormente, ele se move para a Rua Rosa Isabelle (Rosa Isabelle Street), localizado na ponte de pedra que fica logo acima da área onde você enfrentou o chefe Marionete do Palhaço Louco (Mad Clown Puppet).',
    speak: "I'm not going back. I'm sick on consuming Ergo.",
    quests: [],
    descriptionQuests: 'A interação com Test Subject 826 desbloqueia gestos e expande suas possibilidades como comerciante:\n\n' +
      '* Ao falar com ele na Abadia de Arche, você obterá o gesto Felicidade (Happy).\n' +
      '* Certifique-se de esgotar todas as suas linhas de diálogo após receber o gesto para garantir o avanço de sua jornada.\n' +
      '* Após a derrota de Laxasia, a Completa, ele foge da abadia para a Rua Rosa Isabelle e passa a atuar formalmente como um comerciante pelo restante do jogo, vendendo saques valiosos que coletou pelo caminho.',
    trivia: [
      'Ele é um humano que sofreu experimentos crueis com Ergo conduzidos pelos Alquimistas da Ilha, sendo um de pelo menos 826 indivíduos na mesma condição.',
      'Sua função inicial nos experimentos era ler memórias contidas no Ergo, o que o deixou profundamente exausto e doente por absorver lembranças alheias sem poder vivenciá-las de verdade.',
      'Quando encontra P, ele inicialmente o confunde com um inspetor e discute, mas ao perceber que P é um forasteiro, fica extremamente alegre com a perspectiva de escapar.',
      'Ele possui uma grande admiração pelo passado da White Lady como atriz e cantora, cuja voz angelical ele descobriu através das memórias do Ergo. Ele comenta que, se não fosse pelo trágico envenenamento na juventude, ela seria chamada de "Deusa Branca" (White Goddess).',
      'Ele compartilha uma curiosidade sobre uma mensagem escrita nas costas de uma marionete de empregada no caminho. Esgotar seus diálogos faz com que, ao retornar ao corpo de Melody, a marionete esteja caída de lado, revelando uma mensagem anteriormente oculta que agora se torna visível e interativa.'
    ],
    description: 'Um sobrevivente dos terríveis experimentos com Ergo realizados pelos Alquimistas da Ilha. Mentalmente sobrecarregado pelas memórias alheias que foi forçado a consumir, o Cobaia 826 busca desesperadamente a liberdade. Uma vez resgatado dos confins da Abadia de Arche, ele se estabelece na ponte da Rua Rosa Isabelle para comercializar equipamentos defensivos de ponta, trajes marcantes e arremessáveis.',
    image: testSubject826Image,
    isDLC: false,
    isMerchant: true,
    shopInventory: [
      { itemName: 'Sawtoothed Wheel (x10)', itemType: 'Throwing Object', cost: 60, required: 'Disponível' },
      { itemName: 'Saw Blade (x5)', itemType: 'Throwing Object', cost: 330, required: 'Disponível' },
      { itemName: 'Sharp Pipe (x3)', itemType: 'Throwing Object', cost: 330, required: 'Disponível' },
      { itemName: 'Carcass Crystal Axe', itemType: 'Weapon', cost: 3700, required: 'Disponível' },
      { itemName: 'LADA Disruption Cartridge', itemType: 'Cartridge', cost: 2300, required: 'Disponível' },
      { itemName: 'LADA Disruption Cartridge +1', itemType: 'Cartridge', cost: 6900, required: 'New Game P+' },
      { itemName: "The White Lady's Hunting Apparel", itemType: 'Outfit', cost: 5000, required: 'Disponível' },
      { itemName: 'Fascination (Golden)', itemType: 'Record', cost: 9000, required: 'New Game P+' }
    ]
  }

];

// Função auxiliar apenas para representar os valores "?" contidos nos prints originais
function specialCost(): 'special' {
  return 'special';
}
