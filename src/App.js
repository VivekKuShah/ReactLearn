import { lazy, Suspense, useState } from "react";
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
import { useOnline } from "./utils/useOnline";

import Usercontext from "./utils/Usercontext";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Cart } from "./components/Cart";

// Lazy Loading
const Instamart = lazy(()=>import("./components/Instamart"))


const App = () => {
  const [newData,setNewData]=useState({name:"Dynamic Data",email:"vivekkushah@gmail.com"}
)
   
  let isOnline = useOnline();
   if(!isOnline)
       return (<><h1>🤦‍♂️It looks like u r offline </h1>
       <h2>Do whatever you want to do..............................❤️🦴</h2>
       </> )
  return (
    <>
      
    <Provider store={store}>
    <Usercontext.Provider value={{user:newData,setnewdata:setNewData}}>
    <div>
    <Header/>
    <Outlet/>
    </div>
    </Usercontext.Provider>
    </Provider>
    </>
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
        element:<Body propDrill={{name:"VivekKuShah",Branch:"Computer Science"}}/>,
        errorElement:<Error/>
      },
      {
        path:"resmenu/:restID",
        element:<Resmenu/>,
        errorElement:<Error/>
      },
      {
        path:"instamart",
        element:(<Suspense fallback={<h1>Loading......</h1>}>
          <Instamart/>
          </Suspense>)
      },
      {
        path:"cart",
        element:<Cart/>,
        errorElement:<Error/>
      },
    ]
  }  
])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);