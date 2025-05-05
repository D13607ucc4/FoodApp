import React from "react";
import FoodItem from "./foodItem";
import "./foodContainer.css";

function FoodContainer({ addOrder, comidas, orders }) {

  return (
    <>
      {comidas.map((comida) => (
        <FoodItem
          key={comida.id}
          comida={comida}
          addOrder={addOrder}
          orderCantidad={
            comida.stock -
            (orders.find((element) => element.id === comida.id)?.quantity ?? 0)
          }
        />
      ))}
    </>
  );
}

export default FoodContainer;
