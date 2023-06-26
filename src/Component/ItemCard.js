import React, { useEffect, useState } from 'react';
import './ItemList.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, addNewItems } from '../Context/CartReducer';
import { CartReducer } from '../Context/CartReducer'
import axios from 'axios';

const ItemCard = ({ item }) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);



  const handleAddToCart = async () => {
    try {
      const newItem = {
        id: item.id,              // Assign the correct id from the item
        name: item.name,          // Assign the correct name from the item
        price: parseInt(item.price),
        amount: parseInt(amount),
        totalPrice: parseInt(item.price) * parseInt(amount)  // Calculate the total price based on price and amount
      };
      // newItem.amount = parseInt(amount); 
      console.log(amount);
      await axios.post(
        'https://crudcrud.com/api/614c7412b01a4bae998e947d332e7fd4/cartItems',
        newItem
      );
  
      dispatch(addItem(newItem));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h3>{item.name}</h3>
        <div className="meal-discription">{item.description}</div>
        <div className="meal-amount">${item.price}</div>
      </div>

      <div className="item-amount-section">
        <div className="Amount-add">
          <label>Amount</label>
          <input
            id="amount-id"
            type="number"
            min={1}
            max={5}
            step={1}
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <button onClick={handleAddToCart}>+add</button>
      </div>
    </>
  );
};

export default ItemCard;
