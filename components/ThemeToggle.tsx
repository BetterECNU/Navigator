import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-slate-200 hover:bg-slate-300 dark:bg-white/5 dark:hover:bg-white/10 p-2 border border-slate-300 dark:border-white/10 rounded-full text-slate-700 dark:text-slate-200 transition-colors duration-200"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
