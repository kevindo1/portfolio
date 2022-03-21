import React from 'react';

export default function Header() {
  return (
    <div>
      <nav className="h-12 flex w-screen text-white justify-center items-center text-2xl mt-8">
        <div className="space-x-16">
          <a href="" className="hover:text-teal-400 text-shadow-md">
            About
          </a>
          <a href="" className="hover:text-teal-400 text-shadow-md">
            Projects
          </a>
          <a href="" className="hover:text-teal-400 text-shadow-md">
            Photography
          </a>
          <a href="" className="hover:text-teal-400 text-shadow-md">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
