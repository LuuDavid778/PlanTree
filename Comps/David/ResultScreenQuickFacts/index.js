import React from 'react';
import './ResultScreenQuickFacts.css';
import {data} from "../../../data"
const groweasy = require('../../../Imgs/groweasy.svg');
const growmedium = require('../../../Imgs/growmedium.svg');
const growhard = require('../../../Imgs/growhard.svg');
const watereasy = require('../../../Imgs/watereasy.svg');
const watermedium = require('../../../Imgs/watermedium.svg');
const waterhard = require('../../../Imgs/waterhard.svg');
const ResultScreenQuickFacts = ({card}) => <div className="quickFact_box_container">
    <link href="https://fonts.googleapis.com/css2?family=Assistant&family=Poppins&display=swap" rel="stylesheet"></link>
    <div>
        <img src = {card}></img>
</div>
</div>


ResultScreenQuickFacts.defaultProps = {
    card: groweasy
}
export default ResultScreenQuickFacts;