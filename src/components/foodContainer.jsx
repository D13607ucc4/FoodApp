import React from "react";
import FoodItem from "./foodItem";
import "./foodContainer.css";

function FoodContainer({ addOrder, comidas }) {
  // const [stock, setStock] = useState();

  // function handleStock({ comidas }) {
  //   if (comidas.stock) {
  //     addOrder({ ...comidas });
  //     setStock((comidas.stock -= 1));
  //   }
  // }

  return (
    <>
      {comidas.map((comida, index) => (
        <FoodItem key={index} comida={comida} addOrder={addOrder} />
      ))}
    </>
  );
}

export default FoodContainer;
