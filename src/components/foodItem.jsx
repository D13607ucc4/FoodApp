import React from "react";
import "./foodItem.css";

function FoodItem({ comida, addOrder }) {
  return (
    <div className="food-item">
      <div>
        <span className="food-icon">{comida.img}</span>
      </div>
      <div>
        <span>{comida.name}</span>
      </div>
      <div>
        <span>${comida.price}</span>
      </div>
      <div>
        <span>{comida.stock} left</span>
      </div>
      <div>
        <button onClick={() => addOrder({ ...comida })}>Add to order</button>{" "}
        {/*Copio el objeto comida para que no me mande la referencia y haya pedo con los estados*/}
      </div>
    </div>
  );
}

export default FoodItem;
