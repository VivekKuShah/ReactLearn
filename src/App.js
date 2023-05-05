import ReactDom from "react-dom/client";
import "../index.css"
import {Header} from "./components/Header";
import { Body } from "./components/Body";

export const App = () => {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  )
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);