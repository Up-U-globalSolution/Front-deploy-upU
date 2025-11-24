import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    return saved || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-slate-900', 'text-slate-200');
      document.body.classList.add('bg-white', 'text-gray-900');
    } else {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-white', 'text-gray-900');
      document.body.classList.add('bg-slate-900', 'text-slate-200');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme };
}
