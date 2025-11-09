import React, { useState } from 'react'
import Header from './components/Header'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import "./App.css"
import TodoItems from './components/TodoItems'
const App = () => {
  const todoItems=[
    {name:"buy milk",
      dueDate:"4/10/2023"
    },
     {name:"go to college",
      dueDate:"5/10/2023"
    },
    {name:"I wanna eat",
      dueDate:"12/01/2026"
    }

  ]
  const [todoItem,setTodoItems]=useState(todoItems);

  const handleNewItem=(itemName,itemDueDate)=>{
    console.log(`new item added: ${itemName} date:${itemDueDate}`)
  }
  return (
    <center className="todo-container">
      <Header/>
      <First onNewItem={handleNewItem}/>
      <TodoItems todoItems={todoItem}/>

    </center>
  )
}

export default App
