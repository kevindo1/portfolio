import React from 'react';
import PageOne from './PageOne';

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <div className="snap-start bg-blue-500 h-screen w-screen flex">
        <PageOne />
      </div>
      <div className="snap-start bg-red-300 h-screen w-screen flex justify-center items-center ">
        Page 2
      </div>
      <div className="snap-start bg-blue-300 h-screen w-screen flex justify-center items-center ">
        Page 3
      </div>
      <div className="snap-start bg-green-300 h-screen w-screen flex justify-center items-center ">
        Page 4
      </div>
      <div className="snap-start bg-yellow-300 h-screen w-screen flex justify-center items-center ">
        Page 5
      </div>
    </div>
  );
}
