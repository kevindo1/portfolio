import React from 'react';

export default function Banner() {
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="mt-20 ml-20 col-span-2 flex flex-col">
          <div className="text-8xl font-bold text-left text-white text-shadow-lg">
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
        <div className="mt-12 mr-20">
          <div className="bg-profile w-96 h-96 bg-no-repeat bg-contain item-center mx-auto my-auto flex"></div>
        </div>
      </div>
    </>
  );
}
