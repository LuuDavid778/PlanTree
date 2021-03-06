import React from 'react';
import "./findplantbutton.css";
import Router from 'next/router';
const FindPlantIcon = require('../../../Imgs/find_plant_icon.svg');

function startPlant() {
    Router.push("/Plantpage")
}

const FindPlantButton = ({}) => <div className="findPlant_container">

    <div className="find_plant_button__cont">
    <div className="find_plant_button__button" onClick = {startPlant}>
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