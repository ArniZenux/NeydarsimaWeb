import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

export default class App extends Component{
  /*constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch('/list/1')
      .then(res => {
        console.log(res);
      });
    }

    render(){
      return (
        <div className="App">
          <h1>Users</h1>
          {this.state.users.map(user => 
          <div key = {user.id}> user: {user.name}</div> )}        
        </div>
      );
    }*/

  
  state = {
     loading : true
  };
  
  async componentDidMount() {
    const url = "http://apis.is/lottery/vikingalotto";
    const response =  await fetch(url); 
    const data =  await response.json(); 
    console.log(data); 
  }

  render() {
   return (
      <div>
        {this.state.loading ? <div>loading...</div> : <div> person..</div>}
      </div>
   );
  }
}