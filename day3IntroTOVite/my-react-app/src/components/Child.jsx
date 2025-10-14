import React from "react"
function Child({message}){
    return(
        <>
        <p>I am a child comp</p>
        <h4>got this from parent{message}</h4>
        </>
    
    )
}
export default Child;