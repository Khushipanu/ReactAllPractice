import React,{useContext} from 'react'
import {DataContext} from '../context/UserContext'
const Footer = () => {
    const username=useContext(DataContext)
  return (
    <div>
      <h1>Footer{username}</h1>
    </div>
  )
}

export default Footer
