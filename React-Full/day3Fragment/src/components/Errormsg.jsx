import React from 'react'
let foodItems=['Dal','Roti','Dosa','Salad','Paneer']
const Errormsg = () => {
  return (
    <div>
         {foodItems.length===0 ? <h3>im still hungry </h3>: <h2>null</h2> }
      
    </div>
  )
}

export default Errormsg;
