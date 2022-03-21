import React from 'react';

export default function Banner() {
  return (
    <div className="px-40 py-40 z-10">
      <div className="text-6xl font-bold text-left text-white">
        <p>
          Hello, I am <span className="text-teal-400">Kevin</span>,
        </p>
        <p>a full-stack</p>
        <p>
          <span className="text-teal-400">software engineer</span>
        </p>
      </div>
      <div className="text-3xl font-bold my-4 text-white">
        <p>
          I love to
          <span className="text-teal-400"> create</span> elegant apps
        </p>
        <p>
          that put the <span className="text-teal-400">user</span> at the{' '}
          <span className="text-teal-400">forefront</span>
        </p>
      </div>
    </div>
  );
}
