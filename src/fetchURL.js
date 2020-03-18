import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

export default class App extends Component{
  constructor(props) {
    super(props)
      this.state = {
       isLoading : false,
       posts: []
   };
 }
  
  componentDidMount() {
    /*const url = "https://jsonplaceholder.typicode.com/todos/1";
    const response =  await fetch(url); 
    const data =  await response.json(); 
    this.setState({ person: data, loading : false });*/
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
     .then(data =>  {
          this.setState( {
            isLoading : true,
            posts: data.posts
          },
          console.log(data)
          );
     });     
  }

  render() {
    const { isLoading, posts } = this.state; 
    if(!isLoading){
        return <div>Loading...</div>
    }
    else {
      return (
        <div>
          {posts.map(user => (
            <p>{user.title}</p>
          ))}            
        </div>
      )
    }
  }
}