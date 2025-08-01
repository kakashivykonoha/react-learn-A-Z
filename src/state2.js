import React from 'react';
//https://www.geeksforgeeks.org/reactjs/reactjs-state/
class MyComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    increment =() =>{this.setState((prevState)=>(({count:state.count+1})))}
    decrement =() =>{this.setState((prevState)=>(({count:state.count-1})))}
    }