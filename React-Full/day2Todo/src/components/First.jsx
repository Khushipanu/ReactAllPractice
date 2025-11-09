import React, { useState } from 'react'


const First = ({onNewItem}) => {
  const [todoName,setTodoName]=useState("")
  const [dueDate,setDueDate]=useState("")
  const handleAddButton=()=>{
    onNewItem(todoName,dueDate);
    setTodoName("");
    setDueDate("")

  }
  return (
    <div>
         <div class="row kg-row">
    <div class="col-4">
      <input type="text"
      placeholder="Enter Todo here"
      name="todo"
      value={todoName}
      onChange={(e)=>setTodoName(e.target.value)}
      />
    </div>
    <div class="col-4">
      <input type="date" 
      value={dueDate}
      onChange={(e)=>setDueDate(e.target.value)}
      />
    </div>

     <div class="col-2">
      <button type="button kg-button"
       class="btn btn-success" 
       onClick={()=>handleAddButton}
       >
        Add
        </button>

      
     </div>
  </div>
      
    </div>
  )
}

export default First
