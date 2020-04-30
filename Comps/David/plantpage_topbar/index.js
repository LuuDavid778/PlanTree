import React, {useState} from 'react'
import '../plantpage_topbar/topbar.css'
import HamburgerMenu from '../../David/hamburger_menu'
import  Router  from 'next/router'
const horizontallogo = require("../../../Imgs/horizontal_logo.svg")
const hamburgerMenu = require("../../../Imgs/hamburger_menu.svg")
const progress_stage1 = require("../../../Imgs/progress_stage1.svg")
const progressbar1 = require("../../../Imgs/progress_bar1.svg")

const PlantTopbar = ({question, id, progress, display, progress_stage }) => {
    const [right, setRight] = useState("300pt")



    return <div className = "plantpageTopBar">
    <HamburgerMenu right = {right}></HamburgerMenu>
    <div id = {id} className = "plantpageTopBar_card">
    <img onClick = {()=>{
         Router.push("/")
    }}id = {id}className = "plantpageTopbar_logo" src = {horizontallogo}></img>
    <img id = {id} className = "plantpageTopBar_progressbar" src = {progress}></img>
    <div id = {id}  className = "plantpageTopBar_header">
        <img className = "plantpageTopBar_pcircle" style = {{display: display}} src = {progress_stage}></img>
        <h2 className= "plantpageTopBar_question">{question}</h2>
    </div>
    </div>
    </div>
     
}






PlantTopbar.defaultProps = {
question: "What type of house do you live in?",
id: "",
progress: progressbar1,
display: "block",
progress_stage: progress_stage1
}
export default PlantTopbar;
