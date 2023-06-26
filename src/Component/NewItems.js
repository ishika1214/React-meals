import React, { useState } from 'react';
import "./FirstPage.css"
import { useDispatch } from 'react-redux';
import { addNewItems } from '../Context/CartReducer';
import axios from 'axios';

const NewItems = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddItem = async () => {
    try {
      const itemId = new Date().getTime().toString();

      const newItem = {
        id: itemId,
        name: name,
        price: price,
        description: description
      };
      console.log(newItem);
      const response = await axios.post(`https://crudcrud.com/api/614c7412b01a4bae998e947d332e7fd4/itemsData`,newItem );
      console.log(response);

      dispatch(addNewItems([newItem]));

      // const existingItems = JSON.parse(localStorage.getItem('items')) || [];
      // existingItems.push(newItem);
      // localStorage.setItem('items', JSON.stringify(existingItems));

      setName('');
      setPrice('');
      setDescription('');
    }
    catch (error) {
      console.log(error);
    }

  };

  return (
    <div className='newItems-here'>
      <div className='new-items'>
        <label>Name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div className='new-items'>
        <label>Price</label>
        <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
      </div>

      <div className='new-items'>
        <label>Description</label>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default NewItems;
