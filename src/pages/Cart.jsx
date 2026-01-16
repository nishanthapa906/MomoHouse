import React, { useContext } from 'react'
import { CartContext, CartProvider } from '../context/CartProvider'
import Productdetail from './Productdetail'

function Cart() {
    const {state, dispatch} =useContext(CartContext);
    console.log(state);
    return (
        <div>
            
        </div>
    )
}

export default Cart
