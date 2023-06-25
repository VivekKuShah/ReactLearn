import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinaryImg } from "../constant";
import { ShimmerUi } from "./ShimmerUi";
import useResMenu from "../utils/useResMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import {removeItem} from "../utils/cartSlice";


export function Resmenu(){
    let {restID} = useParams()
    const menu = useResMenu(restID);
    
    const dispatch = useDispatch();

    function addFoodItem(itemName){
        dispatch(addItem(itemName))
    }
    function removeFoodItem(itemName){
        dispatch(removeItem(itemName))
    }
    
    // if(menu.length===0)return; or we can use shimmer ui
    return (menu===null)?<ShimmerUi/>:(
        <>
        <h1>{menu.cards[0].card.card.info.name}</h1>
        <img  src={cloudinaryImg+menu.cards[0].card.card.info.cloudinaryImageId
        } className=""/> 
        <h1>{menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title}</h1> 
    {
    menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map((obj)=>{
    return (<p key={obj.card.info.id}> {obj.card.info.name}  <button className="p-2 m-2 bg-red-400" onClick={()=>{ removeFoodItem(obj.card.info.name)}}>
    remove</button> 
    <button className="p-2 m-2 bg-red-400" onClick={()=>{ addFoodItem(obj.card.info.name)}}>
        Add</button>
    </p>)

            })
    }
        </>
    )
}