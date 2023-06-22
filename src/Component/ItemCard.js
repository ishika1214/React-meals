import React, { useEffect, useState } from 'react';
import './ItemList.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem ,addNewItems} from '../Context/CartReducer';
import {CartReducer} from '../Context/CartReducer'

const ItemCard = ({ item }) => {
  const [amount, setAmount] = useState('1');
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);



  const handleAddToCart = () => {
    const newItem = {
      ...item,
      price:parseInt(item.price),
      amount:parseInt(amount)
     
    };

    dispatch(addItem(newItem));
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
