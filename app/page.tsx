'use client';

import { Dance, Dances } from '@/lib/types';
import { DEFAULT_DANCES } from '@/lib/constants';
import { useState } from 'react';

export default function Home() {
  const [dance, setDance] = useState(Dance.Bachata);

  console.log('%c dance', 'background-color: skyblue', { dance });

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-left py-32 px-16 bg-white dark:bg-black sm:items-start">
        <nav className="flex gap-3 mb-3">
          {Dances.map((danceItem) => (
            <button
              key={danceItem}
              disabled={dance === danceItem}
              className={dance === danceItem ? 'font-bold' : 'font-normal'}
              onClick={() => {
                setDance(danceItem);
              }}
            >
              {danceItem}
            </button>
          ))}
        </nav>
        <div className="font-bold">Figures:</div>
        <ul>
          {DEFAULT_DANCES[dance].map((figure) => (
            <li key={figure}>{figure}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
