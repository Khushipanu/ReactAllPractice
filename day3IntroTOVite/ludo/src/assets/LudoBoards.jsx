import {useState} from "react"
export default function LudoBoard(){
    let [moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0})
    let [arr,setArr]=useState(["no moves"])

    let [count,setCount]=useState(0)
    let updatedBlue=()=>{
        
        console.log(moves)
        setMoves((prev)=>{
            return {...prev,blue:prev.blue +1}
        })
        arr.push("blue moves")
        setArr(arr)

    }
    let updatedYellow=()=>{

        console.log(moves)
        setMoves((prev)=>{
            return {...prev,yellow:prev.yellow +1}
        })
    }
    let updatedGreen=()=>{
        
        console.log(moves)
        setMoves((prev)=>{
            return {...prev,green:prev.green +1}
        })
    }
        let updatedRed=()=>{
        
        console.log(moves)
        setMoves((prev)=>{
            return {...prev,red:prev.red+1}
        })
    }
    
    
    
    return(
       <div>
        <p>game begins!</p>
        <div className="board">
            <p>Blue moves={moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updatedBlue}  >+1</button>

            <p>Yellow moves={moves.yellow}</p>
            <button style={{backgroundColor:"yellow",color:"black" }} onClick={updatedYellow} >+1</button>

            <p>Green moves={moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={updatedGreen} >+1</button>
  
            <p>Red moves={moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={updatedRed} >+1</button> 
        </div>

       </div>
    )
}