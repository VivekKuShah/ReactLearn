import { useEffect, useState } from "react";
import { card } from "../constant";
import { ResList } from "./ResList";
import { ShimmerUi } from "./ShimmerUi";
import { Link } from "react-router-dom";

export const Body = () => {
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
        setAllReslist(dataJson.data.cards[2].data.data.cards);
        setFilterRes(dataJson.data.cards[2].data.data.cards);
        
    }
    
    return allReslist.length===0 ? <ShimmerUi/> : (
        <>
        <input placeholder ="search restaurant" type="text" value={valueIn} onChange={ function onChangeHandler(event){
            setValueIn(event.target.value)
        }}/>
        <button onClick={function searchRes(){
            let filter =  allReslist.filter(function filterRes(res){
                console.log(res.data.name.toLowerCase())
                return res.data.name.toLowerCase().includes(valueIn.toLowerCase())
            })
            console.log(filter)
            setFilterRes(filter)

        }}>Search</button>
        {filterRes.length === 0 ? <h1>Not Found Res.....</h1>:<div className="cardContainer">            
            {
                filterRes.map((restaurant)=>{
                    return <Link to={"/resmenu/"+restaurant.data.id}><ResList {...restaurant.data} key={restaurant.data.id} /></Link>
                })
            }
        </div> }
       
        </>
    )
}