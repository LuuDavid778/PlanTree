import ResultScreenTitle from '../../Comps/Aksel/ResultScreenTitle'
import ResultScreenImg from '../../Comps/Aksel/ResultScreenImg'
import ResultScreenQuickFacts from '../../Comps/David/ResultScreenQuickFacts'
import ResultTexts from '../../Comps/Kozy/ResultTexts'
import ResultTopBar from '../../Comps/David/ResultTopBar'
import ResultCard from '../../Comps/David/ResultCard'
import PlantName from '../../Comps/David/resultpage_plantname'
import ResultRestart from '../../Comps/David/result_restart'
import './ResultPage.css'
import  {useEffect} from 'react';
import {checkResults} from '../../data'
import {data, changeData} from '../../data'
import  '../../data'
const waterdrop = require("../../Imgs/water_drop.svg")
const trowel = require("../../Imgs/trowel.svg")



const groweasy = require('../../Imgs/groweasy.svg');
const growmedium = require('../../Imgs/growmedium.svg');
const growhard = require('../../Imgs/growhard.svg');
const watereasy = require('../../Imgs/watereasy.svg');
const watermedium = require('../../Imgs/watermedium.svg');
const waterhard = require('../../Imgs/waterhard.svg');

const ResultPage = () => {
    {checkResults()}
    useEffect(()=>{
        setTimeout(()=> {
            document.querySelector(".ResultPage_cont").style.opacity = "100%" 
        },100)

        setTimeout(()=> {
            document.querySelector(".plant_name").style.opacity = "100%" 
        },400)

        setTimeout(()=> {
            document.querySelector(".result_box1").style.opacity = "100%" 
        },800)

        setTimeout(()=> {
            document.querySelector(".result_box2").style.opacity = "100%" 
        },1200)

        setTimeout(()=> {
            document.querySelector(".result_box3").style.opacity = "100%" 
        },1600)

        setTimeout(()=> {
            document.querySelector(".result_plant_details").style.opacity = "100%" 
        },2000)

        

    },[]);

return <div className = "ResultPage_cont">
<ResultTopBar></ResultTopBar>
<ResultScreenImg></ResultScreenImg>
<ResultScreenTitle></ResultScreenTitle>

<ResultRestart></ResultRestart>

<div> 
<ResultCard>
</ResultCard>
</div>

<div className="plant_name">
<PlantName PlantName = "Areca Palm"></PlantName>
</div>


<div className = "ResultScreen_qf_cont">
<div className = "result_box1">
<div className = "ResultScreen_qf_boxes">
<ResultScreenQuickFacts card = {data.card1} ></ResultScreenQuickFacts>
</div>
</div>
<div className = "result_box2">
<div className = "ResultScreen_qf_boxes">
<ResultScreenQuickFacts card = {data.card2} ></ResultScreenQuickFacts>
</div>
</div>
<div  className = "result_box3">
<ResultScreenQuickFacts card = {data.card3} ></ResultScreenQuickFacts>
</div>

</div>

<div className="result_plant_details">
<ResultTexts></ResultTexts>
</div>

</div>
}

export default ResultPage; 