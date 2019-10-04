import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Contact from "./Contact";
function App() {
  console.log(process.env);
  return (
    <div className="App">
      <h2>
        This is my React-App
      </h2>
      <h3>Testing routers in github</h3>
     
      
      <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/React-host/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    
     <Route exact path="/" component={Home} />
      <Route path= "https://piyu0423.github.io/React-host/users" component={Users} />
      <Route path="/contact" component={Contact} />
    </div>
      </Router>
    </div>
  );
}

export default App;
