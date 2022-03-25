import React from 'react';
import PageOne from '../PageOne/PageOne';
import About from '../About/About';
import Projects from '../Projects/Projects';

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <PageOne />
      <About />
      <Projects />

      <div className="snap-start bg-green-300 h-screen w-screen flex justify-center items-center ">
        Page 4
      </div>
      <div className="snap-start bg-yellow-300 h-screen w-screen flex justify-center items-center ">
        Page 5
      </div>
    </div>
  );
}
