//imports do blog da pagina amuletos
import aboutAmuletsImage from '../assets/img/amulets/aboutAmulets.webp';
import howToUnlockAmuletsImage from '../assets/img/amulets/howToUnlockAmulets.webp';
import arethereDifferentAmuletsImage from '../assets/img/amulets/arethereDifferentAmulets.webp';
import whereDoIFindAlidoroImage from '../assets/img/amulets/whereDoIFindAlidoro.webp';
import whereDoIFindAlidoroImage2 from '../assets/img/amulets/whereDoIFindAlidoro2.webp';


export const aboutAmulets = {
    title: 'Amuletos: Relíquias de Poder e Estratégia',
    description:"Os amuletos em Lies of P são acessórios que proporcionam vários bônus a Pinóquio. Esses bônus geralmente oferecem um aumento básico nas estatísticas de ataque geral, defesa e resistência elemental. Vale a pena notar que os amuletos também oferecem bônus ou habilidades adicionais, como aumento da recuperação de resistência, aumento do dano de ataque carregado ou aumento da capacidade de restauração das células de pulso. Embora os jogadores possam equipar dois amuletos ao iniciar o jogo, mais tarde terão a possibilidade de obter mais slots e equipar mais. Esta página abrange todos os amuletos possíveis no jogo, com seus efeitos gerais ou habilidades adicionais.",
    image: aboutAmuletsImage
}
export const howToUnlockAmulets = {
    title: 'Como Desbloquear Amuletos',
    description:"Agora que conhecemos os benefícios dos amuletos, ainda há uma maneira de tirar ainda mais proveito desses acessórios. É desbloqueando mais slots, equipando mais amuletos e acumulando suas estatísticas e habilidades adicionais. Como é possível adicionar mais slots de amuletos em Lies of P? Os jogadores podem adicionar mais slots ao avançar para o sistema P-Organ, uma árvore de habilidades que oferece ainda mais aprimoramentos para Pinóquio. Ao desbloquear nós nesse sistema, os jogadores acabarão desbloqueando mais slots.",
    description2:"Os amuletos desempenham um papel fundamental no aprimoramento das configurações de personagens em Lies of P. As estatísticas adicionais e as habilidades especiais dos amuletos não devem ser menosprezadas, pois acrescentam mais uma camada de complexidade às configurações do jogador, tornando o combate mais gratificante e envolvente. Com base na minha experiência pessoal, prestar atenção a esses acessórios, em geral, é quase uma necessidade nos jogos do estilo Soulslike. Nesses jogos, os acessórios proporcionam ainda mais clareza à configuração ou consolidam sua eficácia.",
    image: howToUnlockAmuletsImage
}
export const arethereDifferentAmulets = {
    title: 'Existem Diferentes Amuletos?',
    description:"Há uma quantidade considerável de amuletos que você pode encontrar em Lies of P, e eles podem ser obtidos de várias maneiras, como saques, itens deixados por chefes, recompensas de missões e através da compra junto a certos comerciantes. Existem também amuletos especiais no jogo, que só podem ser obtidos trocando Ergo especial do “tipo chefe” com Alidoro, o cão.",
    image: arethereDifferentAmuletsImage
}
export const whereDoIFindAlidoro = {
    title: 'Onde Encontrar o Alidoro?',
    description:"À medida que você avança, você chegará à Catedral de São Frangelico. A partir do observatório da biblioteca da Catedral de São Frangelico, você precisa pegar o elevador que o levará à varanda da catedral. É lá que você encontrará Alidoro, o cão, pela primeira vez; quando ele perguntar por um lugar onde possa se refugiar, responda: “Hotel Krat”.",
    description2:"Você deve encontrá-lo no hotel, na ala oeste, onde está a Antônia. Basta falar com ele e ele explicará como pode oferecer um “tesouro lendário” em troca dos poderosos Ergos que você conquistou ao derrotar os chefes poderosos do jogo.",
    image: whereDoIFindAlidoroImage,
    image2: whereDoIFindAlidoroImage2
}




//impots dos amulteos
import murdererPuppetsAmuletImage from '../assets/img/amuletsLits/murdererPuppetsAmulet.webp';
import namelessOnesAmuletImage from '../assets/img/amuletsLits/namelessOnesAmulet.webp';
import ironWallAmuletImage from '../assets/img/amuletsLits/ironWallAmulet.webp';


export interface Amulet {
    id: string;
    name: string;
    isDLC?: boolean;
    weight: string;
    effect: string;
    description: string;
    location: string;
    image: string;
}

export const amuletsData: Amulet[] = [
    {
        id: 'Murderer_Puppets_Amulet',
        name: "Murderer Puppet's Amulet",
        isDLC: false,
        weight: '2.0',
        effect: 'Aumenta o dano causado a inimigos humanos (10%)',
        description: 'Um amuleto que pode ser equipado em um fantoche. Informações e memórias úteis para movimentação podem ser gravadas no símbolo para extrair poderes especiais. \n\nA alegria de ter matado um humano jaz adormecida dentro do coração mecânico. Eu vou matar. Eu vou matar qualquer coisa que se pareça com um humano.',
        location: 'Plataforma da Estação Central de Krat: Pode ser obtido após derrotar um chefe de elite "Advanced Scorpion Carcass" na Estação Central de Krat. A partir do Stargazer na Plataforma da Estação Central de Krat, saia para a direita e siga em direção ao final desta seção, cruzando a estreita barra de ferro para chegar ao portão à sua direita. Vá até o final desta seção e desça a escada. Continue para a direita para encontrar o grande "Advanced Scorpion Carcass" na grande plataforma no meio da sala.',
        image: murdererPuppetsAmuletImage
    },
    {
        id: 'Nameless_Ones_Amulet',
        name: "Nameless One's Amulet",
        isDLC: false,
        weight: '8.4',
        effect: 'Chance de que nenhuma Célula de Pulso (Pulse Cell) seja consumida ao usar (15% de chance)',
        description: 'Um amuleto que pode ser equipado em um fantoche. Informações e memórias úteis para movimentação podem ser gravadas no símbolo para extrair poderes especiais. \n\nHouve um tempo em que até mesmo fantoches eram tratados como heróis em Krat. Este amuleto é o vestígio de um fantoche bombeiro que foi chamado de herói.',
        location: `O "Nameless One's Amulet" pode ser obtido trocando 1x Ergo da Anja Retorcida (Twisted Angel's Ergo) com o Alidoro.`,
        image: namelessOnesAmuletImage
    },
    {
        id: 'Iron_Wall_Amulet',
        name: 'Iron Wall Amulet',
        isDLC: false,
        weight: '3.4',
        effect: 'Aumenta a Taxa de Redução de Dano Físico em 8',
        description: 'Um amuleto que pode ser equipado em um fantoche. Informações e memórias úteis para movimentação podem ser gravadas no símbolo para extrair poderes especiais. \n\nÀs vezes, é preciso focar na defesa em vez do ataque. No entanto, é necessário pagar o preço para sustentar uma parede de ferro.',
        location: 'Relíquia de Trismegistus: Pode ser obtido após derrotar um chefe de elite "Centurion Puppet". Este inimigo pode ser encontrado logo após avançar um pouco a partir do Stargazer na Entrada da Relíquia de Trismegistus.',
        image: ironWallAmuletImage
    },
    {
        id: 'Iron_Wall_Amulet_Plus_One',
        name: 'Iron Wall Amulet +1',
        isDLC: true,
        weight: '3.4',
        effect: 'Aumenta a Taxa de Redução de Dano Físico em 10',
        description: 'Um amuleto que pode ser equipado em um fantoche. Informações e memórias úteis para movimentação podem ser gravadas no símbolo para extrair poderes especiais. \n\nÀs vezes, é preciso focar na defesa em vez do ataque. No entanto, é necessário pagar o preço para sustentar uma parede de ferro.',
        location: 'Instalação Subterrânea do Zelador (Exclusivo da DLC Overture): Versão +1 encontrada apenas no Novo Jogo+ (NG+). Depois de chegar à instalação usando o elevador, vire-se e entre na cela da prisão para encontrar um baú. Abra-o para obter o Iron Wall Amulet +1.',
        image: ironWallAmuletImage
    }
];