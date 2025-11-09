import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

import "./Header.css"
const Header = ({isAuth}) => {
  return (
    <header>
        <div className="logo">Quote for you</div>

        <div className="link">
            <Link to={'/'}> Home </Link>
            <Link to={'/description'}>Description</Link>
            {
                isAuth?(   
                <Link to={'/account'}> Account</Link>
                )
                :
                (
                    <Link to={'/login'}> Login </Link>
                )
            }

        </div>
    </header>
  )
}

export default Header;
