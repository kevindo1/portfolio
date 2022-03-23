import React from 'react';

export default function Banner() {
  return (
    <>
      <div>
        <div className="flex flex-col mt-12 ml-24">
          <div className="text-7xl font-bold text-left text-white text-shadow-lg">
            <p>
              Hello, I am <span className="text-teal-400">Kevin</span>,
            </p>
            <p>a full-stack</p>
            <p>
              <span className="text-teal-400">software engineer</span>
            </p>
          </div>
          <div className="text-4xl font-bold my-4 text-white">
            <p>
              I love to
              <span className="text-teal-400"> create</span>
            </p>
            <p>elegant apps</p>
            <p>
              that put the <span className="text-teal-400">users</span> at
            </p>
            <p>
              {' '}
              the <span className="text-teal-400">forefront</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
