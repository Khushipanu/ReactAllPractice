function doSomething(){
    console.log("hi")
}
function printBye(){
    console.log("bye")
}
function hikhushi(){
    console.log("hi khushi")
}
export default function Button(){
    return(
    <>
    <button onClick={doSomething}>click me</button>
   <p onMouseOver={printBye}>Hi khushi!!</p>
   <h4 onDoubleClick={hikhushi}>imkhushi</h4>
   <h1 onClick={hikhushi}>hi khushi</h1>
    </>

    )
     
}