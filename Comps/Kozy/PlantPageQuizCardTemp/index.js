import React from 'react';
import "./plantpagequizcardtemp.css";

const TempHight = require('../../../Imgs/hot.svg');
const TempWarm = require('../../../Imgs/warm.svg');
const TempCold = require('../../../Imgs/cold.svg');


const PlantPageQuizCardTemp = () => <div>
    <img src={TempHight}></img>
    <img src={TempWarm}></img>
    <img src={TempCold}></img>
    </div>

export default PlantPageQuizCardTemp;