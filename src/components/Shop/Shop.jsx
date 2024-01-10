import React, { useState } from 'react'

import productdata from '../../fakeData/products.json'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import './Shop.css'


export const Shop = () => {
    
    const first10 = productdata.slice(0,10)
    
    const [products, setProducts] = useState(first10)

    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        console.log("Product add", product);
        const newCart = [...cart, product] 
        setCart(newCart)
    }

  return (
    <div className='shop-container'>
        <div className='product-container'>
            <ul>
                {
                    products.map((product) => <Product  key={product.key} handleAddProduct = {handleAddProduct} product={product} />)
                }
            </ul>
        </div>
        <div className='cart-container'>
            <Cart cart={cart} />
        </div>
        
    </div>
  )
}

