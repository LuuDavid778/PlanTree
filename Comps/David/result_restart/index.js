import React from 'react';
import "./app.css";
import Router from 'next/router'
const ReduIcon = require('../../../Imgs/redo.svg');
import { data, restartResults } from '../../../data'
import {toggleStates, ChangeState} from '../../../togglestates'

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


const ResultRestart = ({}) => <div onClick = {RestartQuiz}>
    <div className="ResultRestart_cont">
        <img src={ReduIcon} className="ResultRestart_icon"></img>
        <div className = "ResultRestart_P">Redo</div>
    </div>
</div>



export default ResultRestart;