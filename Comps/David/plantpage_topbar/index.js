import React from 'react'
import '../plantpage_topbar/topbar.css'
const horizontallogo = require("../../../Imgs/horizontal_logo.svg")
const hamburgerMenu = require("../../../Imgs/hamburger_menu.svg")
const progress_stage1 = require("../../../Imgs/progress_stage1.svg")
const progressbar1 = require("../../../Imgs/progress_bar1.svg")



const PlantTopbar = ({question, id, progress, display }) => <div className = "plantpageTopBar">
<div id = {id} className = "plantpageTopBar_card">
<img id = {id}className = "plantpageTopbar_logo" src = {horizontallogo}></img>
<img id = {id} className = "plantpageTopBar_hbmenu" src={hamburgerMenu}></img>
<img id = {id} className = "plantpageTopBar_progressbar" src = {progress}></img>
<div id = {id}  className = "plantpageTopBar_header">
    <img className = "plantpageTopBar_pcircle" style = {{display: display}} src = {progress_stage1}></img>
    <h2 className= "plantpageTopBar_question">{question}</h2>
</div>
</div>
</div>

PlantTopbar.defaultProps = {
question: "What type of house do you live in?",
id: "",
progress: progressbar1,
display: "block"
}
export default PlantTopbar;
