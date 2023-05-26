import { cloudinaryImg } from "../constant";

export const ResList = ({name,cloudinaryImageId,cuisines,lastMileTravel}) =>{
    return(
        <div className="border-2 border-solid w-60 h-96 mb-4 mt-4 shadow-md">
           <img src={cloudinaryImg+cloudinaryImageId} className="w-full h-40 " />
           <h2 className="px-1 font-medium">{name}</h2>
           <hr/>
           <div>
           <h3 className="px-1.5">{cuisines.join(", ")}</h3>
           </div>
           
           <h4 className="px-1">{lastMileTravel}</h4>
        </div>
    )
}