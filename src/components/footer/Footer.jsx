import React from 'react'
import "./Footer.scss"
import { IoIosArrowDown } from "react-icons/io";
const Footer = () => {
    return (
        <footer>
            <div className="content">
                <div className="left">
                    <h2>Categories</h2>
                    <a href="#">web builder</a>
                    <a href="#">hosting</a>
                    <a href="#">data center</a>
                    <a href="#">Robotic automation</a>
                </div>
                <div className="left">
                    <h2>Contact</h2>
                    <a href="#">contact</a>
                    <a href="#">privacy policy</a>
                    <a href="#">tearm & service</a>
                    <a href="#">category</a>
                    <a href="#">about</a>
                </div>
                <div>
                    <span>united state <IoIosArrowDown /></span>

                </div>
            </div>
        </footer>
    )
}

export default Footer
