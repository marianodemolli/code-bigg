import React from 'react';
import logo from './MYtineraryLogo.png';
import citiesPageLogo from './circled-right-2.png';
import homeLogo from './homeIcon.png';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Logo extends React.Component {
  render(){
  return <img src={logo} className="App-logo" alt="logo" />;
  }
}
class CitiesPage extends React.Component {
  render(){
  return <Link to="/citiesPage"><img src={citiesPageLogo} className="App-citiesPage" alt="citiesPageLogo" /></Link>;
  }
}
class Log extends React.Component {
  render(){
  return <div><p><Link to="/logIn">Log in</Link>/<Link to="/createAccount">Create Account</Link></p></div>;
  }
}
class Home extends React.Component {
  render(){
  return <Link to="/"><img src={homeLogo} className="App-home" alt="homeLogo" /></Link>;
  }
}

class App extends React.Component {
  render(){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      </header>
      <Logo/>
      <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
      <h2>Start browsing</h2>
      <CitiesPage/>
      <p>Want to buid your own MYtinerary? </p>
      <Log/>
      <Home/>

      <Switch>
      <Route path="/"></Route> 
      <Route path="/logIn"></Route>  
      <Route path="/createAccount"></Route> 
      <Route path="/citiesPage"></Route>
      </Switch>
    </div>
    </Router>
  );
  }
}
export default App;