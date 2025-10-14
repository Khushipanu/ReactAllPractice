import {useState} from "react"
export default function Print(){
    // let count=0;
    const [count,setCount]=useState(0)


    const incrementByOne=()=>{
        setCount(count+1);
        

        
        // count++;
        // console.log(count)

    }
    const decByOne=()=>{
        if(count<0){
            setCount("negative not allowed")
            return
        }
        setCount(count-1)

    }
   
    return(
        <>
        <p>count : {count}</p>
        <button onClick={incrementByOne}> click for increment</button>
        <button onClick={decByOne}>Dec</button>
        
        </>
    )
}