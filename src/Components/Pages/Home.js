import React from 'react';
import Hero from "../desktop/Hero";
import MobileHero from "../mobileview/mHero";


const Home = () => {
    return (        
        <div className="App">
        <Hero />
        <MobileHero />
      </div>
    );
  };
  
  export default Home;