var CarForGarage = (props) => {
    return (
      <h2>
        I am a {props.make.year} {props.make.model} {5 * 10 + 3}!
      </h2>
    );
  };
  
  export { CarForGarage };