import React from 'react';
import "./tutorialtop.css";

const HorizontalLogo = require('../../../Imgs/horizontal_logo.svg');

const ProgressCircles = () => <div className="tutorial__topbar">
    <img src={HorizontalLogo} className="tutorial__logo"></img>
    <div className ="tutorial__skip">
        <div>SKIP</div>
    </div>
</div>

export default ProgressCircles;


