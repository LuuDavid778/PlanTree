import React from 'react';
import "./plantpagequizcard.css";

const HouseCard = require('../../../Imgs/house.svg');


const PlantPageQuizCard = ({icon, text}) => <div>
    <img src={icon} class="plant_page_quiz_card"></img>
    </div>
    
    PlantPageQuizCard.defaultProps = {
        icon: HouseCard,
        text: "House",
    }
    

export default PlantPageQuizCard;