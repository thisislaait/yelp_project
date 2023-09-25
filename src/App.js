import React from 'react';
import './App.css';
import Hero from "./Components/desktop/Hero";
import MobileHero from "./Components/mobileview/mHero";


function App() {
  return (
    <div className="App">
      <Hero />
      <MobileHero />
    </div>
  );
}

export default App;
