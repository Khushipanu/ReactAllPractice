function handleFormSubmit(event){
    event.preventDefault()
    console.log("form was submitted")
}
export default function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder="wwrite something"/>
            <button onClick={handleFormSubmit}> Submit</button>
        </form>
    )

} 