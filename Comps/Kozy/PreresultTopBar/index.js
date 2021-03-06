import React, {useState, useEffect} from 'react'
import './topbar.css'
import HamburgerMenu from '../../David/hamburger_menu'
import  Router  from 'next/router'
import CustomButtom from '../../Kozy/CustomButton'
const horizontallogo = require("../../../Imgs/horizontal_logo.png")
const progress_stage1 = require("../../../Imgs/progress_stage1.svg")
const progressbar1 = require("../../../Imgs/progress_bar1.svg")

function ViewResult() {
    Router.push("/ResultPage")
}

const PreresultTopbar = ({question, id, progress, display, progress_stage }) => {
    const [right, setRight] = useState("300pt")

    useEffect(()=>{

        setTimeout(()=> {
            document.querySelector(".PreResultPage_button").style.opacity = "100%" 
        },500)

    },[]);

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

        <span onClick = {ViewResult}>
        <div className = "PreResultPage_button">
        <CustomButtom text ="View Results" width = "230px" height = "40px" fontSize = "16pt"></CustomButtom>
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
