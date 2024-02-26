import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const CartProvider = props => {
    
    const state={
        name:'Hussain',
        class: '1year',
        age:'17'
    }

    return <CartContext.Provider value={state}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider