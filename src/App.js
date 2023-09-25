import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./Components/Pages/Home";


function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
