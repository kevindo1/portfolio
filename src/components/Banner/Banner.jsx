import React from 'react';

export default function Banner() {
  return (
    <div className="flex justify-center items-center align-middle col-span-2 ml-20">
      <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-left text-white text-shadow-lg ">
        <p>
          Hello, I am <span className="text-teal-400">Kevin</span>,
        </p>
        <p>a full-stack</p>
        <p>
          <span className="text-teal-400">software engineer</span>
        </p>
      </div>
    </div>
  );
}
