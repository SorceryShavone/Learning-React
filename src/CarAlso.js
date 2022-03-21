import React from "react";
var CarAlso = (props) => {
  return (
    <div>
      <p>Car Also:</p>
      <h1>
        Hi, I am a {props.color} {props.model} from an arrow function!
      </h1>
    </div>
  );
};

var Garage = (props) => {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <CarAlso model="Ford" />
    </>
  );
};

export { CarAlso, Garage };