import React from 'react';
import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Contact from "./Contact";
function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <div className="App">
      <h2>
        This is my React-App
      </h2>
      <h3>Testing routers in github</h3>

      <HashRouter basename='React-host/'>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    
     <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
    </div>
      </HashRouter>
    </div>
  );
}

export default App;
// export default function Routes() {
//   const history = createHistory({
//     basename: process.env.PUBLIC_URL,
//   })}