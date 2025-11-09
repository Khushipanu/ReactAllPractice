import React from 'react'
import Items from './Items'
import { useState } from 'react'


const FoodItems = ({items}) => {

    let [activeItems,setActiveItems]=useState([])
    
    let onBuyButton=(item,e)=>{
        let newItems=[...activeItems,item];
        setActiveItems(newItems);
    }
  return (
    <div>
  <ul class="list-group">
    {items.map((item)=>
     <Items key={item}
      foodItem={item} 
      handleBuyButton={(e)=>onBuyButton(item,e)}
      bought={activeItems.includes(item)}
      />
     
    )}
  

</ul>
      
    </div>
  )
}

export default FoodItems
