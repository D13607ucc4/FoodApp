import React from 'react'

function FoodItem({image, price, stock}) {
  console.log('FoodItem', image)
  return (
    <div>
      <div>
        <span>{image}</span>
      </div>
      <div>
        <span>{price}</span>
      </div>
      <div>
        {stock}
      </div>
      <div>
        <button>Add to order</button>
      </div>
    </div>
  )
}

export default FoodItem