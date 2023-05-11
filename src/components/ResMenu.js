import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinaryImg } from "../constant";
import { ShimmerUi } from "./ShimmerUi";

export function Resmenu(){
    let {restID} = useParams()
    console.log(restID)
    useEffect(()=>{
        getMenu();
    },[])
    let [menu,setMenu]=useState([]);
    async function getMenu(){
        let response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${restID}&submitAction=ENTER`);
        let dataOfmenu = await response.json()
        // console.log(dataOfmenu)
        setMenu(dataOfmenu.data)
    }
    console.log(menu)
    // if(menu.length===0)return; or we can use shimmer ui
    return (menu.length===0)?<ShimmerUi/>:(
        <>
        <h1>{menu.cards[0].card.card.info.name}</h1>
        <img src={cloudinaryImg+menu.cards[0].card.card.info.cloudinaryImageId
} /> 
<h1>{menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title}</h1> 
{
menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map((obj)=>{
    return <p key={obj.card.info.id}>{obj.card.info.name}</p>
})
}
{console.log(menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards)}
            </>
    )
}