import React from 'react';
import "./plantpagequizcard.css";
const HouseCard = require('../../../Imgs/house.svg');



const PlantPageQuizCard = ({icon, text, displayCheck}) => <div>
    <img src={icon} className="plant_page_quiz_card"></img>
    </div>
    
    PlantPageQuizCard.defaultProps = {
        icon: HouseCard,
        text: "House",
        displayCheck: "none"
    }
    

export default PlantPageQuizCard;