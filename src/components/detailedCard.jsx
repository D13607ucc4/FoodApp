import React from "react";

function DetailedCard({ product, params }) {
  return (
    <>
      <div className="DetailCard">
        <h1>Detalles del producto</h1>
        <span style={{ fontSize: "3rem" }}>{product.img}</span>
        <span>${product.price}</span>
        <p>Product Stock: {product.stock}</p>
        <p>Product Code: {params.productId}</p>
      </div>
    </>
  );
}

export default DetailedCard;
