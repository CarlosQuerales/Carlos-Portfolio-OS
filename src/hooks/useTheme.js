'use client';

import { useCallback, useEffect } from 'react';

const STORAGE_KEY = 'theme';

/**
 * Reads/writes the `data-theme` attribute on <html>. The initial CSS follows
 * the system preference; this hook restores an explicit saved choice after
 * hydration without injecting an inline script into the document tree.
 * @returns {{ toggleTheme: () => void }}
 */
export function useTheme() {
  useEffect(() => {
    let stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // Storage can be unavailable in restricted browser contexts.
    }

    const initialTheme =
      stored === 'light' || stored === 'dark'
        ? stored
        : window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark';

    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const current = document.documentElement.getAttribute('data-theme');
    const resolvedCurrent =
      current === 'light' || current === 'dark'
        ? current
        : window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark';
    const next = resolvedCurrent === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The theme still applies for the current page when storage is unavailable.
    }
  }, []);

  return { toggleTheme };
}
