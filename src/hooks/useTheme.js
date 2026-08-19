'use client';

import { useCallback, useState } from 'react';

const STORAGE_KEY = 'theme';

/**
 * Reads/writes the `data-theme` attribute on <html>. Paired with a small
 * blocking inline script in app/layout.js that sets the attribute before
 * first paint, so there's no flash-of-wrong-theme on load.
 *
 * Initial state is read via a lazy useState initializer (runs once, during
 * the client render) rather than an effect — by the time this component
 * mounts, the blocking script has already set the attribute, so there's no
 * need for an effect-driven sync that would trigger an extra render.
 * @returns {{ theme: 'light' | 'dark', toggleTheme: () => void }}
 */
export function useTheme() {
  const [theme, setTheme] = useState(
    /** @returns {'light' | 'dark'} */ () => {
      if (typeof document === 'undefined') return 'dark';
      const current = document.documentElement.getAttribute('data-theme');
      return current === 'light' ? 'light' : 'dark';
    }
  );

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
