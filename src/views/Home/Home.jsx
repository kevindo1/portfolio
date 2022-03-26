import React from 'react';
import PageOne from '../PageOne/PageOne';
import About from '../About/About';
import Projects1 from '../Projects1/Projects1';
import Projects2 from '../Projects2/Projects2';
import Contact from '../Contact/Contact';

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <PageOne />
      <About />
      <Projects1 />
      <Projects2 />
      <Contact />
    </div>
  );
}
