import React, { useEffect, useState } from 'react'

import ItemCard from './ItemCard'
import "./ItemList.css"

import { useDispatch, useSelector } from 'react-redux';
import { addNewItems } from '../Context/CartReducer';
import axios from 'axios';

const ItemList = ({itemData}) => {
  const dispatch = useDispatch()
  const useraddedItems =useSelector((state) => state.cart.newItems);


  useEffect(()=>{
    axios.get(`https://crudcrud.com/api/614c7412b01a4bae998e947d332e7fd4/itemsData`)
    .then(response=>{
      dispatch(addNewItems(response.data));
    })
    .catch((error)=>{
      console.log(error)
    })

  },[dispatch]);
 





  // const printData = axios.get(`https://crudcrud.com/api/7aff79ad06e1416db6a308f70dbe4707/itemsData`)||[]
  // console.log(printData,"printe data")
  // const localData=JSON.parse(localStorage.getItem('items'))||[]

  return (
    <div className='Item-list1'>
      <ul>
        {
            [...itemData,...useraddedItems].map((item,i)=>(
                <li className='list-style' key={i}><ItemCard item={item}/></li>
                
            ))
        }
        </ul>
  
    </div>
    
  )
}

export default ItemList
