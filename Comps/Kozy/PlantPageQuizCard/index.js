import React from 'react';
import "./plantpagequizcard.css";
const HouseIcon = require('../../../Imgs/house_icon.svg');



const PlantPageQuizCard = ({icon, text, border, onclick, width, height, id}) => <div>
    
    <div className="plant_page_quiz_card" id ={id} onClick = {onclick} style={{border:border, width:width, height: height}}>
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
        border: "",
        width: "132px",
        height :"161px",
        id: ""
    }
    

export default PlantPageQuizCard;