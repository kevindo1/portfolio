import React from 'react';

export default function Projects() {
  return (
    <div className="bg-sky-800">
      <div className="snap-start bg-project1 bg-center bg-cover bg-opacity-20 h-screen w-screen flex flex-col">
        <div className="flex flex-col align-middle justify-center items-center">
          <a
            className="text-teal-300 text-5xl font-bold text-center w-full mt-8 text-shadow-xl"
            href="https://goodjob.dev"
            target="_blank"
          >
            GoodJob.dev
          </a>
          <h1 className="text-white text-3xl text-center w-full my-4 text-shadow-lg">
            React | Tailwind | SupaBase | Netlify | PostgreSQL | Jest Testing
          </h1>
          <div className="flex flex-row">
            <a
              className="text-teal-300 text-2xl text-center w-full my-4 text-shadow-lg"
              href="https://github.com/alchemy-job-app/job-app"
            >
              Github
            </a>
            <p className="text-white text-2xl text-center w-full my-4 mx-8">
              ||
            </p>
            <a
              className="text-teal-300 text-2xl w-full my-4 text-shadow-lg"
              href="https://goodjob.dev/"
            >
              Website
            </a>
          </div>
          <p className="text-white text-xl text-center w-1/2 mt-4 mb-8 text-shadow-md align-middle justify-center">
            GoodJob.dev is an application with{' '}
            <span className="text-teal-300">user authentication</span> that
            allows the users to sign up, log in,{' '}
            <span className="text-teal-300">
              organize and track their job applications
            </span>
            . It is meant to be a central location to help the user throughout
            the job application process by giving the user{' '}
            <span className="text-teal-300">CRUD functionality</span> by adding,
            viewing, editing, deleting their tracked applications.
          </p>
        </div>
        <a
          className="bg-goodjob h-full w-full bg-no-repeat bg-center bg-contain mb-20"
          href="https://goodjob.dev"
          target="_blank"
        ></a>
      </div>
    </div>
  );
}
