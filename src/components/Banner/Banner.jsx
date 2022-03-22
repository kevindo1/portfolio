import React from 'react';

export default function Banner() {
  return (
    <>
      <div>
        <div className="flex flex-col mt-40 ml-60">
          <div className="text-7xl font-bold text-left text-white text-shadow-xl">
            <p>
              Hello, I am <span className="text-teal-200">Kevin</span>,
            </p>
            <p>a full-stack</p>
            <p>
              <span className="text-teal-200">software engineer</span>
            </p>
          </div>
          <div className="text-4xl font-bold my-4 text-white">
            <p>
              I love to
              <span className="text-teal-200"> create</span>
            </p>
            <p>elegant apps</p>
            <p>
              that put the <span className="text-teal-200">users</span> at
            </p>
            <p>
              {' '}
              the <span className="text-teal-200">forefront</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
