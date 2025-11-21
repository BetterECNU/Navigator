import React, { useState, useEffect, useCallback } from 'react';
import { Search, Command, Sparkles, Loader2, X } from 'lucide-react';
import { getQuickAnswer } from '../services/geminiService';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isAiMode: boolean;
  setIsAiMode: (mode: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, isAiMode, setIsAiMode }) => {
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedTerm(searchTerm), 600);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Effect to trigger AI search
  useEffect(() => {
    const fetchAi = async () => {
      if (debouncedTerm.length > 3 && isAiMode) {
        setLoading(true);
        setAiAnswer(null);
        const answer = await getQuickAnswer(debouncedTerm);
        setAiAnswer(answer);
        setLoading(false);
      } else if (debouncedTerm.length === 0) {
        setAiAnswer(null);
      }
    };
    fetchAi();
  }, [debouncedTerm, isAiMode]);

  const handleClear = () => {
    setSearchTerm('');
    setAiAnswer(null);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto z-50 mb-12 group">
      {/* Glowing border effect */}
      <div className={`absolute -inset-0.5 rounded-2xl blur opacity-30 transition duration-1000 group-hover:opacity-60
         ${isAiMode ? 'bg-gradient-to-r from-fuchsia-600 to-cyan-600' : 'bg-gradient-to-r from-slate-600 to-slate-400'}`}>
      </div>

      <div className="relative flex flex-col bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        
        {/* Input Area */}
        <div className="flex items-center px-4 py-4">
          {isAiMode ? (
            <Sparkles className="w-6 h-6 text-fuchsia-400 animate-pulse" />
          ) : (
            <Search className="w-6 h-6 text-slate-400" />
          )}
          
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={isAiMode ? "Ask Gemini anything..." : "Search apps, commands..."}
            className="flex-1 bg-transparent border-none outline-none text-lg text-white px-4 placeholder-slate-500 h-full"
          />

          {searchTerm && (
            <button onClick={handleClear} className="p-1 hover:bg-white/10 rounded-full transition mr-2">
               <X className="w-4 h-4 text-slate-400" />
            </button>
          )}

          <button
            onClick={() => setIsAiMode(!isAiMode)}
            className={`
              px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-all
              ${isAiMode 
                ? 'bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/50 hover:bg-fuchsia-500/30' 
                : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700'}
            `}
          >
            {isAiMode ? 'AI On' : 'AI Off'}
          </button>
        </div>

        {/* AI Result Area */}
        {isAiMode && (loading || aiAnswer) && (
          <div className="px-4 py-3 bg-black/20 border-t border-white/5">
            {loading ? (
              <div className="flex items-center space-x-3 text-slate-400 py-2">
                <Loader2 className="w-5 h-5 animate-spin text-cyan-400" />
                <span className="text-sm animate-pulse">Consulting Gemini...</span>
              </div>
            ) : (
              <div className="flex items-start space-x-3 py-1 animate-fade-in-up">
                <div className="mt-1 p-1.5 rounded bg-gradient-to-br from-fuchsia-600 to-purple-700 shadow-lg">
                   <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                   <p className="text-slate-200 text-sm leading-relaxed">{aiAnswer}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Shortcut Hint */}
      {!isAiMode && searchTerm.length === 0 && (
        <div className="absolute top-full mt-2 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-xs text-slate-500 font-mono">Type to filter • Click AI to ask</span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
