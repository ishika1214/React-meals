import React, { useEffect, useState } from 'react';
import './YourCart.css';
import Modal from './UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem ,addNewItems} from '../Context/CartReducer';

import classes from './Cart.module.css';
import axios from 'axios';

const YourCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount =useSelector((state)=>state.cart.totalAmount)

  const [visible, setVisible] = useState(false);
console.log(cartItems)

  // const handleAddItem = (item) => {
    
  //   dispatch(addItem(item));
  // };

  // const handleRemoveItem = (itemId) => {
  //   dispatch(removeItem(itemId));
  // };


  useEffect(() => {
    axios
      .get(`https://crudcrud.com/api/614c7412b01a4bae998e947d332e7fd4/cartItems`)
      .then((response) => {
        const cartItemsFromAPI = response.data;
        cartItemsFromAPI.forEach((item) => dispatch(addItem(item))); // Dispatch addItem for each individual item
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

 const handleAddItem = async (item) => {
  try {
    await axios.post(
      'https://crudcrud.com/api/614c7412b01a4bae998e947d332e7fd4/cartItems',
      item
    );
    dispatch(addItem(item));
  } catch (error) {
    console.log(error);
  }
};
const handleRemoveItem = async (itemId) => {
  try {
    dispatch(removeItem(itemId));

    await axios.delete(
      `https://crudcrud.com/api/614c7412b01a4bae998e947d332e7fd4/cartItems/${itemId}`
    );
  } catch (error) {
    console.log(error);
  }
};
//sfdgdsfg
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
