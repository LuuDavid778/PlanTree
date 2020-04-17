import React from 'react';
import './ResultScreenQuickFacts.css';

const icon = require("../../../Imgs/no_sun.svg");

const ResultScreenQuickFacts = () => <div className="quickFact_box_container">
    <link href="https://fonts.googleapis.com/css2?family=Assistant&family=Poppins&display=swap" rel="stylesheet"></link>
    <div className="quickFact_box">
        <img src={icon}></img>
        Keep out of direct sunlight</div>
</div>

export default ResultScreenQuickFacts;