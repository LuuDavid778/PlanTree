import React from 'react';
import './BackandNextButtons.css';

const backArrow = require("../../../Imgs/back_arrow_white.svg");
const nextArrow = require("../../../Imgs/next_arrow_white.svg");

const BackandNextButtons = () => <div className="button_center">
<div className="plantPage_button_container">
    <link href="https://fonts.googleapis.com/css2?family=Assistant&family=Poppins&display=swap" rel="stylesheet"></link>
    <div className="plantPage_back_button"><img className="white_arrow_back" src={backArrow}></img>Back</div>
    <div className="plantPage_next_button">Next<img className="white_arrow_next" src={nextArrow}></img></div>
</div>
</div>

export default BackandNextButtons;