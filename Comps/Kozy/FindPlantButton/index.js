import React from 'react';
import "./findplantbutton.css";

const FindPlantIcon = require('../../../Imgs/find_plant_icon.svg');

const FindPlantButton = ({}) => <div>

    <div className="find_plant_button__cont">
    <div className="find_plant_button__button">
        <div className="find_plant_button__button_inside">
            <img src={FindPlantIcon} className="find_plant_button__find_plant_icon"></img>
            <div>Find</div>
        </div>
    </div>
    </div>

</div>

FindPlantButton.defaultProps = {

}

export default FindPlantButton;