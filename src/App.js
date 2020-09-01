import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import {Route, Switch} from "react-router-dom";
import withAuth from './helpers/withAuth';
import Profil from "./components/profil";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component= {withAuth(Home)}/>
        <Route exact path="/login" component= {Login}/>
        <Route exact path="/register" component= {Register}/>
        <Route exact path="/profil" component= {Profil}/>
      </Switch>
    </div>
  );
}

export default App;