import { useState } from "react";
import { card } from "../constant";
import { ResList } from "./ResList";

export const Body = () => {
    let [valueIn,setValueIn] = useState("")
    let [list,setList] = useState(card)
    return (
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