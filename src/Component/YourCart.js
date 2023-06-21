import React, { useContext, useState } from 'react'
import './YourCart.css'
import Modal from './UI/Modal'

import classes from './Cart.module.css'
import CartContext from '../Context/CartContext'

const YourCart = () => {

    const [Visible, setVisible] = useState(false);
    // const totalAmount = `$${cxt.totalAmount.toFixed(2)}`;
    const{items,totalAmount}= useContext(CartContext)
   

    const cxt = useContext(CartContext);
    const noOfItems = cxt.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
      }, 0);
    

    const removeItemHandler = (id) => {
        cxt.removeItem(id);
      };
      const addItemHandler = (item) => {
        console.log(item);
        cxt.addItem(item)
      };
    


    return (

        <div>
            <div className="cart-button">
                <button onClick={() => { setVisible(true) }}>Your Cart <span style={{border:"1px solid white",padding:"2px", margin:"2px"}}>{noOfItems} </span> </button>
               
            </div>
            {Visible &&
                <Modal onClose={setVisible} >
                    <div>
                        <ul className={classes["cart-items"]}>
                            {
                                items.map((item, id) => (
                                    <li className={classes["cart-item"]}>
                                        <div>
                                            <h2>{item.name}</h2>
                                            <div className={classes.summary}>
                                                <span className={classes.price}>{item.price}</span>
                                                <span className={classes.amount}> <span className={classes.quantity} >{item.amount}</span> </span>
                                            </div>
                                        </div>
                                        <div className={classes.actions}>
                                           
                                            <button onClick={removeItemHandler.bind(null,item.id)}>−</button>
                                            <button onClick={addItemHandler.bind(null,item)} >+</button>
                                        </div>
                                    </li>
 
                                ))
                            }
                        </ul>
                            <div className='Total-amount'><span>TotalAmount</span><span>{totalAmount}</span></div>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={() => { setVisible(false) }} className={classes["button--alt"]} >close</button>
                    </div>

                </Modal>
            }

        </div>
    )
}

export default YourCart

