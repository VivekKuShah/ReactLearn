import { useEffect, useState } from "react";

export function useOnline(){
    const[isOnline,setIsOnline] = useState(true);
    const handleOnline =()=>{
        setIsOnline(true)
    }
    const handleOffline = () =>{
            setIsOnline(false)
    }
    useEffect(()=>{
        window.addEventListener("online",handleOnline)
        window.addEventListener("offline",handleOffline)
        return ()=>{
            window.removeEventListener("online",handleOnline)
            window.removeEventListener("offline",handleOffline)
        }
    },[])
    return isOnline;
}
// It has its own state, * its has its own cool reconcilation , Suppose i will setMy isOnline it will again upadte the state variable, and it will again update my compponent which will loading this