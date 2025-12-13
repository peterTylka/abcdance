'use client';

import { Dance, DEFAULT_DANCES } from '@/lib/constants';
import { useState } from 'react';

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
      setTimeout(() => {
        index++;
        readNext();
      }, delay);
    };
    setCurrentFigure(texts[index]);
    speechSynthesis.speak(utterance);
  }

  readNext();
}

// TODO: nicer UI
// TODO: android higher volume on browser ?
// TODO: show current figure which is played aloud
// TODO: stop playing on list change
// deploy to Vercel - https://abcdance.vercel.app/
export default function Home() {
  const [dance, setDance] = useState(Dance.Bachata);
  // TODO: input + button to change delay
  const [delaySeconds, setDelaySeconds] = useState(6);
  // TODO: randomize figures with button
  // TODO: CRUD remove some figures
  // TODO: lists - Kizomba ALL, Kizomba Advanced etc.
  const figures = DEFAULT_DANCES[dance];
  const [currentFigure, setCurrentFigure] = useState('');

  console.log('%c dance', 'background-color: skyblue', { dance });

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-left py-3 px-3 bg-white dark:bg-black sm:items-start">
        <nav className="flex flex-col gap-3 mb-3">
          <div className="flex flex-wrap gap-3 mb-3">
            {Object.keys(Dance).map((danceItem) => (
              <button
                key={danceItem}
                disabled={dance === danceItem}
                className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${dance === danceItem ? 'bg-green-600' : 'bg-blue-600'}`}
                onClick={() => {
                  setDance(danceItem as Dance);
                }}
              >
                {danceItem}
              </button>
            ))}
          </div>

          <button
            className={`px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400`}
            onClick={() => {
              readAloud(figures, delaySeconds * 1000, setCurrentFigure);
            }}
          >
            READ FIGURES
          </button>
        </nav>
        <div className="font-bold">Figures:</div>
        <ul>
          {figures.map((figure) => (
            <li
              key={figure}
              className={`${currentFigure === figure ? 'font-bold text-4xl' : 'font-normal'}`}
            >
              {figure}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
