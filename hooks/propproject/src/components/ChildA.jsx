import React from 'react'
import ChildB from './ChildB'


const ChildA = (props) => {

  return (
    <div>
      <ChildB title={props.title} name={props.name}/>

    </div>
  )
}

export default ChildA
