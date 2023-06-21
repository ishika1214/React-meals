// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import FirstPage from './Component/FirstPage';
import CartProvider from './Context/CartProvider'

function App() {
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



  return (
   <CartProvider>
      <FirstPage itemData={itemData} />
      </CartProvider>
  );
}

export default App;