import React from 'react';

export default function Projects() {
  return (
    <div className="snap-start bg-teal-700 h-screen w-screen flex flex-col">
      <div className="flex flex-col align-middle justify-center items-center">
        <div className="text-sky-300 text-5xl font-bold text-center w-full mt-8 text-shadow-xl">
          GoodJob.dev
        </div>
        <h1 className="text-white text-3xl text-center w-full my-4 text-shadow-lg">
          React | Tailwind | SupaBase | Netlify | PostgreSQL | Jest Testing
        </h1>
        <p className="text-white text-2xl text-center w-1/2 mt-4 mb-8 text-shadow-md align-middle justify-center">
          GoodJob.dev is an application with{' '}
          <span className="text-sky-300">user authentication</span> that allows
          the users to sign up, log in, and organize their job applications with
          a welcoming and user-friendly UI. It is meant to be a central location
          to help the user throughout the job application process by giving the
          user <span className="text-sky-300">CRUD functionality</span> by
          adding, viewing, editing, deleting their application tracking.
        </p>
        <p className="text-white text-2xl text-center w-1/2 mt-4 mb-8 text-shadow-md align-middle justify-center">
          To learn more about the technical details, please click{' '}
          <span className="text-sky-300">here</span> or on the{' '}
          <span className="text-sky-300">gif</span>
        </p>
      </div>
      <a
        className="bg-goodjob h-full w-full bg-no-repeat bg-center bg-contain mb-20"
        href="https://github.com/alchemy-job-app/job-app"
        target="_blank"
      ></a>
    </div>
  );
}
