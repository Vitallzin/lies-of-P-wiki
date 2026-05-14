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
    id: '1',
    name: "Caminho do Grilo (Equilíbrio)",
    descriptionCard: "O caminho ideal para quem busca versatilidade. Permite adaptar-se a qualquer situação em Krat.",
    baseStats: { Vitalidade: 11, Vigor: 12, Capacidade: 11, Motricidade: 9, Técnica: 9, Avanço: 7 },
    baseAttributes: { Vitalidade: 11, Vigor: 12, Capacidade: 11, Motricidade: 9, Técnica: 9, Avanço: 7 },
    descriptionDetail: "O caminho ideal para quem busca versatilidade. Permite adaptar-se a qualquer situação em Krat.",
    startWeapon: "Puppet's Saber",
    image: balanceImage,
    video: balancevideo
  },
  {
    id: '2',
    name: "Caminho do Bastardo (Destreza)",
    descriptionCard: "Foco total em velocidade, estamina e ataques críticos rápidos.",
    baseStats: { Vitalidade: 8, Vigor: 15, Capacidade: 9, Motricidade: 5, Técnica: 11, Avanço: 6 },
    baseAttributes: { Vitalidade: 8, Vigor: 15, Capacidade: 9, Motricidade: 5, Técnica: 11, Avanço: 6 },
    descriptionDetail: "Foco total em velocidade, estamina e ataques críticos rápidos.",
    startWeapon: "Wintry Rapier",
    image: dexterityImage,
    video: dexterityvideo
  },
  {
    id: '3',
    name: "Caminho da Varredura (Força)",
    descriptionCard: "Esmague a resistência das marionetes com golpes pesados e alta defesa.",
    baseStats: { Vitalidade: 11, Vigor: 5, Capacidade: 11, Motricidade: 11, Técnica: 5, Avanço: 6 },
    baseAttributes: { HP: 323, Resistência: 96, Recuperação_de_Guarda: 65, Limite_de_Peso: 73.3, Ataque_Físico: 123, Defesa_Física: 80 },
    descriptionDetail: "O Caminho do Varredor: Força é uma Memória de Combate (Estilo de Combate) em Lies of P. O Caminho do Varredor privilegia a Força e a Defesa acima de tudo; esse arquétipo inicial oferece vantagem na derrota de inimigos ao explorar as primeiras seções do jogo. As Memórias de Combate são arquétipos ou classes pré-definidas para Pinóquio; cada memória de combate terá um conjunto pré-definido de armas, estatísticas básicas e atributos que se concentram em diferentes estilos de jogo. Elas só estão disponíveis para escolha no início do jogo, e os jogadores têm liberdade para criar uma configuração e desenvolver Pinóquio à medida que avançam.",
    startWeapon: "Greatsword of Fate",
    image: strengthImage,
    video: strengthvideo
  }
];