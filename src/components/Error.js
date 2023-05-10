import { useRouteError } from "react-router-dom";

export function Error(){
    let errorInformation = useRouteError();
    console.log (  errorInformation)
    return (
        <>
        <h1>Error </h1>
        <p>Oops! something went wrong</p>
        <p>{errorInformation.status} 🙌 {errorInformation.statusText}</p>
        </>
    )
}