
import {Home} from "./pages/home/home";
import { Cart } from "./pages/cart/cart";
import {LoginApp} from "./pages/login/login";
import {Routes, Route} from "react-router-dom";
import './App.css';
import { RestaurantPage } from "./pages/restaurantPage/RestaurantPage";



function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home/>} />;
      <Route path="/:id" element = {<RestaurantPage/>} />;
      <Route path="/cart" element = {<Cart/>} />;
      <Route path="/login" element = {<LoginApp/>} />;
    </Routes>

    
  );
}

export default App;
