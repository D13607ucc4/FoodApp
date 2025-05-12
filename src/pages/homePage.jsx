import { useState, useEffect } from "react";
import Receipt from "../components/receipt";
import FoodContainer from "../components/foodContainer";
import { useTheme } from "../context/ThemeContext";

function HomePage() {
  const [orders, setOrders] = useState([]); //Creo una variable de estado orders, que empieza como un array vacío.
  // const [stock, setStock] = useState([]);
  const [comidas, setComidas] = useState([]);

  const { darkMode, toggleHandle } = useTheme()

  const fetchComidas = () => {
    fetch("http://localhost:3000/comidas")
      .then(res => {
        if (!res.ok) throw new Error("Error al obtener comidas");
        return res.json();
      })
      .then(data => setComidas(data))
      .catch(err => console.error("Error al cargar comidas:", err));
  };

  useEffect(() => {
    fetchComidas();
  }, []);

  console.log("me renderizo..")

  // Orders contendrá los pedidos que se vayan haciendo. setOrders se usa para actualizar el estado de orders.

  //Función que añade un item al array de orders. Item es el objeto que contiene la información del pedido.
  const addOrder = (item) => {
    const orderQuantity =
      orders.find((elemento) => elemento.id === item.id)?.quantity ?? 0;
    console.log(orderQuantity);
    if (item.stock - orderQuantity > 0) {
      setOrders((prevOrders) => {
        const existingOrderIndex = prevOrders.findIndex(
          (order) => order.id === item.id
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
    }
  };

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

  const finalizarCompra = () => {
    const updates = orders.map(order => {
      const comida = comidas.find(c => c.id === order.id);
      const nuevoStock = comida.stock - order.quantity;
  
      return fetch(`http://localhost:3000/comidas/${order.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stock: nuevoStock }),
      });
    });
  
    Promise.all(updates)
    .then(() => {
      fetchComidas(); 
      setOrders([]);
    })
    .catch(err => {
      console.error("Error al finalizar compra:", err);
    });
  }

 
   
  return (
    <>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <button onClick={toggleHandle}>
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
        <div className="container">
          <div className="food-container">
            <FoodContainer
              addOrder={addOrder}
              comidas={comidas}
              orders={orders}
            />{" "}
            {/*Componente que contiene la lista de comidas. Se le pasa la función addOrder como prop para que pueda añadir pedidos.*/}
          </div>
          <div className="receipt-container">
            <Receipt
              comidas={comidas}
              orders={orders}
              removeOrder={removeOrder}
              removeOneOrder={removeOneOrder}
              addOrder={addOrder}
              finalizarCompra={finalizarCompra}
            />{" "}
            {/*Componente que contiene el ticket. Se le pasa la variable orders como prop para que pueda mostrar los pedidos y la función removeOrder para que pueda eliminar pedidos.*/}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage



