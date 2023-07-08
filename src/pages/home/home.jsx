
import { useContext, useEffect } from "react";
import "./home.css";
import { DataContext } from "../../context/cart-context";
import { cuisineData, restaurantsData } from "../../data";
export const Home = () => {
const {state, dispatch} = useContext(DataContext);
useEffect(() => {
dispatch({type : "FETCH_DATA", payload: {cuisines : cuisineData, restaurants: restaurantsData}})
},[]);

const cuisineHandler = (id) => {
   
    const filteredData = state.restaurantData.filter(item => item.cuisine_id === id);
  
    dispatch({type: "SHOW_DATA", payload: filteredData})
}
    
console.log(state)
    return(
        <div className="app-container">


            <div className="beginning">
            <h1>Food Ordering App</h1>
            <h2>Select your cuisine</h2>
            </div>

            <div className="cuisines">
                {state.cuisineData.map(item => (
                    <button key={item.id} className="cuisineButton" onClick={() => cuisineHandler(item.id)}>
                        {item.name}
                    </button>
                ))}
            </div>

            <div className="restaurantsList">
                {
                    state?.showData.map(item => (
                        <div key={item.id} className="each-restaurant">
                            <h1>{item.name}</h1>
                            {
                                item.menu.map(item => (
                                    <div key={item.name} className="each-menu">
                                        <p >{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                        
                    ))
                }
            </div>





           
          
           

            

        </div>
        
    )
}