import React from 'react'
import "./BreadCrum.scss"
import { FaAngleRight } from "react-icons/fa6";
const BreadCrum = () => {
    return (
        <div className='bread-crum'>
            Home <FaAngleRight />
            Hosting for all <FaAngleRight />
            hosting5 <FaAngleRight />
            hosting4 <FaAngleRight />
            hosting3
        </div>
    )
}

export default BreadCrum
