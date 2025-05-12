import React from "react";
import "./foodItem.css";
import { Link } from 'react-router-dom'

function FoodItem({ comida, addOrder, orderCantidad }) {
  return (
    <button className="food-item" onClick={() => addOrder(comida)} disabled={orderCantidad === 0}>
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
        {orderCantidad === 0 ? (
          <span>No Stock</span>
        ) : (
          <span>{orderCantidad} left</span>
        )}
      </div>
     
      <Link to={`${comida.id}`}>
        detalles
      </Link>
    </button>
  );
}

export default FoodItem;
