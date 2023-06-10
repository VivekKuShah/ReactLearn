import { useState,useEffect } from "react";

function useResMenu(id){
    let [menu,setMenu]=useState(null);
    useEffect(()=>{
        getMenu();
    },[])
    async function getMenu(){
        let response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${id}&submitAction=ENTER`);
        let dataOfmenu = await response.json()
        // console.log(dataOfmenu)
        setMenu(dataOfmenu.data)
    }
    return menu;
}
export default useResMenu;
// if a file contain single thing then we have to export default