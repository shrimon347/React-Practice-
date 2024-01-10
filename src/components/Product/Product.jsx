import React from 'react'
import './Product.css'
import { FaCartPlus } from "react-icons/fa6";

const Product = (props) => {

    const {name,img,seller,price,stock} = props.product
  return (
    <div className='product'>
        <div >
            <img src={img} alt="" />
        </div>
        <div>
            <h4 className='product-name'> {name}</h4>
            <br />
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <p><small>Only {stock} left in stock - oder soon</small></p>
            <button className='main-button' 
                onClick={() => props.handleAddProduct(props.product)}
            > <FaCartPlus /> to cart</button>
        </div>
    </div>
  )
}

export default Product