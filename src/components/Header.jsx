import React from 'react';

export default function Header() {
  return (
    <div>
      <nav className="h-12 flex w-screen text-slate-300 justify-center items-center text-2xl mt-8">
        <div className="space-x-16">
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Photography</a>
          <a href="">Contact</a>
        </div>
      </nav>
    </div>
  );
}
