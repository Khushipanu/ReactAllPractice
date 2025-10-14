import {useState} from "react"
export default function Like(){
    let [isLiked,setIsLiked]=useState(false);
    let [click,setClicks]=useState(0);
    
    let toggleLike=()=>{
        setIsLiked(!isLiked)
        setClicks(click+1)
    }
    let likeStyle={color:"red"}

    return(
        <div>
            <p>Clicks={click}</p>
            <p onClick={toggleLike}>
            {
                isLiked? <i className="fa-solid fa-heart" style={likeStyle}></i> : <i className="fa-regular fa-heart" ></i>
            }
            {/* <p><i className="fa-solid fa-heart"></i></p> */}
</p>
        </div>
    )
}