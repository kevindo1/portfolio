import React from 'react';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div
      className="snap-start h-screen w-screen flex flex-col overflow-hidden "
      id="about"
    >
      <div className="bg-sky-900 w-full h-3/5">
        <div className="float-right h-44 w-44 mr-8 bg-sky bg-center bg-cover border-8 rounded-lg mt-40 animate-pulse hover:animate-none"></div>
        <div className="float-right h-44 w-44 mr-8 bg-alaska bg-center bg-cover border-8 rounded-lg mt-24 animate-pulse hover:animate-none"></div>
        <div className="float-right h-44 w-44 mr-8 bg-whitecoat bg-center bg-cover border-8 rounded-lg animate-pulse hover:animate-none"></div>
        <div className="text-6xl font-bold mb-8 text-white ml-40 animate-fade-in-down">
          <p>I love to create</p>
          <p>
            <span className="text-teal-400">elegant</span> apps
          </p>
          <p>
            that put the <span className="text-teal-400">users</span> at
          </p>
          <p>
            {' '}
            the <span className="text-teal-400">forefront</span>
          </p>
        </div>

        {/* <div className="mx-32 mb-4">
          <p className="text-white text-xl mt-4 text-shadow-md text-left">
            I am a <span className="text-teal-300">life-long learner</span> and
            I constantly{' '}
            <span className="text-teal-300">growing my skills</span>. In my free
            time, I can be found enjoying hobbies which include hiking,
            photography, and interior design. By utilizing my aesthetic based
            hobbies, I strive to <span className="text-teal-300">maximize</span>{' '}
            the <span className="text-teal-300">user experience</span>.
          </p>
        </div>
        <div className="mx-32 mb-8">
          
          <p className="text-white text-xl text-shadow-md text-right pt-8">
            I have a unique background in pharmacy and neurobiology which
            instilled in me a{' '}
            <span className="text-teal-300">patient first mentality.</span> This
            translates in my projects as I keep in mind the user when developing
            products. A big reason I switched careers is because software
            engineering allows me to be a{' '}
            <span className="text-teal-300">creative problem solver</span> yet
            still able to{' '}
            <span className="text-teal-300">
              make a difference in people's lives
            </span>
            .{' '}
          </p>
        </div> */}
      </div>
      <div className="bg-valley bg-cover bg-center bg-no-repeat h-2/5">
        <div className="grid grid-cols-5 mx-40 text-center text-2xl text-white text-shadow-xl mt-8">
          <div>
            <ul>
              <li className="text-teal-300 font-bold">Languages</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-teal-300 font-bold">Frameworks</li>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
              <li>Node</li>
              <li>jQuery</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-teal-300 font-bold">Testing</li>
              <li>TDD</li>
              <li>SuperTest</li>
              <li>Jest</li>
              <li>QUnitt</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-teal-300 font-bold">Databases</li>
              <li>SupaBase</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-teal-300 font-bold">Learning</li>
              <li>TypeScript</li>
              <li>Storybook</li>
            </ul>
          </div>
        </div>
        {/* <div className="pt-24">
          <Footer />
        </div> */}
      </div>
    </div>
  );
}
