import React from 'react';
import './middle.css';

const House = require("../../../Imgs/house.svg");
const Hand = require("../../../Imgs/hand.svg");
const Apartment = require("../../../Imgs/apartment.svg");

const TutorialMiddle = () =>{ 
    return ( <div>
        <link href="https://fonts.googleapis.com/css2?family=Assistant&family=Poppins&display=swap" rel="stylesheet"></link>
        {/* Tutorial Title */}
    <div className="tutorial_title">Tutorial</div>
    {/* Tutorial picture goes here */}
    <div className="tutorial_imgContainer">
        <div className="tutorial_pg1_subtitle">What type of house do you live in?</div>
    <div className="tutorial_pg1_imgContainer">
        <img className="tutorial_pg1_img1" src={House} alt="House"></img>
        <img className="tutorial_pg1_img2" src={Hand} alt="Small hand"></img>
        <img className="tutorial_pg1_img3" src={Apartment} alt="Apartment"></img>
    </div>
    </div>
            {/* texts for the tutorial */}
        <div className="tutorial__texts">
            <div className="tutorial__texts__header">Answer the following questions</div>
            <div className="tutorial__texts__description">By answering these series of questions, PlanTree will help you find the plant you desire!</div>
        </div>
</div>
    )
}

TutorialMiddle.defaultProps = {
    middle:"Middle"
}

export default TutorialMiddle;