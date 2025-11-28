import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="group z-50 relative mx-auto mb-12 w-full max-w-2xl">
      {/* Glowing border effect */}
      <div className={`absolute -inset-0.5 rounded-2xl blur opacity-30 transition duration-1000 group-hover:opacity-60
         bg-gradient-to-r from-cyan-400 to-purple-600 ${isFocused ? 'opacity-80 duration-200' : ''}`}>
      </div>

      <div className="relative flex flex-col bg-white/90 dark:bg-slate-900/90 shadow-2xl backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
        
        {/* Input Area */}
        <div className="flex items-center px-6 py-5">
          <Search className={`w-6 h-6 transition-colors duration-300 ${isFocused ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400 dark:text-slate-500'}`} />
          
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search navigation..."
            className="flex-1 bg-transparent px-4 border-none outline-none h-full text-slate-800 dark:text-white text-xl placeholder-slate-400 dark:placeholder-slate-500"
          />

          {searchTerm && (
            <button onClick={handleClear} className="hover:bg-slate-100 dark:hover:bg-white/10 p-2 rounded-full transition">
               <X className="w-5 h-5 text-slate-400" />
            </button>
          )}
        </div>
      </div>
      
      {/* Shortcut Hint */}
      {searchTerm.length === 0 && (
        <div className="top-full absolute opacity-0 group-hover:opacity-100 mt-3 w-full text-center transition-opacity duration-500">
          <span className="font-mono text-slate-500 text-xs uppercase tracking-widest">Type to filter modules</span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;