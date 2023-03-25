import React, { useState } from 'react';
import './App.css';
import {ProductForm} from './components/ProductForm/ProductForm';
import {ProductListItem} from './ProuctListItem/ProductListItem';

function App() {
  const [products, setProducts] = useState([])
 

  const addProduct= product => {
    setProducts([...products,product]);
    alert(`${product.name} is added successfully !`)
  }

  const deleteProduct = product => {
    setProducts(products.filter(productItem => productItem.id !== product.id ));
    alert(`${product.name} is removed successfully !`)
  }


  return (
    <div className='App'>
      <ProductForm addProductProp={addProduct}/>
      {
        products.map(product => <ProductListItem key={product.id} item={product} deleteProductProp = {deleteProduct}/>)
      }
    </div>
  )
  };

export default App;
