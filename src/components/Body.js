import { lazy, useEffect, useState } from "react";
import { card } from "../constant";
import { ResList } from "./ResList";
import { ShimmerUi } from "./ShimmerUi";
import { Link } from "react-router-dom";
import { filterData } from "../utils/SearchHelper";
import {useOnline} from "../utils/useOnline";

export const Body = ( {propDrill} ) => {
    console.log(propDrill)
    let [valueIn,setValueIn] = useState("")
    let [allReslist,setAllReslist] = useState([]);
    let [filterRes,setFilterRes] = useState([])
    
    useEffect(function effect(){
        getRestaurants()
    },[])
     
     
    async function getRestaurants(){
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING");
        let dataJson = await data.json()
        console.log(dataJson)
        setAllReslist(dataJson?.data.cards[2]?.data?.data.cards);
        setFilterRes(dataJson?.data.cards[2]?.data?.data.cards);    
    }

   // Early returns
   let isOnline = useOnline();
   if(!isOnline)
       return <h1>🤦‍♂️It looks like u r offline</h1>

    return allReslist.length===0 ? <ShimmerUi/> : (
        <>
        <div className="">
        <input className="p-5 mx-3 w-4/5 h-0  border-solid border-gray-100 rounded-2xl"   placeholder ="search restaurant" type="text" value={valueIn} onChange={ function onChangeHandler(event){
            setValueIn(event.target.value)
        }}/>
        <button className="border-2 rounded-full px-0 decoration-8 w-1/6" onClick={()=>{
            let filter = filterData(valueIn,allReslist)
            setFilterRes(filter)
        }}>Search</button>
        </div>
        {filterRes.length === 0 ? <h1>Not Found Res.....</h1>:<div className="flex flex-wrap justify-evenly">            
            {
                filterRes.map((restaurant)=>{
                    return <Link to={"/resmenu/"+restaurant.data.id}><ResList {...restaurant.data} key={restaurant.data.id} propDrillAgain ={propDrill}/></Link>
                })
            }
        </div> }
       
        </>
    )
}