/*
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
console.log(p.age)  */

/* function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
  }, 1000);
}

const p = new Person();

// In ra age liên tục mỗi giây
setInterval(() => {
  console.log( p.age);
}, 1000);
 */
//https://stackoverflow.com/questions/9454863/updating-javascript-object-property
/* 
let user = {
    name: {first: 'john',
        last: 'smith'},
    age: 18,
    city: 'new york'
}
const age = 20;
user = {...user, age}
//spread operator 
console.log(user.age)
 */
/* 
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName ={...person,...member};
console.log(fullName);
 */
// chỗ này đang luyện tập về blind function
/* 
const user = {
  name:"An",
  sayHi:function(){
    console.log("Hi"+" "+this.name)
  }
}
user.sayHi();
//output:Hi An
var a = user.sayHi();
//Output:Hi An
console.log(a);
 */
// new example:
/* 
const mode = {
  x: 42,
  getX() {
    return this.x;
  },
};
const unboundGetX = mode.getX;
console.log(mode.getX)
const boundGetX = unboundGetX.bind(mode.x=12);
console.log(boundGetX());
 */
/* const increaseNumber = number =>number+1

increaseNumber.name;

console.log(increaseNumber.name)
 */
import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Ford', // Example property in the state
        };
    }

    render() {
        return (
            <div>
                <h1>My Car</h1>
                {/* Other component content */}
            </div>
        );
    }
}

export default MyComponent;