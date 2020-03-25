import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
//import { goldenrod } from 'color-name';

export default class App extends Component{
  state = {     
    persons: []
  }

  componentDidMount() {
     axios.get(`http://127.0.0.1:8080/list/1`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      .then(res => console.log(res))
  }

  render() {
      return (
        <div>
          
            <ul>
              { /*this.state.persons.map( person => <li>{person.name}</li>) */}
            </ul>
            </div>           
          )
      }
}
