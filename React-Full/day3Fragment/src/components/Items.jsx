import React from 'react'
import styles from "./Item.module.css"
const Items = ({foodItem,bought,handleBuyButton}) => {
  
  return (
    <div>
         <li className={`list-group-item kg-item ${bought &&
          'active'
         } `}>{foodItem}
         <button className={`${styles.button} btn btn-info`}
         onClick={handleBuyButton}
         >Buy</button>
         </li> 
    </div>
  )
}

export default Items;
