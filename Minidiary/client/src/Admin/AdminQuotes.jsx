import axios from "axios"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"


const AdminQuotes=({user})=>{
    const navigate=useNavigate()
    const [title,setTitle]=useState("");
    const [book,setBook]=useState("");

    useEffect(()=>{
        if(user && user.role!=="admin"){
            navigate("/")
        }
    },[user,navigate])

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!title || !book){
            alert("Pls fill all the required fields")
            return;
        }
        const myForm=new FormData()
        myForm.append("title",title)
        myForm.append("book",book)

try{
    const {data}=await axios.post(`${server}/appi/quote/new`,myForm,{
        headers:{
            token:localStorage.getItem("token")
        }
    })
    toast.success(data.message)
    setTitle("")
    setBook("")
    
    

}
catch(err){
    toast.error(err?.response?.data?.message || "Something went wrong");
}
    }

    return(
        <div style={{maxWidth:"400px","margin":"auto"}}>
            <h2>Create New Quote</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Title of the quote"
                value={title}
                required
                onChange={(e)=>setTitle(e.target.value)}
                />
                <input type="text"
                placeholder="Book name"
                value={book}
                required
                onChange={(e)=>setBook(e.target.value)}
                />

                <button type="submit">
                    Created Quote
                </button>
            </form>
        </div>


    )


}
export default AdminQuotes;