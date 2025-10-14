import React from 'react'
import khushi from '../assets/khushi.jpeg'
import "./UserCard.css"
const UserCard=(props)=>{
    return(
        <>
        <div className='user-container'></div>
        <p id="user-name">{props.name}</p>
        <img id="user-image" src={khushi} alt="love" />
        <p id="user-desc">Description of love babbar</p>
        </>
    )
}
export default UserCard