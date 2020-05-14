import React from 'react';
import "./bottomnav.css";
import Router from 'next/router'
const ReduIcon = require('../../../Imgs/redo.svg');

import '../../../pages/data'
import { data, restartResults } from '../../../pages/data';
function RestartQuiz() {
    restartResults()
    console.log(data)
Router.push("/PlantPage")
}

const BottomNav = ({}) => <div className="bottomNav_container">
    <div className="bottom_nav__cont">
        <span onClick = {RestartQuiz}>
    <div className="bottom_nav__button">
    <div className="buttom_nav__button_cont">
        <img src={ReduIcon} className="buttom_nav__button_redu_icon"></img>
        <div id = "bottom_nav__button_p">Redo</div>
    </div>
    </div>
    </span>


    </div>

</div>

BottomNav.defaultProps = {

}

export default BottomNav;