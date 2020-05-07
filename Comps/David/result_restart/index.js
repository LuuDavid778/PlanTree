import React from 'react';
import "./app.css";
import Router from 'next/router'
const ReduIcon = require('../../../Imgs/redo.svg');

function RestartQuiz() {
Router.push("/PlantPage")
}


const ResultRestart = ({}) => <div onClick = {RestartQuiz}>
    <div className="ResultRestart_cont">
        <img src={ReduIcon} className="ResultRestart_icon"></img>
        <div className = "ResultRestart_P">Redo</div>
    </div>
</div>



export default ResultRestart;