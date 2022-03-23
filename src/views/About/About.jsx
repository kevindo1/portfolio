import React from 'react';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="snap-start h-screen w-screen flex flex-col overflow-hidden">
      <div className="bg-blue-500 text-white text-4xl font-bold text-center w-full text-shadow-xl">
        <div className="pt-8">
          <p>ABOUT ME</p>
        </div>
        <div className="mx-64 mb-8">
          <div className="float-left h-56 w-56 mr-8 bg-sky bg-center bg-cover border-8 rounded-lg"></div>
          <p className="text-white text-3xl mt-12 text-shadow-md text-left">
            I am a <span className="text-teal-300">life-long learner</span> and
            I constantly{' '}
            <span className="text-teal-300">improve my skills</span>. In my free
            time, I can be found enjoying hobbies which include hiking,
            photography, and interior design. By utilizing my aesthetic based
            hobbies, I strive to <span className="text-teal-300">maximize</span>{' '}
            the <span className="text-teal-300">user experience</span>.
          </p>
        </div>
        <div className="mx-64 mb-12">
          <div className="float-right h-56 w-56 bg-whitecoat bg-center bg-cover border-8 rounded-lg ml-8"></div>
          <p className="text-white text-3xl text-shadow-md text-right">
            I have a unique background in pharmacy and neurobiology which
            instilled in me a{' '}
            <span className="text-teal-300">patient first mentality.</span> This
            translates in my projects as I keep in mind the user when developing
            products. A big reason I switched careers is because software
            engineering allows me to be a{' '}
            <span className="text-teal-300">creative problem solver</span> yet
            still able to{' '}
            <span className="text-teal-300">
              make a difference in people's lives.
            </span>{' '}
          </p>
        </div>
      </div>
      <div className="bg-valley bg-cover bg-center bg-no-repeat h-full z-10">
        <div className="text-white text-4xl font-bold text-center w-full my-8 text-shadow-xl">
          Tech Stack
        </div>
        <div className="grid grid-cols-3 mx-40 text-center text-2xl text-white text-shadow-xl">
          <div>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>SupaBase</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>SuperTest</li>
              <li>Jest Test</li>
            </ul>
          </div>
        </div>
        <div className="pt-24">
          <Footer />
        </div>
      </div>
    </div>
  );
}
