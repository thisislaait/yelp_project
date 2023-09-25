import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import logo from '../Assets/logo.svg';
import mHero from '../Assets/Hero Image (Tablet and Mobile).jpg';
import herobg from '../Assets/Hero Image.jpg';
import Partners from '../Components/Partners';
import Features from '../Components/Features';

const Home = () => {
  return (
    <>
      {/* Mobile and Tablet View */}
      <section className="hero h-screen lg:hidden" style={{ backgroundColor: 'rgb(255, 254, 246)' }}>
        <div className="hero-main">
          <div className="hero-container w-screen">
            <a href="/">
              <img src={logo} alt="logo" className="logo w-30 pt-5 pb-5 ml-16" />
            </a>
            <img src={mHero} alt="hero-bg" className="w-full" />
          </div>
          <div className="hero-details pt-5 ml-16 mr-14 md:mr-56">
            <h1 className="text-3xl md:text-5xl font-bold pt-5 pb-5 mr-2 md:mr-16">Explore the best camps on Earth.</h1>
            <p className="text-base leading-5 pr-44 md:pr-80 pb-2.5 text-gray-600 w-screen">YelpCamp is a curated list of the best camping spots on Earth, Unfiltered and unbiased reviews.</p>
            <Features />
            <button className="my-5 p-2.5 bg-black text-base text-white rounded font-medium">
              <Link to="/campgrounds">View Campgrounds</Link>
            </button>
            <Partners />
          </div>
        </div>
      </section>

      {/* Desktop View */}
      <section className="hero h-screen overflow-hidden hidden lg:block">
        <div className="hero-main">
          <div className="hero-container h-screen flex" style={{ backgroundColor: 'rgb(255, 254, 246)' }}>
            <div className="hero-details w-7/12 pt-5 ml-32 mr-24">
              <Link to="/">
                <img src={logo} alt="logo" className="logo w-30 pt-3" />
              </Link>
              <h1 className="text-4xl font-bold pt-14 pb-5">Explore the best <br /> camps on Earth.</h1>
              <p className="text-lg leading-7 pr-14 pb-2.5 text-gray-600">YelpCamp is a curated list of the best camping spots on Earth, Unfiltered and unbiased reviews.</p>
              <Features />
              <button className="my-5 p-2.5 bg-black text-base text-white rounded font-medium">
                <Link to="/campgrounds">View Campgrounds</Link>
              </button>
              <Partners />
            </div>
            <div className="hero-bg w-9/12 bg-cover bg-center">
              <img src={herobg} alt="" className="bg-cover bg-center pl-4 py-0 my-0" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
