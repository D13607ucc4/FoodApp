import React from "react";
import "./order.css";

function Order({ item, index, removeOrder, removeOneOrder, addOneOrder }) {
  return (
    <div key={index} className="order-item">
      <span>
        {item.img} x {item.quantity}
      </span>
      <span>${item.price * item.quantity}</span>
      <button onClick={() => removeOneOrder(index)}>➖</button>
      <button onClick={() => addOneOrder(index)}>➕</button>
      <button onClick={() => removeOrder(index)}>❌</button>
    </div>
  );
}

export default Order;
