import { useEffect, useState } from "react";
import { card } from "../constant";
import { ResList } from "./ResList";
import { ShimmerUi } from "./ShimmerUi";

export const Body = () => {
    let [valueIn,setValueIn] = useState("")
    let [list,setList] = useState([]);
    
    useEffect(function effect(){
        getRestaurants()
    },[])

    async function getRestaurants(){
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING");
        let dataJson = await data.json()
        console.log(dataJson)
        setList(dataJson.data.cards[2].data.data.cards)
        
    }
    return list.length===0 ? <ShimmerUi/> : (
        <>
        <input placeholder ="search restaurant" type="text" value={valueIn} onChange={ function onChangeHandler(event){
            setValueIn(event.target.value)
        }}/>
        <button onClick={function searchRes(){
            let filterRes =  list.filter(function filterRes(res){
                console.log(res)
                return res.data.name.includes(valueIn)
            })
            setList(filterRes)
        }}>Search</button>
        <div className="cardContainer">
            {
                list.map((restaurant)=>{
                    return <ResList {...restaurant.data} key={restaurant.data.id} />
                })
            }
        </div>
        </>
    )
}