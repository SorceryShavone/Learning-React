import React from 'react';

class Car extends React.Component {
    constructor (props) {
        super (props);
        this.color = "";
        this.make = 
        this.state = {color: "red", name: "Bessy"};
        this.make ="Mazda";
    }
    
    render () {
        return (
         <h1>
          Hi, I'm a {this.state.color} {this.make} named {this.state.name};
          </h1>
    );
    }
}

let mazda = new Car ();
mazda.state.color = "yellow";
console.log("mazda.state.color", mazda.state.color);
/*
function Car() {
    return <h1> Hi, I'm a car from a function</h1>;
}
*/

/*
var Car = () => {
    return (
    <div>
        <p></p>
        <h1> Hi, I'm a Car from an arrow function</h1>
        </div>
    );
);
*/

let mazda a 

console.log("Car:, Car");


export default Car;