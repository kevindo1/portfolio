import React from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PageOne() {
  return (
    <>
      <div>
        <div className="h-3/4 bg-banner w-screen bg-center bg-cover">
          <div className="inline-block align-middle">
            <Banner />
          </div>
        </div>
        <div>
          <Header />
        </div>
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </>
  );
}
