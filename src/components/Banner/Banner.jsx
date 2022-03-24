import React from 'react';

export default function Banner() {
  return (
    <div className="mt-20 ml-20 flex flex-col">
      <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-left text-white text-shadow-lg">
        <p>
          Hello, I am{' '}
          <span className="text-teal-400 animate-pulse2">Kevin</span>,
        </p>
        <p>a full-stack</p>
        <p>
          <span className="text-teal-400 animate-pulse2">
            software engineer
          </span>
        </p>
      </div>
    </div>
  );
}
