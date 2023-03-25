import React from 'react'

 export const ProductListItem = ({item, deleteProductProp}) => {

    const deleteProduct= _ =>  deleteProductProp(item)

    
  return (
    <div>
      <div>{item.name}</div>
      <div>{item.quantity}</div>
      <div>{item.price}</div>
      <div><input type="button" value="delete" onClick={deleteProduct} /></div>
    </div>
  )  
}

export default ProductListItem;
