import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="z-[-1] fixed inset-0 overflow-hidden pointer-events-none">
      <div className="top-0 left-1/4 absolute bg-purple-500 opacity-20 blur-3xl rounded-full w-96 h-96 animate-blob mix-blend-multiply filter"></div>
      <div className="top-0 right-1/4 absolute bg-cyan-500 opacity-20 blur-3xl rounded-full w-96 h-96 animate-blob animation-delay-2000 mix-blend-multiply filter"></div>
      <div className="-bottom-32 left-1/3 absolute bg-pink-500 opacity-20 blur-3xl rounded-full w-96 h-96 animate-blob animation-delay-4000 mix-blend-multiply filter"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#0f172a] via-transparent to-transparent"></div>
    </div>
  );
};

export default Background;
