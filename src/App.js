import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./Components/Pages/Home";
import campgrounds from "./Components/Pages/Campgrounds";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/campgrounds" Component={campgrounds} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
