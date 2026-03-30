import { useEffect } from 'react';
import { Scissors } from '../icons';

export const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-950">
      <div className="text-center">
        <div className="relative flex items-center justify-center w-28 h-28 mx-auto">
          <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-2xl animate-pulse" />
          <div className="absolute inset-0 border-2 border-amber-500/30 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-amber-500 border-r-amber-500 rounded-full animate-spin" />
          <Scissors className="w-9 h-9 text-amber-400 animate-[spin_2.5s_linear_infinite]" />
        </div>
        <p className="mt-6 text-zinc-400 text-sm tracking-wide animate-pulse">
          Carregando experiência premium...
        </p>
        <div className="mt-2 h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse" />
      </div>
    </div>
  );
};