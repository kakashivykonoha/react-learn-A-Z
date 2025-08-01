import React from 'react';
import ReactDOM from 'react-dom/client';
/*
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
function Garage() {
  return (
    <div>
	    <h1>Who lives in my garage?</h1>
	    <Car brand="Ford" />
    </div>
  );
}  
  */
 /*  
var F1=(props)=><h2>He is {props.driver}</h2>;
function TeamRR(){
  return (
    <div>
      <h1>Who is first drive of Redbull racing</h1>
      <F1 driver="Max Verstappen"/>
      <h1>Who is second driver of Redbull racing</h1>
      <F1 driver="Yuki Tsunoda"/>
</div>)
}
export default TeamRR;
 */ 
/* 
var Winner =({year,driver})=><h2>in {year}, {driver} won the race!</h2>

function ListWinner(){
  return (
    <div>
      <h1>List of winners</h1>
      <Winner year="2021" driver="Max Verstappen"/>
      <Winner year="2022" driver="Charles Leclerc"/>
      <Winner year="2023" driver="Sergio Perez"/>
    </div>
  )
}
export default ListWinner;
  */
var Winner = (props) => <h2>In {props.year}, {props.driver} won the race!</h2>;

function ListWinner() {
  return (
    <div>
      <h1>List of winners</h1>
      <Winner year="2021" driver="Max Verstappen"/>
      <Winner year="2022" driver="Charles Leclerc"/>
      <Winner year="2023" driver="Sergio Perez"/>
    </div>
  );
}

export default ListWinner;
