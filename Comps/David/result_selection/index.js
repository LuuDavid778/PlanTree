import React from 'react'
import '../result_selection/result_selection.css'
import PlantPageQuizCard from '../../Kozy/PlantPageQuizCard'
const selectioncard = require("../../../Imgs/apt_icon.svg")



const ResultSelection = ({question,image, text, icon})=> <div className = "resultselection_cont">

<div className = "resultselection_question">{question}</div>
<div className="spacer"></div>
<div className = "resultselection_cardcont"> 
    <p>You chose:</p>
    <div className="spacer"></div>
    <PlantPageQuizCard icon = {icon} text = {text} ></PlantPageQuizCard>
    </div>
</div>

ResultSelection.defaultProps = { 
    question: "What type of house do you live in?",
    image: selectioncard, 
    text: "House",
    icon: ""
}

export default ResultSelection;