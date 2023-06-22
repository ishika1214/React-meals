import React, { useState } from 'react';
import './YourCart.css';
import Modal from './UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../Context/CartReducer';

import classes from './Cart.module.css';

const YourCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount =useSelector((state)=>state.cart.totalAmount)

  const [visible, setVisible] = useState(false);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };
  const totalItems = cartItems.reduce((total, item) => total + item.amount, 0);

  return (
    <div>
      <div className="cart-button">
        <button onClick={() => setVisible(true)}>
          <span>Your Cart</span>
          <span className='cart_count'>{totalItems}</span>
        
        </button>
      </div>
      {visible && (
        <Modal onClose={() => setVisible(false)}>
          <div>
            <ul className={classes['cart-items']}>
              {cartItems.map((item, id) => (
                <li className={classes['cart-item']} key={id}>
                  <div>
                    <h2>{item.name}</h2>
                    <div className={classes.summary}>
                      <span className={classes.price}>{item.price}</span>
                      <span className={classes.amount}>
                        <span className={classes.quantity}>{item.amount}</span>
                      </span>
                    </div>
                  </div>
                  <div className={classes.actions}>
                    <button onClick={() => handleRemoveItem(item.id)}>−</button>
                    <button onClick={() => handleAddItem(item)}>+</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="Total-amount">
              <span>TotalAmount</span>
              <span>${totalAmount}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button onClick={() => setVisible(false)} className={classes['button--alt']}>
              close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default YourCart;
