import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinaryImg } from "../constant";
import { ShimmerUi } from "./ShimmerUi";
import useResMenu from "../utils/useResMenu";

export function Resmenu(){
    let {restID} = useParams()
    const menu = useResMenu(restID);

    // if(menu.length===0)return; or we can use shimmer ui
    return (menu===null)?<ShimmerUi/>:(
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