import "./foodItem.css";

function FoodItem({ comida, addOrder, orderCantidad }) {
  return (
    <button
      className="food-item"
      onClick={() => addOrder(comida)}
      disabled={orderCantidad === 0}
    >
      <div>
        <span className="food-icon">{comida.img}</span>
      </div>
      <div>
        <span>{comida.name}</span>
      </div>
      <div>
        <span>${comida.price}</span>
      </div>
      <div>
        {orderCantidad === 0 ? (
          <span>No Stock</span>
        ) : (
          <span>{orderCantidad} left</span>
        )}
      </div>
      <div className="food-bottom">
        {/*Copio el objeto comida para que no me mande la referencia y haya pedo con los estados*/}
      </div>
    </button>
  );
}

export default FoodItem;
