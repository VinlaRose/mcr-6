import { NavBar } from "../../components/navigation/nav";
import { HorizontalCard } from "../../components/horizontal card/horizontal";
import {Routes, Route} from "react-router-dom";
export const Cart = () => {
    return(
    <Routes>
        <Route path="/" element = {<NavBar/>} />;
        <Route path="/cart" element = {<HorizontalCard/>} />;
    </Routes>
    )
}