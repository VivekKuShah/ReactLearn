import { Link, Outlet } from "react-router-dom";

export function About(){
    return (
        <>
        <h1>About us page</h1>
        <p>This is learning react and learning Routing Configure</p>
        <Link to="profile">to Profile</Link>
        <Outlet/>
        </>
    )
}