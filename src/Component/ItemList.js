import React, { useEffect } from 'react'
import ItemCard from './ItemCard'
import "./ItemList.css"

import { useSelector } from 'react-redux';

const ItemList = ({itemData}) => {
  const useraddedItems =useSelector((state) => state.cart.newItems);


  const localData=JSON.parse(localStorage.getItem('items'))||[]

  return (
    <div className='Item-list1'>
      <ul>
        {
            [...itemData,...localData].map((item,i)=>(
                <li className='list-style'><ItemCard item={item}/></li>
                
            ))
        }
        </ul>
  
        
    </div>
    
  )
}

export default ItemList
