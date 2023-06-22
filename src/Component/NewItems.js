import React, { useState } from 'react';
import "./FirstPage.css"
import { useDispatch } from 'react-redux';
import { addNewItems } from '../Context/CartReducer';

const NewItems = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const dispatch =useDispatch();

  const handleAddItem = () => {

    const itemId = new Date().getTime();


    const newItem = {
      id: itemId,
      name: name,
      price: price,
      description: description
    };

    dispatch(addNewItems([newItem]));
    const existingItems = JSON.parse(localStorage.getItem('items')) || [];


    existingItems.push(newItem);


    localStorage.setItem('items', JSON.stringify(existingItems));

    setName('');
    setPrice('');
    setDescription('');
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
