import React, { Component } from 'react';
import './App.css';

export default class Mybody extends Component{
    constructor(){
        super();
        this.state = {
                name : "Arni Ingi Johannesson",
                post : [
                    {
                        title: "1984",
                        year: "Georg Well"
                    },
                    {
                        title: "Verndarenglar",
                        year : "2015"
                    }   
            ]
        };
    }

    render(){
        const {post} = this.state; 
        return ( 
            <div>
                <ul> 
                    {post.map(item => <li key={item.title}>
                        {item.title} {item.year}
                    </li>)}
                </ul>
            </div>
        );   
    }
}

//export default Mybody; 