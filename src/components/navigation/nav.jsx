import { Link } from "react-router-dom";

export const NavBar = () =>{
    return(
        
        <header class="heading d-flex grow-shrink-basis align-center">
    <div class="heading-title-icon d-flex grow-shrink-basis align-center">
        
    <img class="icon mr-1" src={"https://png.pngtree.com/png-vector/20201224/ourlarge/pngtree-cartoon-hand-drawn-vector-ice-cream-png-image_2611781.jpg"}  alt="lightbul"/>
    
        
        <h1 class="heading-title">
            <a class="link" href="/">The Icecream shop</a>
        </h1>
    </div>
    <nav class="navigation">
        <ul class="list-non-bullet">
            <li class="list-item-inline">
                <Link to="/" class="link cursor">Home</Link>
            </li>
            <li class="list-item-inline">
                <Link to="/cart" class="link cursor">Cart</Link>
            </li>
            <li class="list-item-inline">
                <Link to="/login" class="link cursor">Signup</Link>
            </li>
            {/* <li class="list-item-inline">
                <Link to="#" class="link cursor">Contact</Link>
            </li> */}
        </ul>
    </nav>
</header>


    )
}