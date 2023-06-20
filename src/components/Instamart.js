import { useState } from "react"

const Section = ({title,des}) =>{
    const [visible,setVisible]=useState(false)
    return(
        <div className="border border-red-300 p-1 m-1">
            <h2>{title}</h2>
            {
                // Built Accordian 
                visible ? (<button onClick={()=>{setVisible(false)}}>Hide</button>):
                (<button onClick={()=>{setVisible(true)}}>Show</button>)
            }
            {visible && <p>{des}</p>}
        </div>
    )
}

const Instamart = ()=>{
    return(
        <>
        <h1 className="text-3xl p-1 m-1 font-bold">Instamart</h1>
        <Section title={"About Instamart"} des={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "}/>
        <Section title={"Career Instamart"} des={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "}/>
        <Section title={"Items in Instamart"} des={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "}/>
        </>
    )
}

export default Instamart;