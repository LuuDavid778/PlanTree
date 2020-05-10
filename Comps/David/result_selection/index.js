import React from 'react'
import '../result_selection/result_selection.css'
import PlantPageQuizCard from '../../Kozy/PlantPageQuizCard'
const selectioncard = require("../../../Imgs/apt_icon.svg")

const ResultSelection = ({question,image, text})=> <div className = "resultselection_cont">

<div className = "resultselection_question">{question}</div>
<div className = "resultselection_cardcont"> 
<<<<<<< HEAD
    <p>You chose:</p>
    <PlantPageQuizCard text = {text} ></PlantPageQuizCard>
=======
    <p className="resultselection_card_you_chose">You chose:</p>
    <img src={image}></img>
>>>>>>> ac345a6d8b7022210e47b7caa60e86458df59e24
    </div>
</div>

ResultSelection.defaultProps = { 
    question: "What type of house do you live in?",
    image: selectioncard, 
    text: "House"
}

export default ResultSelection;