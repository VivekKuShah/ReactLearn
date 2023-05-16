import ReactDom from "react-dom/client";
import "../index.css"
import {Header} from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { About } from "./components/About";
import { Error } from "./components/Error";
import { Contact } from "./components/Contact";
import {Resmenu} from "./components/Resmenu"
import { Profile } from "./components/AboutProfile";


export const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"about",  //parent path/path ("/" means from the root)
        element:<About/>,
        errorElement:<Error/>,
        //Childrens are always rendered inside the outlet, Outlet always we create inside the parent
        children:[{
          path:"profile", //if we put / react router dom consdider to localhost:/profile, If we give it like this it will assume like this take the parent path and add profile to it http://localhost:1234/about/profile
          element:<Profile/> 
        }
        ]
      },
      {
        path:"contact",
        element:<Contact/>,
        errorElement:<Error/>
      },
      {
        path:"/",
        element:<Body/>,
        errorElement:<Error/>
      },
      {
        path:"resmenu/:restID",
        element:<Resmenu/>,
        errorElement:<Error/>
      }
    ]
  }  
])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);