
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import User from './components/User';
import Home from './components/Home';
import HomeContainer from "./container/HomeContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
         <HomeContainer/>
        {/* <User data={{name:"shantosh", age:"28"}}/> */}
        {/* <News/> */}
      </div>
    )
  }
}

