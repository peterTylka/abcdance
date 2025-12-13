export const DEFAULT_DANCES = {
  Bachata: [
    'Basic',
    'Basic dopredu',
    'Stvorec',
    'Osmicka',
    'Diagonala',
    'Promenada',
    'Kosostvorec',
    'Otocka - Dama',
    'Otocka - Panska',
    'Zadna Otocka - Dama',
    'Zadna Otocka - Panska',
    'Protismerna Otocka - Dama',
    // 'Protismerna Otocka - Panska',
    'Otocka s pootocenim o 90 stupnov',
    'Madrid step',
    'Rumpo o 90 stupnov',
    'Rumpo o 180 stupnov',
    'U - dopredu dozadu s natacanim tela',
    'V - dozadu dopredu s natacanim tela',
  ],
  'Bachata Variacky': [
    'Milos Nizny stierac',
    'Milos Nizna tocka shadow',
    'Mirec Variacka 1',
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
