import React from 'react'

function Order({item, index, removeOrder }) {
  return (
  <div key={index} className="order-item">
    <span>{item.img} x {item.quantity}</span>
    <span>${item.price * item.quantity}</span>
    <button onClick={() => removeOrder(index)}>❌</button>
</div>
  )
}

export default Order