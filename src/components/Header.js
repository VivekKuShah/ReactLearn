import { useState } from "react";
import { logoURL } from "../constant";
import { Link } from "react-router-dom";


export const Header = () =>{
    const[isLoggedIn,setIsLoggedIn] = useState(false)
    return (
        <div>
            <header className="container">
                <nav>
                    <ul>
                        <li><img src={logoURL}/></li>
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