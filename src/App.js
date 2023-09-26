import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import Campgrounds from "./Pages/Campgrounds";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campgrounds" element={<Campgrounds />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
