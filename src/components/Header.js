import { logoURL } from "../constant";

export const Header = () =>{
    return (
        <div>
            <header className="container">
                <nav>
                    <ul>
                        <li><img src={logoURL}/></li>
                        <li>Home</li>
                        <li>about</li>
                        <li>Login</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}