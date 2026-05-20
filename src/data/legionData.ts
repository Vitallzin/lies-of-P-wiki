export interface equipmentsLegion {
    id: string;
    name: string;
    isDLC?: boolean; // Indica se é do DLC
    weight: string;
    modifications: {
        level0: string;
        level1: string;
        level2: string;
        level3: string;
        requiredMaterialsLv0: string;
        requiredMaterialsLv1: string;
        requiredMaterialsLv2: string;
        requiredMaterialsLv3: string;
        descriptionlevel0: string;
        descriptionlevel1: string;
        descriptionlevel2: string;
        descriptionlevel3: string;
    }
    typeAttack: 'Physical' | 'Fire' | 'Electric' | 'Acid';
    attack: string;
    Motivity: string;
    Technique: string;
    Advanced: string;
    description: string;
    infomationLegion: string;
    Location: string; 
    image: string;
}
export const legionData: equipmentsLegion[] = [
  {
    id: 'Puppet_String',
    name: 'Puppet String',
    isDLC: false,
    weight: '8.5',
    modifications: {
        level0: '-',
        level1: 'I',
        level2: 'II',
        level3: 'III',
        requiredMaterialsLv0: 'n/a',
        requiredMaterialsLv1: '1x Calibre da Legião',
        requiredMaterialsLv2: '2x Calibre da Legião',
        requiredMaterialsLv3: '3x Calibre da Legião',
        descriptionlevel0: 'Puppet String: Um Braço da Legião capaz de lançar um fio. Ele pode ser enrolado em torno de um inimigo para arrastá-lo em sua direção ou para levá-lo até você.',
        descriptionlevel1: 'Rastrear: mantenha pressionado o botão do Braço da Legião para rastrear um inimigo',
        descriptionlevel2: 'Esquiva: Permite esquivar-se após um golpe.',
        descriptionlevel3: 'Ataque em cadeia: Se você puxar ou rastrear um inimigo e pressionar e manter pressionado o botão do Braço da Legião, isso ativará um ataque em cadeia.'
    },
    typeAttack: 'Physical',
    attack: '69+50',
    Motivity: 'C',
    Technique: 'A',
    Advanced: 'D',
    description: 'O Puppet String é um Braço da Legião em Lies of P. O Puppet String é um Braço da Legião capaz de disparar um fio, sendo útil para puxar inimigos em sua direção e seguir com uma sequência de ataques. O Braço da Legião é uma prótese que proporciona a Pinóquio movimentos especiais que ele pode usar ao lutar contra personagens hostis. O Legion Arm consome um MP exclusivo destinado a ele e só pode ser reabastecido consumindo um determinado item consumível ou descansando em um Stargazer.',
    infomationLegion: "Um Braço da Legião capaz de lançar um fio. Ele pode ser enrolado em torno de um inimigo para arrastá-lo em sua direção ou para levá-lo até você. Os Stalkers criaram uma ferramenta que aumenta sua mobilidade durante o combate com marionetes. O fio reduz instantaneamente a distância entre você e seu inimigo, mas não garante sua segurança depois disso.",
    Location: 'Puppet String is obtained by talking to Eugenie in Hotel Krat, speak to her at her station when you first arrive at the hotel.',
    image: '/images/puppet_string.jpg'

  }
]