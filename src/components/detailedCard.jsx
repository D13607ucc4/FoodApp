import React from "react";
import "./detailedCard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DetailedCard({ product, params }) {
  const [cantidad, setCantidad] = useState(1);
  const navigate = useNavigate();

  const sumarCantidad = () => {
    const nuevaCantidad = cantidad + 1;
    setCantidad(nuevaCantidad);
  };
  const restarCantidad = () => {
    const nuevaCantidad = cantidad - 1;
    setCantidad(nuevaCantidad);
  };

  const agregarAJson = async () => {
    const nuevoStock = product.stock + cantidad;

    try {
      const response = await fetch(
        `http://localhost:3000/comidas/${product.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ stock: nuevoStock })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Error al actualizar el stock: ${response.status} ${
            response.statusText
          } - ${errorData.message || ""}`
        );
      }

      console.log("Stock actualizado exitosamente.");
      navigate("/home");
    } catch (error) {
      console.error("Hubo un problema con la operación fetch:", error);
      throw error;
    }
  };

  return (
    <>
      <div className="DetailCard">
        <h1>Detalles del producto</h1>
        <span style={{ fontSize: "3rem" }}>{product.img}</span>
        <span>${product.price}</span>
        <p>Product Stock: {product.stock}</p>
        <p>Product Code: {params.productId}</p>
      </div>
      <div className="DetailCardButtons">
        <button
          className="quantity-btn"
          onClick={restarCantidad}
          disabled={cantidad === 1}
        >
          ➖
        </button>
        <span className="display-cantidad">{cantidad}</span>
        <button className="quantity-btn" onClick={sumarCantidad}>
          ➕
        </button>
        <button className="add-to-cart-btn" onClick={agregarAJson}>
          Agregar
        </button>
      </div>
    </>
  );
}

export default DetailedCard;
