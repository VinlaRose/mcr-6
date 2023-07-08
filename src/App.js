
import {Home} from "./pages/home/home";
import {Routes, Route} from "react-router-dom";
import './App.css';
import { RestaurantPage } from "./pages/restaurantPage/RestaurantPage";



function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home/>} />;
      <Route path="/:id" element = {<RestaurantPage/>} />;
  
    </Routes>

    
  );
}

export default App;
