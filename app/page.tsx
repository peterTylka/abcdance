'use client';

import { BPM_DEFAULT } from '@/lib/bpm';
import { Dance, DanceFigure, DEFAULT_DANCES } from '@/lib/dance-figures';
import { useEffect, useRef, useState } from 'react';

let nextReadTimeoutId = 1;

/**
 * compute wait time for figure based on BPM + add time for basic steps
 */
function computeFigureDelayMs(bpm: number, figureBeats: number) {
  const beatToSeconds = 60 / bpm;
  return (figureBeats + 8) * beatToSeconds * 1000;
}

function readAloud(
  figures: DanceFigure[],
  bpm: number,
  setCurrentFigure: (text: string) => void
) {
  let index = 0;

  function readNext() {
    if (index >= figures.length) return;

    const computedDelay = computeFigureDelayMs(bpm, figures[index].beats);
    console.log('%c read next', 'background-color: skyblue', {
      figures,
      computedDelay,
      bpm,
      index,
      text: figures[index],
    });
    const utterance = new SpeechSynthesisUtterance(figures[index].name);
    utterance.onend = () => {
      //@ts-expect-error should be number
      nextReadTimeoutId = setTimeout(() => {
        index++;
        readNext();
      }, computedDelay);
    };
    setCurrentFigure(figures[index].name);
    speechSynthesis.speak(utterance);
  }

  readNext();
}

function shuffleCopy<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// TODO: beats per figure => compute how long it should stay
// TODO: number of repeats :)
// TODO: nicer UI
// TODO: android higher volume on browser ?
// deploy to Vercel - https://abcdance.vercel.app/
export default function Home() {
  const [dance, setDance] = useState(Dance['Bachata All']);
  const [bpm, setBpm] = useState(BPM_DEFAULT.BACHATA);
  // TODO: CRUD remove some figures
  // TODO: lists - Kizomba ALL, Kizomba Advanced etc.
  const [figures, setFigures] = useState(DEFAULT_DANCES[dance]);
  const [currentFigureName, setCurrentFigureName] = useState('');
  const figureElementsRefs = useRef({});
  const figuresTitleElRef = useRef(null);

  useEffect(() => {
    //@ts-expect-error improve types
    const el = figureElementsRefs.current[currentFigureName];
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentFigureName]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-left py-3 px-3 bg-white dark:bg-black sm:items-start">
        <nav className="flex flex-col gap-3 mb-3 sticky top-0 z-50">
          <div className="flex flex-wrap gap-3 mb-3">
            {Object.keys(Dance).map((danceItem) => (
              <button
                key={danceItem}
                disabled={dance === danceItem}
                className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${dance === danceItem ? 'bg-green-600' : 'bg-blue-600'}`}
                onClick={() => {
                  clearTimeout(nextReadTimeoutId);
                  setDance(danceItem as Dance);
                  setBpm(
                    danceItem.includes('Bachata')
                      ? BPM_DEFAULT.BACHATA
                      : danceItem.includes('Salsa')
                        ? BPM_DEFAULT.SALSA
                        : BPM_DEFAULT.KIZOMBA
                  );
                  //@ts-expect-error improve types
                  setFigures(DEFAULT_DANCES[danceItem]);
                  setCurrentFigureName('');
                  //@ts-expect-error improve types
                  figuresTitleElRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }}
              >
                {danceItem}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex gap-3">
              <div className="flex items-center font-semibold">BPM</div>
              <div className="flex items-center border rounded-md overflow-hidden w-fit"></div>
              <button
                className="px-3 py-1 font-bold text-3xl text-blue-500 bg-gray-100 hover:bg-gray-200"
                onClick={() => {
                  clearTimeout(nextReadTimeoutId);
                  setBpm(bpm - 1);
                }}
              >
                −
              </button>
              <input
                type="number"
                className="w-16 text-center outline-none"
                value={bpm}
                onChange={(e) => {
                  clearTimeout(nextReadTimeoutId);
                  setBpm(Number(e.target.value));
                }}
              />
              <button
                className="px-3 py-1 font-bold text-3xl text-blue-500 bg-gray-100 hover:bg-gray-200"
                onClick={() => {
                  clearTimeout(nextReadTimeoutId);
                  setBpm(bpm + 1);
                }}
              >
                +
              </button>
            </div>
            <div className="flex gap-3">
              <button
                className={`px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400`}
                onClick={() => {
                  clearTimeout(nextReadTimeoutId);
                  const finalFigures = DEFAULT_DANCES[dance];
                  setFigures(finalFigures);
                  readAloud(finalFigures, bpm, setCurrentFigureName);
                }}
              >
                READ
              </button>
              <button
                className={`px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400`}
                onClick={() => {
                  clearTimeout(nextReadTimeoutId);
                  const finalFigures = shuffleCopy(DEFAULT_DANCES[dance]);
                  setFigures(finalFigures);
                  readAloud(finalFigures, bpm, setCurrentFigureName);
                }}
              >
                SHUFFLE READ
              </button>
              <button
                className={`px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-orange-400`}
                onClick={() => {
                  clearTimeout(nextReadTimeoutId);
                }}
              >
                STOP
              </button>
            </div>
          </div>
        </nav>
        <div ref={figuresTitleElRef} className="font-bold">
          Figures:
        </div>
        <ul>
          {figures.map((figure) => (
            <li
              key={figure.name}
              // @ts-expect-error improve types
              ref={(el) => (figureElementsRefs.current[figure] = el)}
              className={`${currentFigureName === figure.name ? 'font-extrabold text-6xl' : 'font-normal'}`}
            >
              {figure.name}({figure.beats})
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
