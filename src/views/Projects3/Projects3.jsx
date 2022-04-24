import React from 'react';

export default function Projects3() {
  return (
    <div className="bg-sky-800">
      <div className="snap-start bg-project3 bg-center bg-cover bg-opacity-20 h-screen w-screen flex flex-row overflow-hidden">
        <div className="flex flex-col align-middle justify-center items-center">
          <a
            className="text-teal-300 text-5xl font-bold text-center w-full text-shadow-xl"
            href="https://hopeful-curie-14d366.netlify.app/"
            target="_blank"
          >
            YahFood
          </a>
          <h1 className="text-white text-3xl text-center w-full my-4 text-shadow-lg">
            React | Tailwind | SupaBase | Netlify | Jest Testing
          </h1>
          <div className="flex flex-row">
            <a
              className="text-teal-300 text-3xl text-center w-full my-4 text-shadow-lg"
              href="https://github.com/Yah-food/Yahfood-final"
            >
              Github
            </a>
            <p className="text-white text-3xl text-center w-full my-4 mx-8">
              ||
            </p>
            <a
              className="text-teal-300 text-3xl w-full my-4 text-shadow-lg"
              href="https://hopeful-curie-14d366.netlify.app/"
            >
              Website
            </a>
          </div>
          <p className="text-white text-xl text-center w-1/2 mt-4 mb-8 text-shadow-md align-middle justify-center">
            Yahfood is a <span className="text-teal-300">mobile</span>{' '}
            application that{' '}
            <span className="text-teal-300">
              allows users to discover new foods to make based on their current
              ingredients
            </span>
            . The user will be able to see featured recipes from a{' '}
            <span className="text-teal-300">recipe API</span>. After logging in
            with <span className="text-teal-300">user authentication</span>, the
            user will be lead to their profile page. The user will then be able
            to create, edit, and delete recipes.
          </p>
        </div>
        <div className="flex bg-yahfood h-3/4 w-full bg-no-repeat bg-center bg-contain my-20 mr-40"></div>
      </div>
    </div>
  );
}
