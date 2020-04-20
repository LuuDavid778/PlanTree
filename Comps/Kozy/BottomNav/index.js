import React from 'react';
import "./bottomnav.css";

const ReduIcon = require('../../../Imgs/redo.svg');

const BottomNav = ({}) => <div className="bottomNav_container">

    <div className="bottom_nav__cont">
    <div className="bottom_nav__button">
    <div className="buttom_nab__button_cont">
        <img src={ReduIcon} className="buttom_nav__button_redu_icon"></img>
        <div>Redo</div>
    </div>
    </div>


    </div>

</div>

BottomNav.defaultProps = {

}

export default BottomNav;