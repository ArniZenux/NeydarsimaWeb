import React, { Component } from 'react';
//import url from './fetchURL';
import MyBody from './MyBody';
import './App.css';

class App extends Component{
  state = {
    visible : true
  };

  render(){
    return (
      <div className="App">
        <MyBody/>
      </div>
    )
  }
}

export default App;