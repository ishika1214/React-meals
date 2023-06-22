import React from 'react'
import './FirstPage.css'
import YourCart from './YourCart'
import ItemList from './ItemList'
import NewItems  from "./NewItems"
// import imageFile '../image/meals-image.webp'


const FirstPage = ({itemData}) => {
    return (
        <div>
            <div className='NavBar'>
                <div className='header-class'>
                    <h1>ReactMeals</h1>
                    <YourCart itemData={itemData}/>
                </div>
            </div>

            <div className="header-image">

            </div>

            <div className='middle-card'>
                <h1>Delicious Food, Delivered To You</h1>
                <p>Choose your favorite meal from broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
                <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
             </div>

            <div className='middle-card2'>
                <NewItems/>
            </div>
            <div className="item-List">
                <ItemList itemData={itemData}/>
            </div>
        </div>
    )
}

export default FirstPage
