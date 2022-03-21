import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';

export default function PageOne() {
  return (
    <div>
      <div className="h-2/3 bg-banner w-screen bg-center bg-cover ">
        <Banner />
      </div>
      <div>
        <Header />
      </div>
    </div>
  );
}
