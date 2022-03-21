import React from 'react';

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <div className="snap-start bg-slate-300 h-screen w-screen flex justify-center items-center ">
        Page 1
      </div>
      <div className="snap-start bg-red-300 h-screen w-screen flex justify-center items-center ">
        Page 2
      </div>
      <div className="snap-start bg-blue-300 h-screen w-screen flex justify-center items-center ">
        Page 3
      </div>
      <div className="snap-start bg-green-300 h-screen w-screen flex justify-center items-center ">
        Page 4
      </div>
      <div className="snap-start bg-yellow-300 h-screen w-screen flex justify-center items-center ">
        Page 4
      </div>
    </div>
  );
}
