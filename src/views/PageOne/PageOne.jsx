import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProfilePicture from '../../components/ProfilePicture';

export default function PageOne() {
  return (
    <>
      <div className="snap-start h-screen w-screen flex" id="home">
        <div>
          <div className="h-3/4 bg-banner w-screen bg-center bg-cover grid grid-cols-3">
            <Banner />
            <ProfilePicture />
          </div>
          <div className="bg-sky-900 h-1/4">
            <div className="">
              <Header />
            </div>
            <div className="mt-24">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
