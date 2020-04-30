import React from 'react';
import "./tutorialtop.css";
import Router from 'next/router'
const HorizontalLogo = require('../../../Imgs/horizontal_logo.svg');


function ClickSkip() {
    Router.push('/PlantPage')
}

const ProgressCircles = () => <div className="tutorial__topbar">
    <img src={HorizontalLogo} className="tutorial__logo"></img>
    <div onClick = {ClickSkip} className ="tutorial__skip">
        <div>SKIP</div>
    </div>
</div>

export default ProgressCircles;


