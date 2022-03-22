import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PageOne() {
  return (
    <>
      <div className="snap-start h-screen w-screen flex">
        <div>
          <div className="h-3/4 bg-banner w-screen bg-center bg-cover">
            <div className="">
              <div className="bg-profile w-96 h-96 flex flex-row bg-no-repeat bg-contain item-center float-right mt-40 mr-60"></div>
            </div>
            <div className="inline-block align-middle">
              <Banner />
            </div>
          </div>
          <div className="bg-blue-500 h-1/4">
            <div>
              <Header />
            </div>
            <div className="mt-16">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
