import { useState } from "react";
import { logoURL } from "../constant";
import { Link } from "react-router-dom";
import Logo from "../assets/swiggy.png"


export const Header = () =>{
    const[isLoggedIn,setIsLoggedIn] = useState(false)
    return (
        <div>
            <header className="container">
                <nav>
                    <ul>
                        <li><img src={Logo}/></li>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>about</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                        {isLoggedIn ? 
                        <button onClick={()=>{ setIsLoggedIn(false)}}>Logout</button> :
                        <button onClick={()=>{ setIsLoggedIn(true)}}>Login</button> }                     
                    </ul>
                    
                </nav>
            </header>
        </div>
    )
}