import React from 'react'

function FoodItem({comida, addOrder}) {
  return (
<div className='food-item'>
      <div><span>{comida.img}</span></div>
      <div><span>${comida.price}</span></div>
      <div>
        <button onClick={() => addOrder({...comida})}>Add to order</button> {/*Copio el objeto comida para que no me mande la referencia y haya pedo con los estados*/}
      </div>
</div>
  )
}

export default FoodItem