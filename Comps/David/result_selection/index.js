import React from 'react'
import '../result_selection/result_selection.css'

const selectioncard = require("../../../Imgs/apartment.svg")

const ResultSelection = ({question,image})=> <div className = "resultselection_cont">

<div className = "resultselection_question">{question}</div>
<div className = "resultselection_cardcont"> 
    <p>You chose:</p>
    <img src={selectioncard}></img>
    </div>
</div>

ResultSelection.defaultProps = { 
    question: "What type of house do you live in?"
}

export default ResultSelection;