import React from 'react'
import "./Main.scss"
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import BreadCrum from '../breadcrum/BreadCrum';
const Main = () => {
    return (
        <main>
            <h1>Best Website Builders In The US</h1>
            <div className="info">
                <div>
                    <span>
                        <CiCircleCheck />
                        Last update - February 22 -2020
                    </span>
                    <span>
                        <CiCircleInfo />
                        Advertising disclosure.
                    </span>
                </div>
                <span>
                    <IoChevronDown />
                    Top Relevant.
                </span>
            </div>

            <div className="options">
                <span>tools</span>
                <span>aws builder</span>
                <span>start build</span>
                <span>build supplies</span>
                <span>tooling</span>
                <span>blue hosting</span>
            </div>

            <BreadCrum />


        </main>
    )
}

export default Main
