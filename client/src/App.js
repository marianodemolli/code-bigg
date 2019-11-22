import React from 'react';
import './App.css';
import citiesPageLogo from './circled-right-2.png';
import homeLogo from './homeIcon.png';
import Header from './components/header.js';
import CitiesPage from './components/citiesPage.js';
import LogIn from './components/logIn.js';
import CreateAccount from './components/createAccount.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Header /> 
      <Switch>
      <Route exact path='/' component={Home}/> 
      <Route path="/logIn" component={LogIn}/>  
      <Route path="/createAccount" component={CreateAccount}/> 
      <Route path="/citiesPage" component={CitiesPage}/>
      </Switch>
    </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
    <h1>Start browsing</h1>
    <Link to='/citiesPage'>
      <a href="#"><img src={citiesPageLogo}/></a>
    </Link>
    <p>Want to build your own MYtinerary?</p>
    <Link to='/createAccount'>
      <a href="#">Create Acount</a>
    </Link>
    <Link to='/logIn'>
      <a href="#">Log in</a>
    </Link>
    <footer>
      <Link to='/'>
      <a href="#"><img src={homeLogo} className="App-citiesPage"/></a>
      </Link>
    </footer>
  </div>
)

export default App;