import React from 'react'

const Card = () => {
    return (
        <div className='card'>
            <img src="https://cdn.pixabay.com/photo/2016/09/21/11/24/carousel-1684591_640.png" alt="" className="con" />
            <div className="tabs">
                <span>20% off</span>
                <span>Limited Time</span>
            </div>
            <h3>webbuilder 1</h3>
            <p>computer modern classic 24xr madern</p>
            <div className="price">
                <h2>$34.89<span>$56.89</span> <span className='off'>(20% off)</span> </h2>
            </div>
            <button>View Deal</button>
        </div>
    )
}

export default Card
