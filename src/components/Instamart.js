import { useState } from "react"

const Section = ({title,des,visible,setVisible}) =>{
    
    return(
        <div className="border border-red-300 p-1 m-1">
            <h2>{title}</h2>
            {
                // Built Accordian 
                visible ? (<button onClick={()=>{setVisible(false)}} className="cursor-pointer underline">Hide</button>):
                (<button onClick={()=>{setVisible(true)}} className="cursor-pointer underline">Show</button>)
            }
            {visible && <p>{des}</p>}
        </div>
    )
}

const Instamart = ()=>{
    const [config,setConfig] = useState({
        showAbout:false,
        showCareer:false,
        showItems:false,

    })
    return(
        <>
        <h1 className="text-3xl p-1 m-1 font-bold">Instamart</h1>
        <Section title={"About Instamart"} des={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "} visible={config.showAbout} setVisible={
            ()=>{ setConfig({
                showAbout:true,
                showCareer:false,
                showItems:false,
            })}
        }/>
        <Section title={"Career Instamart"} des={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "} visible={config.showCareer} setVisible={
            ()=>{ setConfig({
                showAbout:false,
                showCareer:true,
                showItems:false,
            })}}/>
        <Section title={"Items in Instamart"} des={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "} visible={config.showItems} setVisible={
            ()=>{ setConfig({
                showAbout:false,
                showCareer:false,
                showItems:true,
            })}} />
        </>
    )
}

export default Instamart;