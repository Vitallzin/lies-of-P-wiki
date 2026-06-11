import balanceImage from '../assets/img/classes/balance.webp';
import balancevideo from '../assets/video/video-balance.mp4';

import dexterityImage from '../assets/img/classes/dexterity.webp';
import dexterityvideo from '../assets/video//video-dexterity.mp4';

import strengthImage from '../assets/img/classes/strength.webp';
import strengthvideo from '../assets/video/video-strength.mp4';

export interface GameClass {
  id: string;
  name: string;
  descriptionCard: string;
  baseStats: { [key: string]: number };
  baseAttributes: { [key: string]: number };
  descriptionDetail: string;
  startWeapon: string;
  image: string;
  video: string;
}

export const classesData: GameClass[] = [
  {
    id: 'Caminho_do_Grilo',
    name: "Caminho do Grilo (Equilíbrio)",
    descriptionCard: "Um estilo de combate equilibrado que combina força e velocidade.",
    baseStats: { Vitalidade: 9, Vigor: 7, Capacidade: 8, Motricidade: 9, Técnica: 9, Avanço: 7 },
    baseAttributes: { HP: 283, Resistência: 109, Recuperação_de_Guarda: 55, Limite_de_Peso: 64.2, Ataque_Físico: 110, Defesa_Física: 78 },
    descriptionDetail: "O Sabre de Puppet é uma arma em Lies of P. O Sabre de Puppet é um conjunto de armas composto pelas seguintes peças: a Lâmina do Sabre de Puppet e o Cabo do Sabre de Puppet. Em Lies of P, as armas são encontradas como peças individuais, tais como sabres, espadas, facas e até mesmo armas pesadas e contundentes. Cada arma que você descobre é composta por uma lâmina e um cabo que podem ser desmontados e combinados com outras peças para forjar uma arma única de sua preferência.",
    startWeapon: "Puppet's Saber",
    image: balanceImage,
    video: balancevideo
  },
  {
    id: 'Caminho_do_Bastardo',
    name: "Caminho do Bastardo (Destreza)",
    descriptionCard: "Um estilo de combate rápido e ágil para atingir os pontos fracos do inimigo.",
    baseStats: { Vitalidade: 8, Vigor: 12, Capacidade: 7, Motricidade: 5, Técnica: 11, Avanço: 6 },
    baseAttributes: { HP: 262, Resistência: 134, Recuperação_de_Guarda: 50, Limite_de_Peso: 61.2, Ataque_Físico: 99, Defesa_Física: 74 },
    descriptionDetail: "A Rapier Invernal é uma arma em Lies of P. A Rapier Invernal é um conjunto de armas composto pelas seguintes peças: a Lâmina da Rapier Invernal e o Cabo da Rapier Invernal. Em Lies of P, as armas são encontradas como peças individuais, tais como sabres, espadas, facas e até mesmo armas pesadas e contundentes. Cada arma que você descobre é composta por uma lâmina e um cabo que podem ser desmontados e combinados com outras peças para forjar uma arma única de sua preferência.",
    startWeapon: "Wintry Rapier",
    image: dexterityImage,
    video: dexterityvideo
  },
  {
    id: 'Caminho_do_Varredor',
    name: "Caminho do Varredor (Força)",
    descriptionCard: "Um estilo de combate pesado que derrota os inimigos com grande força física.",
    baseStats: { Vitalidade: 11, Vigor: 5, Capacidade: 11, Motricidade: 11, Técnica: 5, Avanço: 6 },
    baseAttributes: { HP: 323, Resistência: 96, Recuperação_de_Guarda: 65, Limite_de_Peso: 73.3, Ataque_Físico: 123, Defesa_Física: 80 },
    descriptionDetail: "O Caminho do Varredor: Força é uma Memória de Combate (Estilo de Combate) em Lies of P. O Caminho do Varredor privilegia a Força e a Defesa acima de tudo; esse arquétipo inicial oferece vantagem na derrota de inimigos ao explorar as primeiras seções do jogo. As Memórias de Combate são arquétipos ou classes pré-definidas para Pinóquio; cada memória de combate terá um conjunto pré-definido de armas, estatísticas básicas e atributos que se concentram em diferentes estilos de jogo. Elas só estão disponíveis para escolha no início do jogo, e os jogadores têm liberdade para criar uma configuração e desenvolver Pinóquio à medida que avançam.",
    startWeapon: "Greatsword of Fate",
    image: strengthImage,
    video: strengthvideo
  }
];