import React from 'react';
import './ResultScreenImg.css';
import { data } from '../../../data'
const PlantImg = require("../../../Imgs/areca_palm.png");

const ResultScreenImg = () => <div className="resultScreen_img_container">
    <img className = "resultScreen_img" src={data.resultplantimg}></img>
</div>

export default ResultScreenImg;