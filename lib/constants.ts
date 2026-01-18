export interface DanceFigure {
  name: string;
  beats: number;
}

const Bachata_Basic: DanceFigure[] = [
  { name: 'Basic', beats: 8 },
  { name: 'Basic dopredu', beats: 8 },
  { name: 'Stvorec', beats: 8 },
  { name: 'Osmicka', beats: 16 },
  // longer so I can dance also basic or more diagonals
  { name: 'Diagonala', beats: 16 },
  // longer so I can dance also basic or more diagonals
  { name: 'Promenada', beats: 16 },
  // longer so I can dance also basic or more diagonals
  { name: 'Kosostvorec', beats: 16 },
];

const Bachata_Otocky: DanceFigure[] = [
  { name: 'Otocka - Dama', beats: 16 },
  { name: 'Otocka - Panska', beats: 16 },
  { name: 'Zadna Otocka - Dama', beats: 16 },
  { name: 'Zadna Otocka - Panska', beats: 16 },
  { name: 'Protismerna Otocka - Dama', beats: 16 },
  { name: 'Protismerna Otocka - Panska', beats: 16 },
];

const Bachata_Basic_2: DanceFigure[] = [
  { name: 'Otocka s pootocenim o 90 stupnov', beats: 8 },
  { name: 'Madrid step', beats: 8 },
  { name: 'Rumpo o 90 stupnov', beats: 8 },
  { name: 'Rumpo o 180 stupnov', beats: 8 },
  { name: 'U - dopredu dozadu s natacanim tela', beats: 8 },
  { name: 'V - dozadu dopredu s natacanim tela', beats: 8 },
];

const Bachata_Variacky: DanceFigure[] = [
  {
    name: 'Mirec Variacka 6 - pritahovacka odtahovacka i 90 odtlacenie',
    beats: 48,
  },
  { name: 'Mirec Variacka 7 - obchadzka a chrbtovy titanik', beats: 48 },
  { name: 'Mirec Variacka 8 - cardas a zaklanacka', beats: 56 },
  { name: 'Mirec Variacka 9 - brusko a follower shadow', beats: 56 },
  { name: 'Milos Nizny stierac', beats: 32 },
  { name: 'Milos Nizna tocka shadow', beats: 32 },
  { name: 'Milos Pred - Titanik', beats: 24 },
  { name: 'Milos Titanik', beats: 24 },
];

// TODO beats
const Salsa_Basic: DanceFigure[] = [
  { name: 'Basic dopredu', beats: 8 },
  { name: 'Basic doboku', beats: 8 },
  { name: 'Enchufla + Dilequeno', beats: 8 },
  { name: 'Enchufla + Exibela', beats: 8 },
  { name: 'Adois', beats: 8 },
  { name: 'Adois Con la Hermala', beats: 8 },
  { name: 'Prima la familia', beats: 8 },
  { name: 'Uno', beats: 8 },
  { name: 'El dos', beats: 8 },
  { name: 'Kentucky', beats: 8 },
  { name: 'Sombrero', beats: 8 },
  { name: 'Sombrero Mambo', beats: 8 },
  { name: 'Sombrero Mambo Vuelta', beats: 8 },
  { name: 'Vasila', beats: 8 },
  { name: 'Vasilala', beats: 8 },
  { name: 'Paseala', beats: 8 },
  { name: 'Paseala doble', beats: 8 },
  { name: 'Montana', beats: 8 },
  { name: 'El Dedo', beats: 8 },
  { name: 'Siete', beats: 8 },
  { name: 'Bankito', beats: 8 },
  { name: 'Juana la Cubana', beats: 8 },
  { name: 'Coca Cola', beats: 8 },
  { name: 'Espressa', beats: 8 },
  { name: 'Setenta', beats: 8 },
];

// TODO beats
const Salsa_Variacky: DanceFigure[] = [
  { name: 'Milos Klacno 1', beats: 8 },
  { name: 'Milos Klacno 2', beats: 8 },
  { name: 'Iko la Nicolaus', beats: 8 },
  { name: 'Iko plavanie', beats: 8 },
  { name: 'Iko Zilinska vasilla', beats: 8 },
  { name: 'Iko Zilinska setenta complicado', beats: 8 },
  { name: 'Ikoa la Klacno', beats: 8 },
];

// TODO beats
const Kizomba_Basic: DanceFigure[] = [
  { name: '1 krocka', beats: 8 },
  { name: '2 krocka', beats: 8 },
  { name: '3 krocka', beats: 8 },
  { name: 'Balanso', beats: 8 },
  { name: 'L-ko', beats: 8 },
  { name: 'L-ko s rotaciou', beats: 8 },
  { name: 'Hodiny', beats: 8 },
  { name: 'Virgula', beats: 8 },
  { name: 'Kuragino 3 krocka', beats: 8 },
  { name: 'Sajda dama', beats: 8 },
  { name: 'Sajda panska', beats: 8 },
  { name: 'Buracia sajda dama', beats: 8 },
  { name: 'Chodenie spolocna noha', beats: 8 },
  { name: 'Bankito', beats: 8 },
  { name: 'Naklanacka', beats: 8 },
  { name: '1 krocka na mieste', beats: 8 },
  { name: 'Predny pohup', beats: 8 },
];

// TODO beats
const Kizomba_Variacky: DanceFigure[] = [
  { name: 'Spomalenie', beats: 8 },
  { name: 'Sajda + Chacha + L-ko', beats: 8 },
  { name: 'Diamant', beats: 8 },
  { name: 'Sajda otvorena a poslem okolo seba', beats: 8 },
  { name: 'Sajda a tocka', beats: 8 },
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
  Salsa: [...Salsa_Basic, ...Salsa_Variacky],
  'Salsa Variacky': Salsa_Variacky,
  Kizomba: [...Kizomba_Basic, ...Kizomba_Variacky],
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
