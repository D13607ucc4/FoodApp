import React from 'react'
import Order from './order'

function Receipt({ orders, removeOrder }) {
  const total = orders.reduce((acc, item) => acc + item.price * item.quantity, 0); //Calcula el total de los pedidos sumando el precio de cada item en el array orders. acc es el acumulador que empieza en 0. item es cada objeto del array orders.
  return (
    <div>
      <h2>Receipt</h2>
      {orders.map((item, index) => (
        <Order key={index} item={item} index={index} removeOrder={removeOrder} />
      ))}
      <h3>Total: ${total}</h3>
    </div>
  )
}

export default Receipt