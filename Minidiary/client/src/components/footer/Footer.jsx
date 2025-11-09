import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css"
const Footer=()=>{
    return(
        <footer>
        <div className="footer-content">
            <p>
                &copy; 2025 Quotes Platform. All rights reserved. <br />
                Made with &hearts; <a href="">Khushi</a>
            </p>
            <div className="social-links">
                 <a href=""><FaInstagram/> </a>
                 <a href=""><FaLinkedin/></a>
            </div>
        </div>
        </footer>
    )
}

export default Footer;