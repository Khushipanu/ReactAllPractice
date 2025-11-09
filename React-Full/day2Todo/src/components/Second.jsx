import React from 'react'

const Second = ({todoDate,todoName}) => {
 
  return (
    <div>
         <div class="container">
        
       <div class="row kg-row">
    <div class="col-4">
      <h4>{todoName}</h4>
    </div>
    <div class="col-4"> {todoDate}
      
    </div>
     <div class="col-2">
      <button type="button kg-button" class="btn btn-danger">
        Delete
        </button>  
     </div>
  </div>
  </div>
    </div>
  )
}

export default Second
