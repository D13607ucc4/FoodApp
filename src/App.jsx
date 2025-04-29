import React, { useState } from "react";
import "./App.css";
import Receipt from "./components/receipt";
import FoodContainer from "./components/foodContainer";
import Header from "./components/header";

const comidaArreglo = [
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

function App() {
  const [orders, setOrders] = useState([]); //Creo una variable de estado orders, que empieza como un array vacío.
  // const [stock, setStock] = useState([]);
  const [comidas, setComidas] = useState(comidaArreglo);
  // Orders contendrá los pedidos que se vayan haciendo. setOrders se usa para actualizar el estado de orders.

  //Función que añade un item al array de orders. Item es el objeto que contiene la información del pedido.
  const addOrder = (item) => {
    setOrders((prevOrders) => {
      const existingOrderIndex = prevOrders.findIndex(
        (order) => order.img === item.img
      ); //Busca si ya existe un pedido con el mismo img que el que quiero agregar.
      if (existingOrderIndex !== -1) {
        //Si ya existe actualiza la cantidad del pedido existente
        return prevOrders.map((order, index) => {
          if (index === existingOrderIndex) {
            return { ...order, quantity: order.quantity + 1 }; //Copio el objeto order y le sumo 1 a la cantidad. Esto no muta el estado porque crea un nuevo objeto.
          }
          return order; //El resto de los objetos los dejo igual.
        });
      } else {
        //Si no existe agrego como nuevo con quantity = 1
        return [...prevOrders, { ...item, quantity: 1 }];
      }
    });
    console.log(item.stock);
  };

  //MIERCOLES
  // const removeStock = (item) => {
  //   const newComidas = [...comidas];
  //   item.stock = item.stock - 1;
  //   setComidas(newComidas);
  // };

  // const addStock = (item) => {
  //   const newComidas = [...comidas];
  //   item.stock = item.stock + 1;
  //   setComidas(newComidas);
  // };

  const removeOrder = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1); //Elimina el item en la posición index del array de orders.
    setOrders(newOrders);
  };

  const removeOneOrder = (index) => {
    const newOrders = [...orders];
    const item = newOrders[index];

    if (item.quantity > 1) {
      newOrders[index] = {
        ...item,
        quantity: item.quantity - 1
      };
    } else {
      newOrders.splice(index, 1);
    }
    setOrders(newOrders);
  };

  const addOneOrder = (index) => {
    const newOrders = [...orders];
    const item = newOrders[index];
    item.quantity++;
    setOrders(newOrders);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="food-container">
          <FoodContainer
            addOrder={addOrder}
            comidas={comidas}
            //stock={stock}
            //removeStock={removeStock}
          />{" "}
          {/*Componente que contiene la lista de comidas. Se le pasa la función addOrder como prop para que pueda añadir pedidos.*/}
        </div>
        <div className="receipt-container">
          <Receipt
            orders={orders}
            removeOrder={removeOrder}
            removeOneOrder={removeOneOrder}
            addOneOrder={addOneOrder}
          />{" "}
          {/*Componente que contiene el ticket. Se le pasa la variable orders como prop para que pueda mostrar los pedidos y la función removeOrder para que pueda eliminar pedidos.*/}
        </div>
      </div>
    </>
  );
}

export default App;
