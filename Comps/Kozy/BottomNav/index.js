import React from 'react';
import "./bottomnav.css";
import Router from 'next/router'
const ReduIcon = require('../../../Imgs/redo.svg');
import {toggleStates, ChangeState} from '../../../togglestates'
import { data, restartResults } from '../../../data';
function RestartQuiz() {
    toggleStates.selectedstateA1 = false
    toggleStates.selectedstateB1= false
    toggleStates.selectedstateA2= false
    toggleStates.selectedstateB2= false
    toggleStates.selectedstateA3= false
    toggleStates.selectedstateB3= false
    toggleStates.selectedstateA4 = false
    toggleStates. selectedstateB4= false
    toggleStates.selectedstateC4 = false
    ChangeState(toggleStates);
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