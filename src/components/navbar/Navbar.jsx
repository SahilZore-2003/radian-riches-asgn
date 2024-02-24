import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import "./Navbar.scss"
import { HiMiniXMark } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
const Navbar = () => {
    const [search, setSearch] = useState("")
    const [active, setActive] = useState(false)
    return (
        <nav>
            <div>
                <div className="searchBox">
                    <IoSearchOutline />
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} name="" id="" placeholder='search here' />
                </div>
                <div className={`${active ? "links active" : "links"}`}>
                    <a href="#">category</a>
                    <a href="#">website builder</a>
                    <a href="#">Today deals</a>
                </div>
                {
                    active ? <HiMiniXMark onClick={() => setActive(false)} className='navicon' /> : <HiBars3 onClick={() => setActive(true)} className='navicon' />



                }

            </div>
        </nav>
    )
}

export default Navbar
