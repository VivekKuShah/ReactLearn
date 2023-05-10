import ReactDom from "react-dom/client";
import "../index.css"
import {Header} from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { About } from "./components/About";
import { Error } from "./components/Error";
import { Contact } from "./components/Contact";

export const App = () => {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>
  },
  {
    path:"/about",
    element:<About/>,
    errorElement:<Error/>
  },
  {
    path:"/contact",
    element:<Contact/>,
    errorElement:<Error/>
  }
])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);