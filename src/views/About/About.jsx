import React from 'react';
import Footer from '../../components/Footer';

export default function PageTwo() {
  return (
    <div className="snap-start bg-blue-500 h-screen w-screen flex flex-col">
      <div className="text-white text-4xl mt-8 font-bold text-center w-full text-shadow-xl">
        ABOUT ME
      </div>
      <div className="mx-64">
        <div className="float-left h-56 w-56 mr-8 bg-sky bg-center bg-cover"></div>
        <p className="text-white text-3xl mt-12 text-shadow-md">
          I am a <span className="text-teal-200">life-long learner</span> and
          constantly <span className="text-teal-200">improve my skills</span>.
          In my free time, I can be found enjoying hobbies which include hiking,
          photography, and interior design. By utilizing my aesthetic based
          hobbies, I strive to <span className="text-teal-200">maximize</span>{' '}
          the <span className="text-teal-200">user experience</span>.
        </p>
      </div>
      <div className="mx-64 mb-8">
        <div className="float-right h-56 w-56 mt-6 bg-whitecoat bg-center bg-cover"></div>
        <p className="text-white text-3xl mt-12 text-shadow-md">
          I have a unique background in pharmacy and neurobiology which
          instilled in me a{' '}
          <span className="text-teal-200">patient first mentality.</span> This
          is translates in my projects as I keep in mind the user when
          developing products. A big reason I switched careers is because
          software engineering allows me to be a{' '}
          <span className="text-teal-200">creative problem solver</span> yet
          still able to{' '}
          <span className="text-teal-200">
            make a difference in people's lives.
          </span>{' '}
        </p>
      </div>
      <div className="bg-valley bg-stretch bg-center bg-no-repeat h-full mt-8">
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
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}
