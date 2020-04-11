import React from 'react';
import "./progresscircles.css";

const ProgressCircles1 = require('../../../Imgs/progress_circles1.svg');

const ProgressCircles = ({img}) => <div> 
    <div class="tutorial__progress__circles">
        <img src={img}></img>
    </div>
</div>

ProgressCircles.defaultProps = {
    img: ProgressCircles1
}

export default ProgressCircles;


