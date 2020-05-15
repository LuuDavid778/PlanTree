import React from 'react';
import './middle.css';
import TutorialText from '../TutorialText';
import TutorialTitle from '../TutorialTitle';

const House = require("../../../Imgs/house_card.svg");
const Hand = require("../../../Imgs/hand.svg");
const Apartment = require("../../../Imgs/apt_card.svg");

const TutorialMiddle01 = () =>{ 
    return ( <div>
        <link href="https://fonts.googleapis.com/css2?family=Assistant&family=Poppins&display=swap" rel="stylesheet"></link>
        {/* Tutorial Title */}
    <TutorialTitle></TutorialTitle>
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
            <TutorialText Headertext="First you'll select your answers" 
                Desctext="PlanTree will pick the perfect plant for you based on your selected answers!">
            </TutorialText>
</div>
    )
}

TutorialMiddle01.defaultProps = {
    middle:"Middle"
}

export default TutorialMiddle01;