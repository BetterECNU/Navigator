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
    <div className="relative w-full max-w-2xl mx-auto z-50 mb-12 group">
      {/* Glowing border effect */}
      <div className={`absolute -inset-0.5 rounded-2xl blur opacity-30 transition duration-1000 group-hover:opacity-60
         bg-gradient-to-r from-cyan-400 to-purple-600 ${isFocused ? 'opacity-80 duration-200' : ''}`}>
      </div>

      <div className="relative flex flex-col bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        
        {/* Input Area */}
        <div className="flex items-center px-6 py-5">
          <Search className={`w-6 h-6 transition-colors duration-300 ${isFocused ? 'text-cyan-400' : 'text-slate-500'}`} />
          
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search navigation..."
            className="flex-1 bg-transparent border-none outline-none text-xl text-white px-4 placeholder-slate-500 h-full"
          />

          {searchTerm && (
            <button onClick={handleClear} className="p-2 hover:bg-white/10 rounded-full transition">
               <X className="w-5 h-5 text-slate-400" />
            </button>
          )}
        </div>
      </div>
      
      {/* Shortcut Hint */}
      {searchTerm.length === 0 && (
        <div className="absolute top-full mt-3 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">Type to filter modules</span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;