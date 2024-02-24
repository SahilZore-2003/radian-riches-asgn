import React from 'react'
import "./Deals.scss"
import Card from './Card'
const Deals = () => {
    return (
        <div className='deal-container'>
            <h1>Related deals you might like for</h1>
            <div className="card-container">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Deals
