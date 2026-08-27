import { useEffect } from 'react';

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const TALLY_SRC = 'https://tally.so/widgets/embed.js';
let tallyPromise: Promise<void> | null = null;

function loadTallyScript(): Promise<void> {
  if (window.Tally) return Promise.resolve();
  if (tallyPromise) return tallyPromise;

  tallyPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${TALLY_SRC}"]`);
    const script = existing ?? document.createElement('script');

    script.addEventListener('load', () => resolve());
    script.addEventListener('error', () => {
      tallyPromise = null;
      reject(new Error('Tally embed script failed to load'));
    });

    if (!existing) {
      script.src = TALLY_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  });

  return tallyPromise;
}

export function useFeedbackForm() {
  useEffect(() => {
    let cancelled = false;

    loadTallyScript()
      .then(() => {
        if (!cancelled) window.Tally?.loadEmbeds();
      })
      .catch(() => {
        if (cancelled) return;
        document
          .querySelectorAll<HTMLIFrameElement>('iframe[data-tally-src]:not([src])')
          .forEach((el) => {
            el.src = el.dataset.tallySrc!;
          });
      });

    return () => {
      cancelled = true;
    };
  }, []);
}
