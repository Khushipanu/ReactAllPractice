import React from 'react'
import Second from './Second'

const TodoItems = ({todoItems}) => {
  return (
   <>
         <div className="item-container">
            { todoItems.map((item,index)=>
                <Second key={index}
                 todoDate={item.todoDate} 
                todoName={item.dueDate}/>
            )}
      </div>

   </>
  )
}

export default TodoItems
