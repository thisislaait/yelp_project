import React from 'react';
import logo from '../Assets/logo.svg';
import herobg from '../Assets/Hero Image.jpg';
import Partners from '../Components/Partners';
import Features from '../Components/Features';

const Hero = () => {
  return (
    <section className="hero h-screen overflow-hidden hidden lg:block">
      <div className="hero-main">
        <div className="hero-container h-screen flex" style={{ backgroundColor: 'rgb(255, 254, 246)' }}>
          <div className="hero-details w-7/12 pt-5 ml-32 mr-24">
            <a href="/">
              <img src={logo} alt="logo" className="logo w-30 pt-3" />
            </a>
            <h1 className="text-5xl font-bold pt-14 pb-5">Explore the best <br /> camps on Earth.</h1>
            <p className="text-lg leading-7 pr-14 pb-2.5 text-gray-600">YelpCamp is a curated list of the best camping spots on Earth, Unfiltered and unbiased reviews.</p>
            <Features />
            <button className="my-5 p-2.5 bg-black text-base text-white rounded font-medium">
              <a href="campgrounds.html">View Campgrounds</a>
            </button>
            <Partners />
          </div>
          <div className="hero-bg w-9/12 bg-cover bg-center">
            <img src={herobg} alt="" className="bg-cover bg-center pl-4 py-0 my-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
