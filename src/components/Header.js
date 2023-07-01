import { useState, useContext } from "react";
import { logoURL } from "../constant";
import { Link } from "react-router-dom";
// import Logo from "../assets/swiggy.png" - getting error during testing
import Usercontext from "../utils/Usercontext";
import { useSelector } from "react-redux";



export const Header = () =>{
    const[isLoggedIn,setIsLoggedIn] = useState(false)
    const user = useContext(Usercontext)
    console.log(user)

    const cartItems = useSelector( (store) =>store.cart.items);
    console.log(cartItems)
    return (
        <div>
            <header className="sticky">
                <nav>
                    <ul className="flex h-30 justify-around items-center bg-gray-100 shadow-sm ">
                    <Link to="/"><img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" className="h-20"/ ></Link>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>about</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                        <Link to="/instamart"><li>Instamart(CodeSpliting)</li></Link>
                        <Link to="/cart"><li>Cart-{cartItems.length}</li></Link>
                        {
                        isLoggedIn ? 
                        <button onClick={()=>{ setIsLoggedIn(false)}}>Logout</button> :
                        <button onClick={()=>{ setIsLoggedIn(true)}}>Login</button>
                        }   
                        <p>{user.user.name}</p>   
                        <p>{user.user.email}</p>                
                    </ul>
                    
                </nav>
            </header>
        </div>
    )
}