import React from 'react';
import logo from '../Assets/logo.svg';
import herobg from '../Assets/Hero Image (Tablet and Mobile).jpg';
import Partners from '../desktop/Partners';
import Features from '../desktop/Features';

const MobileHero = () => {
  return (
    <section className="hero h-screen lg:hidden" style={{ backgroundColor: 'rgb(255, 254, 246)' }}>
      <div className="hero-main">
            <div className="hero-container w-screen">
                <a href="/">
                <img src={logo} alt="logo" className="logo w-30 pt-5 pb-5 ml-16" />
                </a>
                <img src={herobg} alt="hero-bg" className="w-full" />
            </div>
            <div className="hero-details pt-5 ml-16 mr-14 md:mr-56">
                <h1 className="text-3xl md:text-5xl font-bold pt-5 pb-5 mr-2 md:mr-16">Explore the best camps on Earth.</h1>
                <p className="text-base leading-5 pr-44 md:pr-80 pb-2.5 text-gray-600 w-screen">YelpCamp is a curated list of the best camping spots on Earth, Unfiltered and unbiased reviews.</p>
                <Features />
                <button className="my-5 p-2.5 bg-black text-base text-white rounded font-medium">
                <a href="campgrounds.html">View Campgrounds</a>
                </button>
                <Partners />
            </div>
        </div>
    </section>
  );
};

export default MobileHero;