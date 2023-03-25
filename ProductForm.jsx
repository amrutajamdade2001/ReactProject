import React, { useState } from 'react'

 export const ProductForm = ({addProductProp}) => {
    const [name,setName]=useState("");
    const [quantity,setQuantity]=useState("");
    const [price,setPrice]=useState("");
    
    const addProduct= _ => {
        addProductProp({
        id:(new Date).getTime(),
        name,quantity,price
    })
    setName('');  //for resetting the values
    setPrice('');
    setQuantity('');

    };

  return (
    <div>
        <h1> Add Products</h1>
      <input type="text" placeholder='product name' value={name} onChange={
        event => {
            setName(event.target.value)
        }
    }/>
      <input type="text" placeholder='Quantity' value={quantity} onChange={
        event => {
            setQuantity(event.target.value)
        }
    }/>
      <input type="text" placeholder='Price' value={price} onChange={
        event => {
            setPrice(event.target.value)
        }
    }
    />
      <input type="text" placeholder='Add' onClick={addProduct}/>
    </div>
  )
}

export default ProductForm
