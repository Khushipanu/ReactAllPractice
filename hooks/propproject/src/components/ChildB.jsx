import React from 'react'
import ChildC from './ChildC'

const ChildB = (props) => {
  return (
    <div>

      <ChildC title={props.title} name={props.name}/>
     
    </div>
  )
}

export default ChildB
