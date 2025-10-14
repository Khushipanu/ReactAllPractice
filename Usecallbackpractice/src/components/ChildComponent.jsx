import React from 'react'

const ChildComponent = React.memo(
    (props) => {
    console.log("hikhushi")
  return (
    <div>
      <button>
        {props.buttonName}
      </button>
    </div>
  )
}
)

export default ChildComponent;
//if u r sending a funciton, then react.memo wont be able to save u from re rendering
//but varibale mai ho jata hai 