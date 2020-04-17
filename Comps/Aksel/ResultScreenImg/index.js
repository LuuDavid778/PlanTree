import React from 'react';
import './ResultScreenImg.css';

const PlantImg = require("../../../Imgs/areca_palm.png");

const ResultScreenImg = () => <div className="resultScreen_img_container">
    <img src={PlantImg}></img>
</div>

export default ResultScreenImg;