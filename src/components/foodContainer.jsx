import React from "react";
import FoodItem from "./foodItem";
import "./foodContainer.css";
import { useState } from "react";

const comidas = [
  { img: "🍔", name: "Hamburguesa", price: 157, stock: 0 },
  { img: "🍕", name: "Pizza", price: 189, stock: 9 },
  { img: "🍣", name: "Sushi", price: 132, stock: 6 },
  { img: "🌮", name: "Taco", price: 175, stock: 2 },
  { img: "🥗", name: "Ensalada", price: 108, stock: 7 },
  { img: "🍜", name: "Ramen", price: 198, stock: 3 },
  { img: "🍩", name: "Dona", price: 123, stock: 5 },
  { img: "🥪", name: "Sándwich", price: 144, stock: 1 },
  { img: "🥞", name: "Panqueques", price: 160, stock: 8 },
  { img: "🍟", name: "Papas fritas", price: 116, stock: 6 }
];

function FoodContainer({ addOrder }) {
  const [stock, setStock] = useState([]);

  function handleStock({ comidas }) {
    if (comidas.stock) {
      addOrder({ ...comidas })
      setStock( comidas.stock -= 1 )
    }
  }

  return (
    <>
      {comidas.map((comida, index) => (
        <FoodItem key={index} comida={comida} addOrder={addOrder} stock={stock} removeStock={handleStock}/>
      ))}
    </>
  );
}

export default FoodContainer;
