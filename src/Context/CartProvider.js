import React, { useReducer } from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
    const defaultCart = {
        items: [],
        totalAmount: 0,
      
    };

  
    const cartReducer = (state, action) => {
        if (action.type === "Add") {
            let updatedTotalAmount;

            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.item.id
            );
         

            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItem;
            let updatedItems;

            if (existingCartItem) {
                updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + 1,
                };
                updatedTotalAmount = state.totalAmount + (+action.item.price);
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = [action.item, ...state.items];
              
                updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
            }


            return {
                items: updatedItems,
                totalAmount:updatedTotalAmount.toFixed(2),
            };

        }

        if (action.type === "remove") {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.id
               
            );
       
            const existingCartItem = state.items[existingCartItemIndex];
          
            const updatedTotalAmount = state.totalAmount - existingCartItem.price;
            let updatedItems;
            if (existingCartItem.amount === 1) {
                updatedItems = state.items.filter((item) => item.id !== action.id);
            } else {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount - 1,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount.toFixed(2),
            };
        }
        return defaultCart;
    };
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);
    const addItemHandler = (item) => {
        dispatchCart({ type: "Add", item: item, });
    };

    const removeItemHandler = (id) => {
        dispatchCart({ type: "remove", id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
       
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider