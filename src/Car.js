import React from 'react';

class Car extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
          };
      }
      render() {
        return (
          <h1>
            Hi, I am a {this.props.color} {this.props.model} Car!
          </h1>
        );
      }
    }
    
    
/*
let mazda = new Car ();
mazda.state.color = "yellow";
console.log("mazda.state.color", mazda.state.color);

function Car() {
    return <h1> Hi, I'm a car from a function</h1>;
}



var Car = () => {
    return (
    <div>
        <p></p>
        <h1> Hi, I'm a Car from an arrow function</h1>
        </div>
    );
);




console.log("Car:, Car"); */


export default Car;