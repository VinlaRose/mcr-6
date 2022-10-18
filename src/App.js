
import {Home} from "./pages/home/home";
import { Cart } from "./pages/cart/cart";
import {Routes, Route} from "react-router-dom";
import './App.css';



function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home/>} />;
      <Route path="/cart" element = {<Cart/>} />;
    </Routes>

    
  );
}

export default App;
