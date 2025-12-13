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
  // 'Protismerna Otocka - Panska',
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
  'Mirec Variacka 1',
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
  Salsa: ['basic dopredu', 'basic doboku'],
  Kizomba: ['1 krocka', '2 krocka', 'sajda dama', 'sajda panska'],
};

export type Dance = keyof typeof DEFAULT_DANCES;
export const Dance: Record<Dance, Dance> = Object.keys(DEFAULT_DANCES).reduce(
  (acc, key) => {
    acc[key as Dance] = key as Dance;
    return acc;
  },
  {} as Record<Dance, Dance>
);
