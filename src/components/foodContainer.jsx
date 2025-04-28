import React from 'react'
import FoodItem from "./foodItem"

const comidas = [
  {
    img: '🍣', // sushi
    price: 150,
    quantity: 0,
  },
  {
    img: '🍕', // pizza
    price: 180,
    quantity: 0,
  },
  {
    img: '🍔', //burger
    price: 120,
    quantity: 0,
  },
  {
    img: '🍨', //ice cream
    price: 30,
    quantity: 0,
  }
];

function FoodContainer({addOrder}) {
  return (
    <>
      {comidas.map((comida, index) => 
         <FoodItem 
         key={index}
         comida={comida}
         addOrder={addOrder}/> 
      )}
    </>
  )
}

export default FoodContainer