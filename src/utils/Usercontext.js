import {createContext} from "react";

const Usercontext = createContext({user:{name:"VivekKuShah",email:"vivekkushah@gmail.com"}
})

Usercontext.displayName="Usercontext";
export default Usercontext;