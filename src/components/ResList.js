import { cloudinaryImg } from "../constant";

export const ResList = ({name,cloudinaryImageId,cuisines,lastMileTravel}) =>{
    return(
        <div className="card">
           <img src={cloudinaryImg+cloudinaryImageId} />
           <h2>{name}</h2>
           <h3>{cuisines.join(",")}</h3>
           <h4>{lastMileTravel}</h4>
        </div>
    )
}