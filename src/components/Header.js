import { useState } from "react";
import { logoURL } from "../constant";

export const Header = () =>{
    const[isLoggedIn,setIsLoggedIn] = useState(false)
    return (
        <div>
            <header className="container">
                <nav>
                    <ul>
                        <li><img src={logoURL}/></li>
                        <li>Home</li>
                        <li>about</li>
                        <li>Contact</li>
                        {isLoggedIn ? 
                        <button onClick={()=>{ setIsLoggedIn(false)}}>Logout</button> :
                        <button onClick={()=>{ setIsLoggedIn(true)}}>Login</button> }                     
                    </ul>
                    
                </nav>
            </header>
        </div>
    )
}