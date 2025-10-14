import React from "react"
import Child from "./Child"
function Middle({message}){
    return(
        <>
        <h2>I am middle component</h2>
        <p>below is child component</p>
        <Child message={message}/>
        </>
    )
}
export default Middle