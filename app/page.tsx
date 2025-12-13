'use client';

import { Dance, DEFAULT_DANCES } from '@/lib/constants';
import { useEffect, useRef, useState } from 'react';

let nextReadTimeoutId = 0;

function readAloud(
  texts: string[],
  delay: number,
  setCurrentFigure: (text: string) => void
) {
  let index = 0;

  function readNext() {
    if (index >= texts.length) return;

    console.log('%c read next', 'background-color: skyblue', {
      texts,
      delay,
      index,
      text: texts[index],
    });
    const utterance = new SpeechSynthesisUtterance(texts[index]);
    utterance.onend = () => {
      //@ts-expect-error should be number
      nextReadTimeoutId = setTimeout(() => {
        index++;
        readNext();
      }, delay);
    };
    setCurrentFigure(texts[index]);
    speechSynthesis.speak(utterance);
  }

  readNext();
}

function shuffleCopy(array: string[]) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// TODO: nicer UI
// TODO: android higher volume on browser ?
// deploy to Vercel - https://abcdance.vercel.app/
export default function Home() {
  const [dance, setDance] = useState(Dance['Bachata All']);
  const [delaySeconds, setDelaySeconds] = useState(6);
  // TODO: CRUD remove some figures
  // TODO: lists - Kizomba ALL, Kizomba Advanced etc.
  const [figures, setFigures] = useState(DEFAULT_DANCES[dance]);
  const [currentFigure, setCurrentFigure] = useState('');
  const figureElementsRefs = useRef({});
  const figuresTitleElRef = useRef(null);

  useEffect(() => {
    //@ts-expect-error improve types
    const el = figureElementsRefs.current[currentFigure];
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentFigure]);

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
                  //@ts-expect-error improve types
                  setFigures(DEFAULT_DANCES[danceItem]);
                  setCurrentFigure('');
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

          <div className="flex gap-3">
            <div className="flex items-center border rounded-md overflow-hidden w-fit">
              <button
                className="px-3 py-1 font-bold text-3xl text-blue-500 bg-gray-100 hover:bg-gray-200"
                onClick={() => {
                  clearTimeout(nextReadTimeoutId);
                  setDelaySeconds(delaySeconds - 1);
                }}
              >
                −
              </button>
              <input
                type="number"
                className="w-16 text-center outline-none"
                value={delaySeconds}
              />
              <button
                className="px-3 py-1 font-bold text-3xl text-blue-500 bg-gray-100 hover:bg-gray-200"
                onClick={() => {
                  clearTimeout(nextReadTimeoutId);
                  setDelaySeconds(delaySeconds + 1);
                }}
              >
                +
              </button>
            </div>
            <button
              className={`px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400`}
              onClick={() => {
                clearTimeout(nextReadTimeoutId);
                const finalFigures = DEFAULT_DANCES[dance];
                setFigures(finalFigures);
                readAloud(finalFigures, delaySeconds * 1000, setCurrentFigure);
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
                readAloud(finalFigures, delaySeconds * 1000, setCurrentFigure);
              }}
            >
              SHUFFLE READ
            </button>
          </div>
        </nav>
        <div ref={figuresTitleElRef} className="font-bold">
          Figures:
        </div>
        <ul>
          {figures.map((figure) => (
            <li
              key={figure}
              // @ts-expect-error improve types
              ref={(el) => (figureElementsRefs.current[figure] = el)}
              className={`${currentFigure === figure ? 'font-extrabold text-6xl' : 'font-normal'}`}
            >
              {figure}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
