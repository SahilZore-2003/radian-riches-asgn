import React from 'react'
import { BsTrophy } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaStar } from "react-icons/fa";
const TopCard = ({ tag, image, icon, rate, index }) => {
    return (
        <div className='top-card'>
            <div className='left'>
                <span>{icon()}{tag}</span>
                <div className="img-container">
                    <img src={image} alt="" />
                    <span className='index'>{index}</span>
                </div>
            </div>
            <div className='middle'>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci consequuntur ad illo rerum voluptatum delectus exercitationem enim aliquid amet?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, assumenda!</p>
                <button>Show more <MdKeyboardArrowDown /></button>

            </div>
            <div className='end'>
                <div className="rating">
                    <h1>9.8</h1>
                    <div>exceptional</div>
                    <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <button>view</button>
            </div>
        </div>
    )
}

export default TopCard
