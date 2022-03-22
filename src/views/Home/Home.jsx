import React from 'react';
import PageOne from '../PageOne/PageOne';
import About from '../About/About';

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <PageOne />
      <About />
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
