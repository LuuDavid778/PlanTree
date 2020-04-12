import React from 'react';
import "./tutorialtop.css";

const PrimaryLogo = require('../../../Imgs/primary_logo.svg');

const ProgressCircles = () => <div className="tutorial__topbar">
    <img src={PrimaryLogo} className="tutorial__logo"></img>
    <div class="tutorial__skip">
        <div>SKIP</div>
    </div>
</div>

export default ProgressCircles;


