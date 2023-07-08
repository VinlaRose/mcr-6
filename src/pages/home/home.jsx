
import { useContext, useEffect } from "react";
import "./home.css";
import { DataContext } from "../../context/cart-context";
import { cuisineData, restaurantsData } from "../../data";
import { useNavigate } from "react-router-dom";



export const Home = () => {
const {state, dispatch} = useContext(DataContext);
const navigate = useNavigate();
useEffect(() => {
dispatch({type : "FETCH_DATA", payload: {cuisines : cuisineData, restaurants: restaurantsData}})
},[]);

const cuisineHandler = (id) => {
   
    const filteredData = state.restaurantData.filter(item => item.cuisine_id === id);
  
    dispatch({type: "SHOW_DATA", payload: filteredData})
}

const goToPage = (id) => {
console.log(id);
navigate(`/${id}`)
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
                            <h1 onClick={() => goToPage(item.id)}>{item.name}</h1>
                            <div className="menu-items">
                            {
                                item.menu.map(item => (
                                    <div key={item.name} className="each-menu">
                                        
                                        <div className="food-item">
      <img src={item.imgSrc} alt="Food" className="food-image" />
      <div className="food-name">{item.name}</div>
      <div className="food-price">${item.price} for {item.qty}</div>
    </div>
                                        
                                    </div>
                                ))
                            }

                            </div>
                          
                        </div>
                        
                    ))
                }
            </div>





           
          
           

            

        </div>
        
    )
}