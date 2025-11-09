import {useSelector} from "react-redux"
import AddForm from "./AddForm"
import { deleteTodo } from "../features/todo/todoSlice"
import {useDispatch} from "react-redux"
export default function Todo(){
    const dispatch=useDispatch();
   const todos=useSelector((state)=>state.todos)
   const deletedTask=(id)=>{
    console.log("deleted",id)
    dispatch(deleteTodo(id));

   }


   console.log(todos)
    return(
        <>
     
        <h3>Todo List App</h3>
           <AddForm/>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id} >{todo.task} 
                <button onClick={()=>deletedTask(todo.id )}>Delete</button>
                </li>
                ))}
        </ul>
        
        </>
    )
}