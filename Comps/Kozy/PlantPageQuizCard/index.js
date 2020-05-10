import React from 'react';
import "./plantpagequizcard.css";
const HouseIcon = require('../../../Imgs/house_icon.svg');



const PlantPageQuizCard = ({icon, text, displayCheck, border}) => <div>
    
    <div className="plant_page_quiz_card" style={{border:(border)}}>
        <div className="plant_page_quiz_card_small_cont">
        <img src={icon} className="plant_page_quiz_card_icon"></img>
        <div className="quiz_card_text">{text}</div>
    </div>
    </div>

    </div>
    
    PlantPageQuizCard.defaultProps = {
        icon: HouseIcon,
        text: "House",
        displayCheck: "none",
        border: ""
    }
    

export default PlantPageQuizCard;