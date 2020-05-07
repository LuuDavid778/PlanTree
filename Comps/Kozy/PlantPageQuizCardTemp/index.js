import React from 'react';
import "./plantpagequizcardtemp.css";

const TempHight = require('../../../Imgs/hot.svg');


const PlantPageQuizCardTemp = ({icon, text, border}) => <div>
     <div className="quiz_card_temp" style={{border:(border)}}>
        <div className="quiz_card_temp_small_cont">
        <img src={icon} className="quiz_card_temp_icon"></img>
        <div className="quiz_card_temp_text">{text}</div>
    </div>
    </div>

    </div>
    
    PlantPageQuizCardTemp.defaultProps = {
        icon: TempHight,
        text: "Hot",
        border: ""
    }
    

export default PlantPageQuizCardTemp;