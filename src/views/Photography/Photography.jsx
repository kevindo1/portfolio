import React from 'react';
import Header from '../../components/Header';

export default function Photography() {
  return (
    <div className="bg-sky-900 h-screen w-screen">
      <nav className="h-12 w-screen text-white sm:text-2xl pt-2">
        <div className="sm:space-x-16 space-x-2 flex flex-row justify-center items-center font-bold">
          <a
            href="/"
            className="hover:text-teal-400 hover:-translate-1 hover:scale-110 transition delay-150 ease-in-out text-shadow-md"
          >
            Back to home
          </a>
        </div>
      </nav>
      <div className="h-5/6 w-screen items-center justify-center align-middle  grid grid-cols-7 opacity-90 group">
        <div className="h-full bg-ak bg-cover bg-no-repeat hover:h-screen hover:col-span-8 group amination">
          <h1 className="text-white font-bold align-middle justify-center text-8xl text-shadow-xl flex group-hover:hidden">
            AK
          </h1>
        </div>
        <div className="h-full bg-az bg-cover bg-no-repeat bg-left hover:h-screen hover:col-span-8 group">
          <h1 className="text-white font-bold flex align-middle justify-center text-8xl text-shadow-xl group-hover:hidden">
            AZ
          </h1>
        </div>
        <div className="h-full bg-co bg-cover bg-no-repeat bg-center hover:h-screen hover:col-span-8 group">
          <h1 className="text-white font-bold flex align-middle justify-center text-8xl text-shadow-xl group-hover:hidden">
            CO
          </h1>
        </div>
        <div className="h-full bg-hi bg-cover bg-no-repeat bg-center hover:h-screen hover:col-span-8 group">
          <h1 className="text-white font-bold flex align-middle justify-center text-8xl text-shadow-xl group-hover:hidden">
            HI
          </h1>
        </div>
        <div className="h-full bg-pr bg-cover bg-no-repeat bg-center hover:h-screen hover:col-span-8 group">
          <h1 className="text-white font-bold flex align-middle justify-center text-8xl text-shadow-xl group-hover:hidden">
            PR
          </h1>
        </div>
        <div className="h-full bg-ut bg-cover bg-no-repeat bg-right  hover:h-screen hover:col-span-8 group">
          <h1 className="text-white font-bold flex align-middle justify-center text-8xl text-shadow-xl group-hover:hidden">
            UT
          </h1>
        </div>
        <div className="h-full bg-wa bg-cover bg-no-repeat bg-right hover:h-screen hover:col-span-8 group">
          <h1 className="text-white font-bold flex align-middle justify-center text-8xl text-shadow-xl group-hover:hidden">
            WA
          </h1>
        </div>
      </div>
      <div className="h-1/6 bg-sky-900"></div>
    </div>
  );
}
