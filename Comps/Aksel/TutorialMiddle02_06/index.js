import React from 'react';
import './Middle02.css';

const Tutimg02 = require("../../../Imgs/buildings.svg");

const TutorialMiddle02_06 = ({tutimg}) => {
return ( <div>
<div className="Tutorial02_imgCont">
    <img src={tutimg}></img>
</div>
</div>
)
}

TutorialMiddle02_06.defaultProps = {
    tutimg: Tutimg02
}

export default TutorialMiddle02_06;