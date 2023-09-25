import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import Campgrounds from "./Pages/Campgrounds";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/campgrounds" component={Campgrounds} /> 
      </div>
    </BrowserRouter>

  );
}

export default App;
