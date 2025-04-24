import React from 'react'
import FoodItem from "./foodItem"

const comidas = [
  {
    img: '🍣', // sushi
    price: 150,
    stock: 5
  },
  {
    img: '🍕', // pizza
    price: 180,
    stock: 3
  },
  {
    img: '🍔', //burger
    price: 120,
    stock: 7
  }
];

function FoodContainer() {
  return (
    <>
      {comidas.map((comida) => 
         <FoodItem image={comida.img} price={comida.price} stock={comida.stock}/>
      )}
    </>
  )
}

export default FoodContainer