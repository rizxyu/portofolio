'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // State awal null agar tidak terjadi flicker/hydration mismatch
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let initialTheme = 'smartmist';
    if (storedTheme && (storedTheme === 'doublecrush' || storedTheme === 'smartmist')) {
      initialTheme = storedTheme;
    } else if (prefersDark) {
      initialTheme = 'doublecrush';
    }
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    document.body.setAttribute('data-theme', initialTheme);
    localStorage.setItem('theme', initialTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'doublecrush' ? 'smartmist' : 'doublecrush'));
  };

  // Jangan render children sebelum theme terinisialisasi (hindari flicker)
  if (!theme) return null;

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};