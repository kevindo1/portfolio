import React from 'react';
import PageTwo from '../views/About/About';

export default function Footer() {
  return (
    <div>
      <a href={PageTwo}>
        <div className="bg-arrow h-20 w-full bg-no-repeat bg-center bg-contain animate-bounce"></div>
      </a>
    </div>
  );
}
