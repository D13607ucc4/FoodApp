import React from "react";
import Order from "./order";
import "./receipt.css";

function Receipt({ orders, removeOrder, removeOneOrder, addOneOrder }) {
  const total = orders.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ); //Calcula el total de los pedidos sumando el precio de cada item en el array orders. acc es el acumulador que empieza en 0. item es cada objeto del array orders.
  return (
    <div>
      <h2>Receipt</h2>
      <div className="order-container">
        {orders.map((item, index) => (
          <Order
            key={index}
            item={item}
            index={index}
            removeOrder={removeOrder}
            removeOneOrder={removeOneOrder}
            addOneOrder={addOneOrder}
          />
        ))}
      </div>
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Receipt;
