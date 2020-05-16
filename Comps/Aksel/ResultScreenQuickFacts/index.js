import React from 'react';
import './ResultScreenQuickFacts.css';

const sunlight = require("../../../Imgs/no_sun.svg");

const ResultScreenQuickFacts = ({text, icona,iconb, iconc, displaya, displayb, displayc,   }) => <div className="quickFact_box_container">
    <link href="https://fonts.googleapis.com/css2?family=Assistant&family=Poppins&display=swap" rel="stylesheet"></link>
    <div className="quickFact_box">
        <div className = "quickFact_box_icons">
        <img src={icona} style = {{display:displaya}}></img>
        <img src={iconb} style = {{display:displayb}}className = "quickFact_box_icons_mid" ></img>
        <img src={iconc} style = {{display:displayc}}></img>
        
        </div>
        {text}</div>
</div>


ResultScreenQuickFacts.defaultProps = {
    text: "Keep out of direct sunlight",
    icona: sunlight,
    iconb: sunlight,
    iconc: sunlight,
    displaya: "none",
    displayb: "block",
    displayc: "none"
}
export default ResultScreenQuickFacts;