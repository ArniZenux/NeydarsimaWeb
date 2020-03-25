import React, { Component } from 'react';
import FetchUrl from './FetchUrl';
import Header from './Pages/Core/Component/header';
//import Header from './Pages/Component/nav';
//import MyBody from './MyBody';
import './App.css';

class App extends Component{
  state = {
    visible : true
  };

  render(){
    return (
      <div className="App">
        <Header/>
        <FetchUrl/>
      </div>
    )
  }
}

export default App;