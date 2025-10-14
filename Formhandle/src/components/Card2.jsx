import React from 'react'
const Card2=(props)=>{
    return(
        <div id="card">
            <h1>username {props.name} </h1>
            <h2>city {props.city} age {props.age}</h2>
            <button>submit</button>
        </div>
    )
}
export default Card2;