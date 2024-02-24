import React from 'react'
import TopCard from './TopCard'
import "./TopCard.scss"
import { BsTrophy } from "react-icons/bs";
import { IoLogoFoursquare } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";


const TopCardParent = () => {

    const parentStyle = {
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "1.5rem 0",
    }

    const cardData = [
        {
            tag: "Best Choice",
            icon: BsTrophy,
            image: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.1109326158.1697181750&semt=ais",
            rate: 9.8,
        },
        {
            tag: "Best Value",
            icon: IoDiamondOutline,
            image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?size=626&ext=jpg&ga=GA1.1.1109326158.1697181750&semt=ais",
            rate: 9.5,
        },
        {
            tag: "Best Product",
            icon: IoLogoFoursquare,
            image: "https://cdn.pixabay.com/photo/2016/09/21/11/24/carousel-1684591_640.png",
            rate: 8.9,
        },
    ]


    return (
        <div className='top-card-parent' style={parentStyle}>
            {
                cardData.map((e,i)=> <TopCard {...e} index={++i} />)
            }
           
            {/* <TopCard />
            <TopCard /> */}
        </div>
    )
}

export default TopCardParent
