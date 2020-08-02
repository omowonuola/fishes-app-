import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import FishesInput from './components/fishesInput';
import FishesList from './components/fishesList';

function App() {
  return (
    <Fragment>
      <div className="App">
        <NavBar />
        <FishesInput />
        <FishesList />
      </div>
    </Fragment>
    
  );
}

export default App;
