// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import FirstPage from './Component/FirstPage';
import { Route, Routes } from 'react-router-dom';
import NewItems from './Component/NewItems';
import { addNewItems } from './Context/CartReducer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
// import CartProvider from './Context/CartProvider'

function App() {
  const [newItems, setNewItems] = useState([]);
  const itemData = [
    {
      name: "Sushi",
      description: "rice and veggies",
      price: 20.00,
      id: 1
    },
    {
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.50,
      id: 2
    }
    , {
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      id: 3
    },
    {
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      id: 4
    },
    {
      name: "Pizza",
      description: "lots of veggies toppings",
      price: 20.20,
      id: 5
    }

  ]
  
  const dispatch=useDispatch()
  useEffect(()=>{
    axios.get(`https://crudcrud.com/api/6232fea1d41b4be5a93186eeeca2a805/itemsData`)
    .then(response=>{
      dispatch(addNewItems(response.data));
    })
    .catch((error)=>{
      console.log(error)
    })

  },[dispatch]);
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setNewItems(storedItems);
  }, []);

  return (
    <div>
       
      <Routes>
        <Route path ="/" element= { <FirstPage itemData={itemData} />}/>
        <Route path='/add' element={<NewItems/>}/>
      </Routes>
       
    </div>
    
   
  );
}

export default App;
