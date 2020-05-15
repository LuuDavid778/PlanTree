import React from 'react';
import './ResultScreenImg.css';
import '../../../data'
const PlantImg = require("../../../Imgs/areca_palm.png");

const ResultScreenImg = () => <div className="resultScreen_img_container">
    <img src={data.resultplantimg}></img>
</div>

export default ResultScreenImg;