import React from 'react'
import ItemCard from './ItemCard'
import "./ItemList.css"

const ItemList = ({itemData}) => {
   
  return (
    <div className='Item-list1'>
      <ul>
        {
            itemData.map((item,i)=>(
                <li className='list-style'><ItemCard item={item}/></li>
                
            ))
        }
        </ul>
        
    </div>
    
  )
}

export default ItemList
