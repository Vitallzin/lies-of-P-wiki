import xbox from '../assets/img/home/xbox.webp';
import ps from '../assets/img/home/playstation.webp';
import steam from '../assets/img/home/steam.webp';
import nuuvem from '../assets/img/home/nuuvem.webp';

import xboxDLC from '../assets/img/DLC/xboxDLC.jpg';
import psDLC from '../assets/img/DLC/playstationDLC.webp';
import steamDLC from '../assets/img/DLC/steamDLC.webp';
import nuuvemDLC from '../assets/img/DLC/nuvemDLC.webp';


// Classe de ícone ou URL
// Componente de Carrossel de Preços
export const priceData = [
    { id: 1, platform: 'Steam', price: 'R$ 249,90', link: `https://store.steampowered.com/app/1627720/Lies_of_P/`, icon: steam },
     { id: 2, platform: 'PlayStation', price: 'R$ 339,90', link: `https://www.playstation.com/pt-br/games/lies-of-p/`, icon: ps },
     { id: 3, platform: 'Xbox', price: 'R$ 249,90', link: `https://www.xbox.com/pt-br/games/lies-of-p`, icon: xbox },
    { id: 4, platform: 'Nuuvem', price: 'R$ 249,90', link: `https://www.nuuvem.com/br-pt/item/lies-of-p`, icon: nuuvem },
];

export const priceDataDLC = [
    { id: 1, platform: 'Steam', price: 'R$ 124,95', link: `https://store.steampowered.com/app/2848330/Lies_of_P_Overture/`,
      priceBundle: 'R$ 374,85', linkBundle: `https://store.steampowered.com/bundle/54629/Lies_of_P_Overture_Bundle/`, icon: steamDLC },
    
    { id: 2, platform: 'PlayStation', price: 'R$ 169,90', link: `https://store.playstation.com/pt-br/product/UP1685-PPSA10261_00-0000000000000DLC`,
      priceBundle: 'R$ 449,50', linkBundle: `https://store.playstation.com/pt-br/product/UP1685-PPSA10261_00-0042162288945083`, icon: psDLC },
    
    { id: 3, platform: 'Xbox', price: 'R$ 124,95', link: `https://www.xbox.com/pt-BR/games/store/lies-of-p-overture/9N0BVHB735PD`,
      priceBundle: 'R$ 374,85', linkBundle: `https://www.xbox.com/pt-BR/games/store/lies-of-p-overture-bundle/9MZSD5MN74M4/0010`, icon: xboxDLC },
    
    { id: 4, platform: 'Nuuvem', price: 'R$ 124,95', link: `https://www.nuuvem.com/br-en/item/lies-of-p-overture`,
      priceBundle: 'R$ 374,85', linkBundle: `https://www.nuuvem.com/br-pt/item/lies-of-p-overture-bundle`, icon: nuuvemDLC },
];


