import { createContext } from "react"
import React from 'react'

const CartContext =createContext({
    items:[],
    totalAmount:0,
    // isOpen:false,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    // cardOpenHandle:()=>{}
});

export default CartContext
