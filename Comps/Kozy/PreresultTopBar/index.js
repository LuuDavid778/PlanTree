import React, {useState} from 'react'
import '../PreresultTopbar/topbar.css'
import HamburgerMenu from '../../David/hamburger_menu'
import  Router  from 'next/router'
import CustomButtom from '../../Kozy/CustomButton'
const horizontallogo = require("../../../Imgs/horizontal_logo.png")
const hamburgerMenu = require("../../../Imgs/hamburger_menu.svg")
const progress_stage1 = require("../../../Imgs/progress_stage1.svg")
const progressbar1 = require("../../../Imgs/progress_bar1.svg")
const NextArrow = require('../../../Imgs/next_arrow_white.svg')

function ClickResult() {
    Router.push("/ResultPage")
}

const PreresultTopbar = ({question, id, progress, display, progress_stage }) => {
    const [right, setRight] = useState("300pt")

    



    return <div className = "Preresult_TopBar">
    <HamburgerMenu right = {right}></HamburgerMenu>
    <div id = {id} className = "Preresult_TopBar_card">
    <img onClick = {()=>{
         Router.push("/")
    }} id = {id} className = "Preresult_Topbar_logo" src = {horizontallogo}></img>
    <img id = {id} className = "Preresult_TopBar_progressbar" src = {progress}></img>
    <div id = {id}  className = "Preresult_TopBar_header">
        <img className = "Preresult_TopBar_pcircle" style = {{display: display}} src = {progress_stage}></img>
        <h2 className= "Preresult_TopBar_question">{question}</h2>

        <span onClick = {ClickResult}>
        <div className = "PreResultPage_button">
        <CustomButtom text ="View Results" width = "230px" height = "40px" fontSize = "16pt"></CustomButtom>
        <div className="view_results_arrow">
        <img src={NextArrow}></img>
    </div>
    </div>
    </span>

    </div>
    </div>
    </div>
     
}






PreresultTopbar.defaultProps = {
question: "What type of house do you live in?",
id: "",
progress: progressbar1,
display: "block",
progress_stage: progress_stage1
}
export default PreresultTopbar;
