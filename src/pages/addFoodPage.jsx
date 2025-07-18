import { Link } from "react-router-dom";
import React, { useRef } from "react";
import "./addFoodPage.css";

function AddFoodPage() {
  const imgInput = useRef(null);
  const nameInput = useRef(null);
  const priceInput = useRef(null);
  const stockInput = useRef(null);

  const agregarAJson = async () => {
    try {
      if (
        !(
          imgInput.current.value &&
          nameInput.current.value &&
          priceInput.current.value &&
          stockInput.current.value
        )
      ) {
        return;
      }
      const nuevoProducto = {
        img: imgInput.current.value,
        name: nameInput.current.value,
        price: parseInt(priceInput.current.value),
        stock: parseInt(stockInput.current.value)
      };

      const response = await fetch(`http://localhost:3000/comidas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoProducto)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Error al actualizar el stock: ${response.status} ${
            response.statusText
          } - ${errorData.message || ""}`
        );
      }

      imgInput.current.value = "";
      nameInput.current.value = "";
      priceInput.current.value = "";
      stockInput.current.value = "";
    } catch (error) {
      console.error("Hubo un problema con la operación fetch:", error);
      throw error;
    }
  };

  return (
    <>
      <div className="contenedor-inputs">
        <label htmlFor="imgInput">IMG:</label>
        <input className="input-ref" type="text" id="imgInput" ref={imgInput} />

        <label htmlFor="nameInput">NAME:</label>
        <input
          className="input-ref"
          type="text"
          id="nameInput"
          ref={nameInput}
        />

        <label htmlFor="priceInput">PRICE:</label>
        <input
          className="input-ref"
          type="text"
          inputmode="numeric"
          id="priceInput"
          ref={priceInput}
        />

        <label htmlFor="stockInput">STOCK:</label>
        <input
          className="input-ref"
          type="text"
          inputmode="numeric"
          id="stockInput"
          ref={stockInput}
        />

        <button className="add-button" onClick={agregarAJson}>
          Agreagar a json
        </button>
      </div>
    </>
  );
}

export default AddFoodPage;
