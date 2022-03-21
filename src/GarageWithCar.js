import { CarForGarage } from "./CarForGarage";

var GarageWithCar = (props) => {
  const carInfo = { name: "Ford", models: "Mustang", year: 2020 };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <CarForGarage make={carInfo} />
    </>
  );
};

export default GarageWithCar;