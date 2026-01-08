const Bachata_Basic = [
  'Basic',
  'Basic dopredu',
  'Stvorec',
  'Osmicka',
  'Diagonala',
  'Promenada',
  'Kosostvorec',
];

const Bachata_Otocky = [
  'Otocka - Dama',
  'Otocka - Panska',
  'Zadna Otocka - Dama',
  'Zadna Otocka - Panska',
  'Protismerna Otocka - Dama',
  'Protismerna Otocka - Panska',
];

const Bachata_Basic_2 = [
  'Otocka s pootocenim o 90 stupnov',
  'Madrid step',
  'Rumpo o 90 stupnov',
  'Rumpo o 180 stupnov',
  'U - dopredu dozadu s natacanim tela',
  'V - dozadu dopredu s natacanim tela',
];

const Bachata_Variacky = [
  'Milos Nizny stierac',
  'Milos Nizna tocka shadow',
  'Mirec Variacka 6 - pritahovacka odtahovacka i 90 odtlacenie',
  'Mirec Variacka 7 - obchadzka a chrbtovy titanik',
  'Mirec Variacka 8 - cardas a zaklanacka',
  'Mirec Variacka 9 - brusko a follower shadow',
];

const Salsa_Variacky = [
  'Milos Klacno 1',
  'Milos Klacno 2',
  'Iko la Nicolaus',
  'Iko plavanie',
  'Iko Zilinska vasilla',
  'Iko Zilinska setenta complicado',
  'Ikoa la Klacno',
];

const Kizomba_Variacky = [
  'Spomalenie',
  'Sajda + Chacha + L-ko',
  'Diamant',
  'Sajda otvorena a poslem okolo seba',
  'Sajda a tocka',
];
export const DEFAULT_DANCES = {
  'Bachata Basic': Bachata_Basic,
  'Bachata Otocky': Bachata_Otocky,
  'Bachata Basic 2': Bachata_Basic_2,
  'Bachata Variacky': Bachata_Variacky,
  'Bachata All': [
    ...Bachata_Basic,
    ...Bachata_Otocky,
    ...Bachata_Basic_2,
    ...Bachata_Variacky,
  ],
  Salsa: [
    'Basic dopredu',
    'Basic doboku',
    'Enchufla + Dilequeno',
    'Enchufla + Exibela',
    'Adois',
    'Adois Con la Hermala',
    'Prima la familia',
    'Uno',
    'El dos',
    'Kentucky',
    'Sombrero',
    'Sombrero Mambo',
    'Sombrero Mambo Vuelta',
    'Vasila',
    'Vasilala',
    'Paseala',
    'Paseala doble',
    'Montana',
    'El Dedo',
    'Siete',
    'Bankito',
    'Juana la Cubana',
    'Coca Cola',
    'Espressa',
    'Setenta',
    ...Salsa_Variacky,
  ],
  'Salsa Variacky': Salsa_Variacky,
  Kizomba: [
    '1 krocka',
    '2 krocka',
    '3 krocka',
    'Balanso',
    'L-ko',
    'L-ko s rotaciou',
    'Hodiny',
    'Virgula',
    'Kuragino 3 krocka',
    'Sajda dama',
    'Sajda panska',
    'Buracia sajda dama',
    'Chodenie spolocna noha',
    'Bankito',
    'Naklanacka',
    '1 krocka na mieste',
    'Predny pohup',
    ...Kizomba_Variacky,
  ],
  'Kizomba Variacky': Kizomba_Variacky,
};

export type Dance = keyof typeof DEFAULT_DANCES;
export const Dance: Record<Dance, Dance> = Object.keys(DEFAULT_DANCES).reduce(
  (acc, key) => {
    acc[key as Dance] = key as Dance;
    return acc;
  },
  {} as Record<Dance, Dance>
);
