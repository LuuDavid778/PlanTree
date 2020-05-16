import React from 'react';
import './middle.css';
import TutorialText from '../TutorialText';
import TutorialTitle from '../TutorialTitle';

const TutorialImage01 = require("../../../Imgs/tutorial01.svg")

const TutorialMiddle01 = () =>{ 
    return ( <div>
        <link href="https://fonts.googleapis.com/css2?family=Assistant&family=Poppins&display=swap" rel="stylesheet"></link>
        {/* Tutorial Title */}
    <TutorialTitle></TutorialTitle>
    {/* Tutorial picture goes here */}
    <div className="tutorial_imgContainer">
        <div className="tutorial_pg1_subtitle">What type of house do you live in?</div>
    <div className="tutorial_pg1_imgContainer">
        <img className="tutorial_pg1_img1" src={TutorialImage01} alt="House"></img>
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