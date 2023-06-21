import React, { useContext, useState } from 'react'
import "./ItemList.css"
import CartContext from '../Context/CartContext';

const ItemCard = ({ item }) => {
    const[amount,setAmount]=useState("1");
    
  const cont = useContext(CartContext);
   
  const addItemHandler=()=>{
    console.log(item);
    cont.addItem({
        id:item.id,
        name:item.name,
        price:item.price,
        amount:parseInt(amount)
    })

  }

    return (
        <>
            <div>
                <h3>{item.name}</h3>
                <div className='meal-discription'>{item.description}</div>
                <div className='meal-amount'>${item.price}</div>
            </div>

            <div className='item-amount-section'>
                <div className='Amount-add'>
                    <label>Amount</label>
                    <input id="amount-id" type="number" min={1} max={5} step={1} value={amount} onChange={(event) => setAmount(event.target.value)}/>
                </div>
                <button onClick={addItemHandler}>+add</button>
            </div>

        </>
    )
}

export default ItemCard
