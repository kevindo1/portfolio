import React from 'react';

export default function Projects1() {
  return (
    <div className="bg-sky-800" id="projects">
      <div className="snap-start bg-project1 bg-center bg-cover bg-opacity-20 h-screen w-screen flex flex-col">
        <div className="flex flex-col align-middle justify-center items-center">
          <a
            className="text-teal-300 text-5xl font-bold text-center w-full mt-8 text-shadow-xl"
            href="https://alchemyyearbook.netlify.app/"
            target="_blank"
          >
            Alchemy Yearbook
          </a>
          <h1 className="text-white text-3xl text-center w-full my-4 text-shadow-lg">
            React | Tailwind | Express | Node | PostgreSQL | Netlify | Heroku
          </h1>
          <div className="flex flex-row">
            <a
              className="text-teal-300 text-2xl text-center w-full my-4 text-shadow-lg"
              href="https://github.com/alchemy-yearbook-app"
            >
              Github
            </a>
            <p className="text-white text-2xl text-center w-full my-4 mx-8">
              ||
            </p>
            <a
              className="text-teal-300 text-2xl w-full my-4 text-shadow-lg"
              href="https://alchemyyearbook.netlify.app/"
            >
              Website
            </a>
          </div>
          <p className="text-white text-sm text-center w-1/2 mt-4 mb-8 text-shadow-md align-middle justify-center">
            Alchemy Yearbook is an original idea that I{' '}
            <span className="text-teal-300">innovated</span> and then{' '}
            <span className="text-teal-300"> delivered</span> during a two week
            agile sprint. It is a{' '}
            <span className="text-teal-300">full stack application</span> for
            current students to have a more{' '}
            <span className="text-teal-300">accessible alumni network</span>.
            Students can sign in using{' '}
            <span className="text-teal-300">GitHub OAuth</span> and create/edit
            their profile to display a picture, a senior quote, and the current
            company they are working at along with links to their GitHub and
            LinkedIn. They will also be able to access{' '}
            <span className="text-teal-300">private routes</span> such as alumni
            advice and a memorybook, which will be a collaborative sandbox to
            share memories with their own cohort.
          </p>
        </div>
        <div className="bg-yearbook h-full w-full bg-no-repeat bg-center bg-contain mb-20"></div>
      </div>
    </div>
  );
}
