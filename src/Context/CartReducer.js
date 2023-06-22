import { createSlice } from '@reduxjs/toolkit';

const CartReducer = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
    isOpen:false,
    newItems:[]
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
       
        existingItem.amount++;
        existingItem.totalPrice += newItem.price;
      } else {
       
        state.items.push({
          id: newItem.id,
          name:newItem.name,
          price: newItem.price,
          amount: newItem.amount,
          totalPrice: newItem.price
        });
        
      }

      state.totalAmount += newItem.price;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);

      if (existingItem) {
        if (existingItem.amount === 1) {
         
          state.items = state.items.filter(item => item.id !== itemId);
        } else {
      
          existingItem.amount--;
          existingItem.totalPrice -= existingItem.price;
        }

        state.totalAmount -= existingItem.price;
      }
    },

    addNewItems: (state, action) => {
      state.newItems = action.payload; 
    },
    showModal:(state)=>{
        state.isOpen=true;
    },
    closeModal:(state)=>{
        state.isOpen=false;
    }
  }
});

export const { addItem, removeItem ,showModal,closeModal,addNewItems} = CartReducer.actions;
export default CartReducer.reducer;
