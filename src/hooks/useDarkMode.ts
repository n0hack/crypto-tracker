import { useState, useEffect } from 'react';
import { ThemeType } from './../Types';

export const useDarkMode = (): [ThemeType, () => void] => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as ThemeType;
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
};
