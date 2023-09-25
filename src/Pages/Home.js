import React from 'react';
import Hero from "../Components/desktop/Hero";
import MobileHero from "../Components/mobileview/mHero";


const Home = () => {
    return (        
        <div className="App">
        <Hero />
        <MobileHero />
      </div>
    );
  };
  
  export default Home;