import React from "react";
import FoodItem from "./foodItem";

const comidas = [
  { img: "🍔", name: "Hamburguesa", price: 157, stock: 4 },
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

function FoodContainer() {
  return (
    <>
      {comidas.map((comida) => (
        <FoodItem
          image={comida.img}
          name={comida.name.toUpperCase()}
          price={comida.price}
          stock={comida.stock}
        />
      ))}
    </>
  );
}

export default FoodContainer;
