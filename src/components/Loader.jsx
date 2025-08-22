import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      <span
        className="text-[5rem] sm:text-[8rem] font-extrabold italic tracking-tight animate-sdc-loader"
        style={{ color: 'var(--color-primary)', fontFamily: 'Inter, Segoe UI, Arial, sans-serif', letterSpacing: '-0.03em' }}
      >
        SDC
      </span>
      <div className="mt-2 flex gap-2 text-white text-xl sm:text-3xl font-semibold italic tracking-tight loader-words">
        <span className="opacity-0 animate-loader-word-1">Student</span>
        <span className="opacity-0 animate-loader-word-2">Developers</span>
        <span className="opacity-0 animate-loader-word-3">Community</span>
      </div>
    </div>
  );
};

export default Loader;
